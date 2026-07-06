import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Importing the route executes the module; we do it dynamically inside tests
// so env changes apply.
async function loadRoute() {
	return await import("@/app/api/contact/route");
}

function mockRequest(body: unknown): Request {
	return new Request("http://localhost/api/contact", {
		method: "POST",
		body: JSON.stringify(body),
		headers: { "Content-Type": "application/json" },
	});
}

describe("/api/contact proxy", () => {
	const originalFetch = globalThis.fetch;
	const originalEnv = process.env.EMAIL_BACKEND_URL;

	beforeEach(() => {
		vi.resetModules();
		process.env.EMAIL_BACKEND_URL = "http://backend.local";
	});

	afterEach(() => {
		globalThis.fetch = originalFetch;
		process.env.EMAIL_BACKEND_URL = originalEnv;
	});

	it("forwards body to backend and returns 200 on success", async () => {
		const fetchMock = vi.fn().mockResolvedValue(
			new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			})
		);
		globalThis.fetch = fetchMock as typeof fetch;

		const { POST } = await loadRoute();
		const body = {
			type: "newsletter",
			name: "Alice",
			email: "alice@example.com",
			company: "Acme",
		};
		const res = await POST(mockRequest(body));

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const [url, init] = fetchMock.mock.calls[0];
		expect(url).toBe("http://backend.local/api/email");
		expect(init.method).toBe("POST");
		expect(JSON.parse(init.body)).toEqual(body);

		expect(res.status).toBe(200);
		await expect(res.json()).resolves.toEqual({ success: true });
	});

	it("forwards upstream 400 { error } verbatim", async () => {
		globalThis.fetch = vi.fn().mockResolvedValue(
			new Response(JSON.stringify({ error: "bad email" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			})
		) as typeof fetch;

		const { POST } = await loadRoute();
		const res = await POST(mockRequest({ type: "newsletter", email: "x" }));

		expect(res.status).toBe(400);
		await expect(res.json()).resolves.toEqual({ error: "bad email" });
	});

	it("returns 502 when upstream fetch throws", async () => {
		globalThis.fetch = vi.fn().mockRejectedValue(new Error("ECONNREFUSED")) as typeof fetch;

		const { POST } = await loadRoute();
		const res = await POST(mockRequest({ type: "newsletter" }));

		expect(res.status).toBe(502);
		const body = await res.json();
		expect(body).toEqual({ error: expect.any(String) });
	});

	it("returns 500 when body is not valid JSON", async () => {
		globalThis.fetch = vi.fn() as typeof fetch;

		const { POST } = await loadRoute();
		const badReq = new Request("http://localhost/api/contact", {
			method: "POST",
			body: "not-json",
			headers: { "Content-Type": "application/json" },
		});
		const res = await POST(badReq);

		expect(res.status).toBe(500);
	});
});
