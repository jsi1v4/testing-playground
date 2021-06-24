import puppeteer, { Browser, Page } from "puppeteer";
import "expect-puppeteer";

describe("e2e-test Home page", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should display title text on page", async () => {
    await expect(page).toMatch("Testing Playground");
    await expect(page).toMatch("A");
    await expect(page).toMatch("B");
    await expect(page).toMatch("C");
  });

  it("should display table content on page", async () => {
    await expect(page).toMatchElement("table");
    await expect(page).toMatch("A");
    await expect(page).toMatch("B");
    await expect(page).toMatch("C");
  });
});
