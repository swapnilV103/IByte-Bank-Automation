import type { Locator, Page } from "@playwright/test";
import { config } from "../config/config.js";

export class HomePage {
    
  private readonly registerLink: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;


  constructor(private readonly page: Page) {
    this.registerLink = page.locator("text=Register");
    this.usernameInput = page.locator("input[name='username']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("input[value='Log In']");
  }

  async goto() {
    await this.page.goto(config.baseUrl);
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}