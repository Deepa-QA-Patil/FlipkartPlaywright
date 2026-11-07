import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  readonly mobileInput: Locator;
  readonly continueButton: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    super(page);

    this.mobileInput = page.locator(
      'input[type="text"]'
    ).first();

    this.continueButton = page.getByRole(
      'button',
      { name: /continue/i }
    );

    this.closeButton = page.getByRole(
      'button',
      { name: /close/i }
    );
  }

  async enterMobileNumber(number: string): Promise<void> {
    await this.mobileInput.fill(number);
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }

}