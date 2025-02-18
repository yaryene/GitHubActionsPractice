import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  readonly homePageHeading: Locator;

  readonly backPackAddToCartButton: Locator;
  readonly backPackRemoveButton: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backPackAddToCartButton = page
      .locator("div")
      .filter({ hasText: /^\$29\.99ADD TO CART$/ })
      .getByRole("button");
    this.backPackRemoveButton = page.getByRole("button", { name: "REMOVE" });

    this.cartIcon = page.locator("id=shopping_cart_container");

    this.homePageHeading = page.locator("//div[@class='app_logo']");
  }

  async backPackAddToCart() {
    await this.backPackAddToCartButton.click();
  }
  async gotoCart() {
    await this.cartIcon.click();
  }
}
