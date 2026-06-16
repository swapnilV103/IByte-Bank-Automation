import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class RegisterPage {
  constructor(private readonly page: Page) {}

  async registerUser(username: string, password: string) {
    await this.page.locator("#customer\\.firstName").fill("Swapnil");
    await this.page.locator("#customer\\.lastName").fill("Automation");
    await this.page.locator("#customer\\.address\\.street").fill("123 Test Street");
    await this.page.locator("#customer\\.address\\.city").fill("Pune");
    await this.page.locator("#customer\\.address\\.state").fill("Maharashtra");
    await this.page.locator("#customer\\.address\\.zipCode").fill("411001");
    await this.page.locator("#customer\\.phoneNumber").fill("9876543210");
    await this.page.locator("#customer\\.ssn").fill("123456789");

    await this.page.locator("#customer\\.username").fill(username);
    await this.page.locator("#customer\\.password").fill(password);
    await this.page.locator("#repeatedPassword").fill(password);

    await this.page.locator("input[value='Register']").click();
    await expect(this.page.locator("h1")).toContainText("Welcome");
  }
}