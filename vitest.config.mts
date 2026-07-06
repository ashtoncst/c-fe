import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "happy-dom",
		globals: true,
		setupFiles: ["./test/setup.ts"],
		// Exclude Playwright E2E tests (they live under e2e/)
		exclude: ["node_modules", "dist", ".next", "e2e/**"],
		coverage: {
			provider: "v8",
			reporter: ["text", "html", "json"],
			thresholds: {
				lines: 80,
				branches: 80,
				functions: 80,
				statements: 80,
			},
			exclude: [
				"node_modules/**",
				".next/**",
				"e2e/**",
				"**/*.config.{ts,js,mjs}",
				"**/*.d.ts",
				"test/**",
			],
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./"),
		},
	},
});
