import { test, expect } from '../../Fixtures/testFixtures';

test.describe('Flipkart Homepage', () => {

  test('Verify homepage title', async ({ page, homePage }) => {

    await homePage.openHomePage();

    await expect(page).toHaveTitle(/Online Shopping Site/i);

  });

  test('Verify search box is visible', async ({ homePage }) => {

    await homePage.openHomePage();

    await homePage.verifySearchBox();

  });

  test('Verify homepage URL', async ({ page, homePage }) => {

    await homePage.openHomePage();

    await expect(page).toHaveURL(/flipkart\.com/);

  });

});