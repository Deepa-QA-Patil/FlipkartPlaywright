import { test, expect } from '../../Fixtures/testFixtures';

test.describe('Flipkart Login', () => {

  test('Verify login entry is available', async ({
    page,
    homePage
  }) => {

    await homePage.openHomePage();

    const login = page.getByText(
      'Login',
      { exact: true }
    ).first();

    await expect(login).toBeVisible();

  });

});