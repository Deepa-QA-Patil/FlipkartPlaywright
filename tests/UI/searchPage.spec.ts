import { test, expect } from '@playwright/test';
import { SearchData } from '..//../test-data/SearchData';

for (const data of SearchData) {

  test(`Verify Flipkart search for ${data.searchTerm}`, async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await page.getByText('✕').click();

    const searchBox = page.getByPlaceholder('Search for Products, Brands and More').first();

    await searchBox.fill(data.searchTerm);
    await searchBox.press('Enter');

    await expect(page).toHaveURL(/search/);

    await expect(page.locator('body')).toContainText(
      data.searchTerm,
      { ignoreCase: true }
    );

  });

}