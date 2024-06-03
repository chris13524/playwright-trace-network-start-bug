import { test, expect } from '@playwright/test';

test('homepage load', async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.getByText('Got response')).toBeVisible();
});
