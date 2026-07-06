import type { NextConfig } from "next";

// [SECURITY FIX] Added HTTP security headers to harden the application against
// clickjacking (X-Frame-Options), MIME-sniffing (X-Content-Type-Options),
// information leakage (Referrer-Policy), and feature abuse (Permissions-Policy).
// Also added a Content-Security-Policy header. Note: unsafe-inline is required
// for styled-jsx / inline Tailwind styles used throughout the app. Remove it
// incrementally as nonce-based CSP is adopted. unsafe-eval is intentionally
// excluded. connect-src allows the backend API and WebSocket origins configured
// via NEXT_PUBLIC_API_URL / NEXT_PUBLIC_SOCKET_URL; tighten to specific
// production domains before go-live.
const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    // [SECURITY FIX] Basic CSP — restricts script/style/img/connect sources.
    // 'unsafe-inline' for scripts and styles is required by styled-jsx and
    // Tailwind CSS inline utilities currently in use. Tighten by replacing
    // 'unsafe-inline' with nonces/hashes as a follow-up.
    // frame-src permits Google Maps embeds used in ContactUsModule.
    // connect-src permits the configured API/WebSocket backend.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://www.gstatic.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https: wss:",
      "frame-src https://maps.google.com https://www.google.com https://maps.googleapis.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
  {
    // [SECURITY FIX] HSTS tells browsers to only connect over HTTPS for 1 year.
    // includeSubDomains and preload can be added once verified safe.
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  // [SECURITY FIX] Apply security headers to all routes.
  async headers() {
    // In development, add 'unsafe-eval' for Turbopack compatibility
    const isDev = process.env.NODE_ENV === "development";
    const devSecurityHeaders = isDev
      ? securityHeaders.map(header =>
          header.key === "Content-Security-Policy"
            ? {
                ...header,
                value: header.value
                  .replace(
                    "script-src 'self' 'unsafe-inline' https://www.gstatic.com",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com"
                  )
                  .replace(
                    "connect-src 'self' https: wss:",
                    "connect-src 'self' https: wss: http://localhost:* ws://localhost:*"
                  )
              }
            : header
        )
      : securityHeaders;

    return [
      {
        source: "/(.*)",
        headers: devSecurityHeaders,
      },
    ];
  },
};

export default nextConfig;
