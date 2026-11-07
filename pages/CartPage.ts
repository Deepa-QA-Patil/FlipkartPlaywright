import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  readonly cartHeading: Locator;
  readonly cartItems: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    super(page);

    this.cartHeading = page.getByText(
      'My Cart',
      { exact: true }
    );

    this.cartItems = page.locator(
      'a[href*="/p/"]'
    );

    this.removeButton = page.getByText(
      'Remove',
      { exact: true }
    );
  }

  async openCart(): Promise<void> {
    await this.navigate('/viewcart');
  }

  async verifyCartPage(): Promise<void> {
    await expect(this.page).toHaveURL(/viewcart/);
  }

  

}