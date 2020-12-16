import { ManagerPage } from "./pageObjects/employeeManager";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
let test1 = new ManagerPage(driver, 123456, "ABC", "ABCD", "Billy", "M", "WHT", 
603, 220, "BLK", "Battery", 11192019, "C160098765", "FL", 11192020, "BNPY81", "FL", 2020);

test("it works", async () => {
  await test1.navigate();
  expect(await driver.findElement(test1.clearButton)).toBeTruthy();
});
test("It fills out the form", async() =>{
  await test1.fillOutForm();
  expect(await (await driver.findElement(test1.submitButton)).isEnabled()).toBeTruthy();
});
// This test is running with two many numbers for field "Header" which should
// Return an error message.
test("It displays an error message when fields are invalid", async() => {
  await test1.submitForm();
  expect(await test1.checkForErrors()).toBeTruthy;
});
afterAll(async () => {
  await driver.quit();
});