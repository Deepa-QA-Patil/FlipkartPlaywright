import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

  constructor(protected page: Page) {}

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }

  async enterText(
    locator: Locator,
    value: string
  ): Promise<void> {
    await locator.fill(value);
  }

  async verifyVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async getText(locator: Locator): Promise<string> {
    return (await locator.innerText()).trim();
  }

  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `test-results/${name}.png`,
      fullPage: true
    });
  }

}