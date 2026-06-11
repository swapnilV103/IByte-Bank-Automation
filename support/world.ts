import {World, setWorldConstructor} from "@cucumber/cucumber";
import type { IWorldOptions } from "@cucumber/cucumber";
import type {Browser, BrowserContext, Page} from "@playwright/test";

export class MyWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    username!: string;
    password!: string;

    constructor(options: IWorldOptions) {
        super(options);
    }
};

setWorldConstructor(MyWorld);
