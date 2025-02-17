import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly loginButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.usernameTextBox = page.locator("id=user-name");
    this.passwordTextBox = page.locator("id=password");
    this.loginButton = page.locator("id=login-button");
  }
  async openApp() {
    await this.page.goto("https://www.saucedemo.com/v1/");
    //assertion follows
  }
  async login(username: string, password: string) {
    await this.usernameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }
}
