import { NextResponse } from "next/server";

// Thin proxy: all business logic (templates, validation, sanitize, rate-limit,
// Mailgun + Resend fallback) lives in converge-global-be. This route exists
// only to preserve the existing /api/contact surface that the 5 form-consuming
// modals already depend on.
//
// Response contract (what the modals expect):
//   200 { success: true }
//   4xx/5xx { error: string }

function getBackendUrl(): string {
	const explicit = process.env.EMAIL_BACKEND_URL;
	if (explicit) return explicit.replace(/\/$/, "");
	const publicApi = process.env.NEXT_PUBLIC_API_URL;
	if (publicApi) return publicApi.replace(/\/api\/?$/, "").replace(/\/$/, "");
	return "http://localhost:3000";
}

export async function POST(request: Request): Promise<NextResponse> {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return NextResponse.json(
			{ error: "Invalid request body." },
			{ status: 500 }
		);
	}

	const backendUrl = `${getBackendUrl()}/api/email`;

	try {
		const upstream = await fetch(backendUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});

		const text = await upstream.text();
		let json: unknown;
		try {
			json = text ? JSON.parse(text) : {};
		} catch {
			json = { error: "Backend returned an invalid response." };
		}

		return NextResponse.json(json, { status: upstream.status });
	} catch (err) {
		console.error("[/api/contact] proxy fetch failed:", err);
		return NextResponse.json(
			{ error: "Email service unavailable. Please try again later." },
			{ status: 502 }
		);
	}
}
