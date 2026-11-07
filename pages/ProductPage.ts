import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

  readonly product: Locator;
  readonly addToCartButton: Locator;
  readonly buyNowButton: Locator;
  readonly price: Locator;

  constructor(page: Page) {
    super(page);

    this.product = page.locator('div[class="lvJbLV col-12-12"]');

    this.addToCartButton = page.getByRole(
      'button',
      { name: /add to cart/i }
    );

    this.buyNowButton = page.getByRole(
      'button',
      { name: /buy now/i }
    );

    this.price = page.locator('div.Nx9bqj');
  }

  async verifyProductPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/search\?q=mobile%20phones/);
    await expect(this.product.nth(1)).toBeVisible();
  }

  async getProductTitle(): Promise<string> {
    return await this.product.first().innerText();
  }

  async addProductToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

}