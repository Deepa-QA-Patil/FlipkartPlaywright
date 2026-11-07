import { test, expect } from '../../Fixtures/testFixtures';

test.describe('Flipkart Sorting Functionality', () => {

  test('Verify sorting options', async ({
    page,
    homePage
  }) => {

    await homePage.openHomePage();

    await homePage.searchProduct('mobiles');

    await expect(page).toHaveURL(/search/);

    await expect(
      page.getByText(
        /Price -- Low to High/i
      ).first()
    ).toBeVisible();

    await expect(
      page.getByText(
        /Price -- High to Low/i
      ).first()
    ).toBeVisible();

  });

  test('Sort products by low to high price', async ({
    page,
    homePage
  }) => {

    await homePage.openHomePage();

    await homePage.searchProduct('headphones');

    const sortOption = page.getByText(
      /Price -- Low to High/i
    ).first();

    await expect(sortOption).toBeVisible();

    await sortOption.click();

    await expect(page).toHaveURL(/search/);

    console.log('Price sorting option selected');

  });

});