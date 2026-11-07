import { test as base } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';

type FlipkartFixtures = {
  homePage: HomePage;
  searchPage: SearchPage;
  productPage: ProductPage;
  cartPage: CartPage;
  loginPage: LoginPage;
};

export const test = base.extend<FlipkartFixtures>({

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }

});

export { expect } from '@playwright/test';