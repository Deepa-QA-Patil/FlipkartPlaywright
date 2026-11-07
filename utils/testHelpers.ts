    import { Page, expect } from '@playwright/test';

export class TestHelpers {

  static async waitForPageLoad(page: Page): Promise<void> {

    await page.waitForLoadState('domcontentloaded');

  }

  static async captureScreenshot(
    page: Page,
    fileName: string
  ): Promise<void> {

    await page.screenshot({
      path: `test-results/${fileName}.png`,
      fullPage: true
    });

  }

  static async verifyURL(
    page: Page,
    expectedURL: RegExp
  ): Promise<void> {

    await expect(page).toHaveURL(expectedURL);

  }

}