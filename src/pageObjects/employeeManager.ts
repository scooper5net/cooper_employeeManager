import { By, until, WebDriver } from "selenium-webdriver";

// Setting up page object for enter-wanted information
// Documentation for this application can be found at 
// "https://devmountain-qa.github.io/enter-wanted/1.4_README.html"

export class ManagerPage {
  driver: WebDriver;
  
  // This is the URL to the enter-wanted application.
  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  
  // Locators for the buttons on the page.
  submitButton: By = By.xpath('//button[@id="saveBtn"]');
  clearButton: By = By.xpath('//button[@id="clearBtn"]');
  
  // Locators for all of the fields
  headerField: By = By.xpath('//input[@name="hdrInput"]');
  mkeField: By = By.xpath('//input[@name="mkeInput"]');
  oAIField: By = By.xpath('//input[@name="oriInput"]');
  nameField: By = By.xpath('//input[@name="namInput"]');
  sexField: By = By.xpath('//input[@name="sexInput"]');
  raceField: By = By.xpath('//input[@name="racInput"]');
  heightField: By = By.xpath('//input[@name="hgtInput"]');
  weightField: By = By.xpath('//input[@name="wgtInput"]');
  hairfield: By = By.xpath('//input[@name="haiInput"]');
  offenseField: By = By.xpath('//input[@name="offInput"]');
  dateOfWarrantField: By = By.xpath('//input[@name="dowInput"]');
  driversLicenseField: By = By.xpath('//input[@name="olnInput"]');
  dlStateField: By = By.xpath('//input[@name="olsInput"]');
  dlExpireDateField: By = By.xpath('//input[@name="olyInput"]');
  licensePlateField: By = By.xpath('//input[@name="licInput"]');
  licenseStateField: By = By.xpath('//input[@name="lisInput"]');
  LicenseYearField: By = By.xpath('//input[@name="liyInput"]');
  
  // This is all of the information we will need to fill 
  // out the fields in order to submit the information.
  header: number;
  mke: string;
  oAI: string;
  name: string;
  sex: string;
  race: string;
  height: number;
  weight: number;
  hair: string;
  offense: string;
  dateOfWarrant: number;
  driversLicense: string;
  dlState: string;
  dlExpireDate: number;
  licensePlate: string;
  licenseState: string;
  licenseYear: number;

  //for the methods, I'm going to copy/paste from another page object for some basic functionality
  //including the constructor and navigate functions. I'll make the doSearch and getResults using those.
  constructor(driver: WebDriver, header: number, mke: string, oAI: string, 
    name: string, sex: string, race: string, height: number, weight: number, 
    hair: string, offense: string, dateOfWarrant: number, driversLicense: string, 
    dlState: string, dlExpiredDate: number, licensePlate: string, licenseState: string,
    licenseYear: number) {
    this.driver = driver;
    this.header = header;
    this.mke = mke;
    this.oAI = oAI;
    this.name = name;
    this.sex = sex;
    this.race = race;
    this.height = height;
    this.weight = weight;
    this.hair = hair;
    this.offense = offense;
    this.dateOfWarrant = dateOfWarrant;
    this.driversLicense = driversLicense;
    this.dlState = dlState;
    this.dlExpireDate = dlExpiredDate;
    this.licensePlate = licensePlate;
    this.licenseState = licenseState;
    this.licenseYear = licenseYear;
  }

  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.clearButton));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.clearButton))
    );
  }

  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }

  async fillOutForm() {
    await this.sendKeys(this.headerField, this.header);
    await this.sendKeys(this.mkeField, this.mke);
    await this.sendKeys(this.oAIField, this.oAI);
    await this.sendKeys(this.nameField, this.name);
    await this.sendKeys(this.sexField, this.sex);
    await this.sendKeys(this.raceField, this.race);
    await this.sendKeys(this.heightField, this.height);
    await this.sendKeys(this.weightField, this.weight);
    await this.sendKeys(this.hairfield, this.hair);
    await this.sendKeys(this.offenseField, this.offense);
    await this.sendKeys(this.dateOfWarrantField, this.dateOfWarrant);
    await this.sendKeys(this.driversLicenseField, this.driversLicense);
    await this.sendKeys(this.dlStateField, this.dlState);
    await this.sendKeys(this.dlExpireDateField, this.dlExpireDate);
    await this.sendKeys(this.licensePlateField, this.licensePlate);
    await this.sendKeys(this.licenseStateField, this.licenseState);
    await this.sendKeys(this.LicenseYearField, this.licenseYear);
  }

  async submitForm() {
    await this.driver.findElement(this.submitButton).isEnabled();
    return (await this.driver.findElement(this.submitButton)).click();
  }

  async clearForm() {
    await this.driver.findElement(this.clearButton).isEnabled();
    return (await this.driver.findElement(this.clearButton)).click();
  }

  async checkForErrors() {
    await this.driver.findElement(By.xpath('//li[@class="errorMessage"]'))
    return (await (await this.driver.findElement(By.xpath('//li[@class="errorMessage"]'))).isDisplayed());
  }
}