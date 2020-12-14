import { ManagerPage } from "./employeeManaer";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new ManagerPage(driver);

test("it works", async () => {
  await page.navigate();
  await page.doSearch("purple");
  expect(await page.getResults()).toContain("purple");
});
afterAll(async () => {
  await driver.quit();
});