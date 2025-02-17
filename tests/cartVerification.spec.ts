import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
test("Verification of Cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openApp();
  await loginPage.login("standard_user", "secret_sauce");
});
