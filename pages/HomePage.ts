import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
//import { read } from './../node_modules/@types/node/fs.d';

export class HomePage extends BasePage {

  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly logo: Locator;
  readonly closeB: Locator;


  constructor(page: Page) {
    super(page);

    this.searchBox = page.locator('input[placeholder="Search for Products, Brands and More"]').first();

    this.searchButton = page.locator(
      'button[type="submit"]'
    );

    this.logo = page.locator('a[aria-label="Flipkart"]');
    this.closeB = page.getByText('✕');
  }

  async openHomePage(): Promise<void> {
    await this.navigate('/');
  }

  async searchProduct(product: string): Promise<void> {
    await this.searchBox.fill(product);
    await this.searchBox.press('Enter');
  }

  async verifySearchBox(): Promise<void> {
    await this.closeB.click();
    await this.verifyVisible(this.searchBox);
  }

}