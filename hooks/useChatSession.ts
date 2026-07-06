import { useEffect } from "react";
import { api } from "@/libs/axios";
import { localStorageUtil } from "@/libs/storage";

type SessionResponse = {
	session_id: string;
};

export function useChatSession() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const existing = localStorageUtil.getSessionId();
		if (existing) return;

		let cancelled = false;
		(async () => {
			try {
				const res = await api.post<SessionResponse>(
					"/chat/session",
					{},
					{ withCredentials: true, skipGlobalErrorToast: true },
				);
				if (cancelled) return;
				const sid = res.data?.session_id;
				if (sid) {
					localStorageUtil.setSessionId(sid);
				}
			} catch {
				// swallow: the socket handshake can still assign an id if
				// /chat/session is unavailable (e.g. legacy backend).
			}
		})();

		return () => {
			cancelled = true;
		};
	}, []);
}
