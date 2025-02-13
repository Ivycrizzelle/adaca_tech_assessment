import { Page, expect } from "@playwright/test"
import { config } from "../lib/helper/config"

export class SimpleFormDemoPage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async gotoHomePage(): Promise<void> {
    await this.page.goto(config.CRED.URL, { waitUntil: "load" })
  }

  async navigateToSimpleFormDemo(): Promise<void> {
    await this.page.getByRole("link", { name: "Simple Form Demo" }).click()
    await expect(this.page).toHaveURL(
      "https://www.lambdatest.com/selenium-playground/simple-form-demo"
    )
  }

  async enterMessage(message: string): Promise<void> {
    await this.page.getByPlaceholder("Please enter your Message").click()
    await this.page.fill("#user-message", message)
  }

  async submitMessage(): Promise<void> {
    await this.page.getByRole("button", { name: "Get Checked Value" }).click()
  }

  async verifyDisplayedMessage(expectedMessage: string): Promise<void> {
    await expect(this.page.getByText(expectedMessage)).toBeVisible()
  }
}
