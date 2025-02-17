import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

test("Verification of Cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await loginPage.openApp();
  await loginPage.login("standard_user", "secret_sauce");

  await expect(homePage.homePageHeading).toBeVisible();

  await homePage.backPackAddToCart();

  await expect(homePage.backPackRemoveButton).toBeVisible();
  await expect(homePage.cartIcon).toHaveText("1");
  await homePage.gotoCart();

  await expect(cartPage.backpackItemLink).toHaveText("Sauce Labs Backpack");
});
