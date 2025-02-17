import { Locator, Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
readonly backpackItemLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.backpackItemLink = page.locator("//div[@class='inventory_item_name']");
    
  }
}
//div[@class='inventory_item_name']