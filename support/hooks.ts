import {Before , After} from "@cucumber/cucumber";
import {chromium} from "@playwright/test";
import {MyWorld} from "./world.js";

Before(async function (this:MyWorld) {
    this.browser = await chromium.launch({
        headless:false
    })

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  
});

After(async function (this:MyWorld){
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
})