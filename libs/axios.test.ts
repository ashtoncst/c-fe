import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("react-hot-toast", () => ({
	default: { error: vi.fn() },
}));

// Import after the mock so the interceptor binds to the spy.
import axiosInstance from "./axios";
import type { AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

const toastError = toast.error as unknown as ReturnType<typeof vi.fn>;

/**
 * The shared axios instance toasts a generic "Unable to connect" message
 * (and a few sibling messages) for every failed request. That is the right
 * default for user-initiated calls (cart, checkout, forms) but wrong for
 * best-effort bootstrap calls like the chat session POST or chat history
 * fetch — those already swallow errors and must not surface a scary toast
 * when the REST backend is unreachable. The `skipGlobalErrorToast` config
 * flag lets a call site opt out of the global toast while still rejecting
 * the promise so its own catch can run.
 */
describe("axios response interceptor — skipGlobalErrorToast", () => {
	beforeEach(() => {
		toastError.mockReset();
	});

	const installAdapter = (
		factory: (config: AxiosRequestConfig) => Promise<never>,
	) => {
		const original = axiosInstance.defaults.adapter;
		axiosInstance.defaults.adapter = factory as never;
		return () => {
			axiosInstance.defaults.adapter = original;
		};
	};

	const networkErrorAdapter = (config: AxiosRequestConfig) => {
		const err = new Error("Network Error") as Error & {
			request: object;
			config: AxiosRequestConfig;
			isAxiosError: boolean;
		};
		err.request = {};
		err.config = config;
		err.isAxiosError = true;
		return Promise.reject(err);
	};

	it("suppresses the network-error toast when the flag is set", async () => {
		const restore = installAdapter(networkErrorAdapter);
		try {
			await expect(
				axiosInstance.get("/whatever", {
					skipGlobalErrorToast: true,
				}),
			).rejects.toBeDefined();
			expect(toastError).not.toHaveBeenCalled();
		} finally {
			restore();
		}
	});

	it("still fires the network-error toast for normal requests (regression)", async () => {
		const restore = installAdapter(networkErrorAdapter);
		try {
			await expect(axiosInstance.get("/whatever")).rejects.toBeDefined();
			expect(toastError).toHaveBeenCalledWith(
				"Unable to connect. Please check your internet connection.",
				expect.any(Object),
			);
		} finally {
			restore();
		}
	});

	it("suppresses the timeout toast when the flag is set", async () => {
		const restore = installAdapter((config) => {
			const err = new Error("timeout") as Error & {
				code: string;
				config: AxiosRequestConfig;
				isAxiosError: boolean;
			};
			err.code = "ECONNABORTED";
			err.config = config;
			err.isAxiosError = true;
			return Promise.reject(err);
		});
		try {
			await expect(
				axiosInstance.get("/slow", { skipGlobalErrorToast: true }),
			).rejects.toBeDefined();
			expect(toastError).not.toHaveBeenCalled();
		} finally {
			restore();
		}
	});

	it("suppresses the 5xx toast when the flag is set", async () => {
		const restore = installAdapter((config) => {
			const err = new Error("server error") as Error & {
				response: { status: number; data: unknown; headers: object; statusText: string; config: AxiosRequestConfig };
				config: AxiosRequestConfig;
				isAxiosError: boolean;
			};
			err.response = {
				status: 503,
				data: {},
				headers: {},
				statusText: "Service Unavailable",
				config,
			};
			err.config = config;
			err.isAxiosError = true;
			return Promise.reject(err);
		});
		try {
			await expect(
				axiosInstance.get("/boom", { skipGlobalErrorToast: true }),
			).rejects.toBeDefined();
			expect(toastError).not.toHaveBeenCalled();
		} finally {
			restore();
		}
	});
});
