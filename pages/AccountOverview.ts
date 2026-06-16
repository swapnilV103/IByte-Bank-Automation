import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class AccountOverviewPage {
  constructor(private readonly page: Page) {}

  async verifyAccountOverviewDisplayed() {
    await expect(
      this.page.getByRole("heading", { name: "Accounts Overview" })
    ).toBeVisible();
  }

  async printAccountBalance() {
    const balance = await this.page
      .locator("#accountTable tbody tr:first-child td:nth-child(2)")
      .innerText();

      const accountBalance = balance?.trim() ?? "Balance not found";
      console.log(`Account Balance: ${accountBalance}`);
      return accountBalance;
  }
}