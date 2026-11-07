import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {

  readonly productLinks: Locator;
  readonly resultHeading: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    super(page);

    this.productLinks = page.locator('a[href*="/p/"]');

    this.resultHeading = page.locator('h1');

    this.searchBox = page.locator('input[name="q"]');
  }

  async verifySearchResults(): Promise<void> {
    await expect(this.page).toHaveURL(/\/www.flipkart.com/);

    await expect(this.productLinks.first()).toBeVisible();
  }

  async getProductCount(): Promise<number> {
    return await this.productLinks.count();
  }

  async searchAnotherProduct(product: string): Promise<void> {
    await this.searchBox.fill(product);
    await this.searchBox.press('Enter');
  }

  async openFirstProduct(): Promise<void> {
    await this.productLinks.first().click();
  }

}