import { test, expect } from '../../Fixtures/testFixtures';

test.describe('Flipkart Filter Functionality', () => {

  test('Verify brand filter is available', async ({
    page,
    homePage
  }) => {

    await homePage.openHomePage();

    await homePage.searchProduct('laptops');

    await expect(page).toHaveURL(/search/);

    const brandFilter = page.getByText(
      'Brand',
      { exact: true }
    );

    await expect(brandFilter.first()).toBeVisible();

  });

  test('Verify price filter is available', async ({
    page,
    homePage
  }) => {

    await homePage.openHomePage();

    await homePage.searchProduct('mobiles');

    await expect(page).toHaveURL(/search/);

    await expect(
      page.getByText('Price', { exact: true }).first()
    ).toBeVisible();

  });

});