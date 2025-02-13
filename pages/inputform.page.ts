import { Page, expect } from "@playwright/test"
import { config } from "../lib/helper/config"

export class FormSubmitPage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async navigateToFormDemo(): Promise<void> {
    await this.page.getByRole("link", { name: "Input Form Submit" }).click()
  }
  async submitForm(): Promise<void> {
    await this.page.getByRole("button", { name: "Submit" }).click()
  }
}
