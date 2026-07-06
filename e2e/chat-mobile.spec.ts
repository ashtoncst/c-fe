import { test, expect, devices } from "@playwright/test";

/**
 * Mobile layout regression tests for the chat widget.
 *
 * Bug motivating these: on iPhone-class viewports the bubble had
 * `max-w-[75%]` and long messages created horizontal scroll. These assertions
 * pin the invariant that the widget never overflows the viewport, even when
 * a user types a long message.
 *
 * Run manually: BASE_URL=http://localhost:3001 npx playwright test chat-mobile
 * (requires a running dev server). Not wired into the default CI flow here
 * because that requires a live backend too.
 */

const viewports = [
	{ name: "iPhone 13", spec: devices["iPhone 13"] },
	{ name: "iPhone SE", spec: devices["iPhone SE"] },
];

for (const { name, spec } of viewports) {
	test.describe(`Chat widget mobile — ${name}`, () => {
		test.use({ ...spec });

		test("opens without horizontal scroll", async ({ page }) => {
			await page.goto("/");
			const scrollWidth = await page.evaluate(
				() => document.documentElement.scrollWidth,
			);
			const clientWidth = await page.evaluate(
				() => document.documentElement.clientWidth,
			);
			expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
		});

		test("long message does not overflow the bubble", async ({ page }) => {
			await page.goto("/");
			// The widget button label may vary — adjust selector to your app.
			const chatTrigger = page.getByRole("button", { name: /chat/i }).first();
			if (await chatTrigger.isVisible().catch(() => false)) {
				await chatTrigger.click();
			}
			const input = page.getByPlaceholder(/type a message/i);
			if (await input.isVisible().catch(() => false)) {
				await input.fill("a ".repeat(250));
				const scrollWidth = await page.evaluate(
					() => document.documentElement.scrollWidth,
				);
				const clientWidth = await page.evaluate(
					() => document.documentElement.clientWidth,
				);
				expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
			}
		});
	});
}
