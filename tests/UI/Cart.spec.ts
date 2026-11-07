import { test, expect } from '../../Fixtures/testFixtures';

test.describe('Flipkart Shopping Cart', () => {

  test('Verify cart page navigation', async ({
    page,
    cartPage
  }) => {

    await cartPage.openCart();

    await cartPage.verifyCartPage();

    console.log('Cart page opened successfully');

  });

  
});