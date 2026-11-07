import { test, expect } from '../../Fixtures/testFixtures';

test.describe('Flipkart Product Details', () => {

  test('Verify product details page', async ({
    homePage,
    searchPage,
    productPage
  }) => {

    await homePage.openHomePage();

    await homePage.searchProduct('mobile phones');

    await searchPage.verifySearchResults();

    await searchPage.openFirstProduct();

    await productPage.verifyProductPage();

    const title = await productPage.getProductTitle();

    console.log('Product title:', title);

    expect(title.length).toBeGreaterThan(0);

  });

});