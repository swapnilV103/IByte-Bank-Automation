import { Given, When, Then } from "@cucumber/cucumber";
import { MyWorld } from "../support/world";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { AccountOverviewPage } from "../pages/AccountOverview";
import { generateUsername, generatePassword } from "../utils/testData";

console.log("REGISTER.STEPS.TS LOADED");
Given("the user is on the Parabank home page", async function (this: MyWorld) {
    const homePage = new HomePage(this.page);
  
    await homePage.goto();
  });

  When(
    "the user registers a new account with valid details",
    async function (this: MyWorld) {
      const homePage = new HomePage(this.page);
      const registerPage = new RegisterPage(this.page);
  
      this.username = generateUsername();
      this.password = generatePassword();
  
      await homePage.clickRegisterLink();
  
      await registerPage.registerUser(this.username, this.password);
      await homePage.logout();
    }
  );

  When(
    "the user logs in using the newly created credentials",
    async function (this: MyWorld) {
      const homePage = new HomePage(this.page);
  
      await homePage.login(this.username, this.password);
      await homePage.clickOverviewLink();
    }
  );

  Then(
    "the account overview page should be displayed",
    async function (this: MyWorld) {
      const accountOverviewPage = new AccountOverviewPage(this.page);
  
      await accountOverviewPage.verifyAccountOverviewDisplayed();
    }
  );

  Then(
    "the account balance should be printed",
    async function (this: MyWorld) {
      const accountOverviewPage = new AccountOverviewPage(this.page);
      await accountOverviewPage.printAccountBalance();
    }
  );




