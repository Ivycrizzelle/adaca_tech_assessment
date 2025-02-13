import { expect, test } from "@playwright/test"
import { FormSubmitPage } from "../pages/inputform.page"
import { SimpleFormDemoPage } from "../pages/demo-form.page"
import { config } from "../lib/helper/config"
import {
  generateName,
  generateFakeCode,
  generateValidEmailAddress,
  generateValidPassword,
} from "../lib/helper/util-random-text"

const Name = generateName()
const ExportCode = generateFakeCode()
const email = generateValidEmailAddress()
const password = generateValidPassword()

test.describe("Input form validation test", () => {
  test("Submit form with random text", async ({ page }) => {
    const formSubmitPage = new FormSubmitPage(page)
    const simpleFormDemoPage = new SimpleFormDemoPage(page)

    // Test steps
    await test.step("Given user redirects to input homepage", async () => {
      await simpleFormDemoPage.gotoHomePage()
      await formSubmitPage.navigateToFormDemo()
      //assert that member is now in the input form page
      await expect(page).toHaveURL(config.CRED.FORM_DEMO)
    })
    await test.step("When user fills in datas in the form and submits it", async () => {
      await page.getByRole("textbox", { name: "Name" }).fill(`${Name}`)
      await page.getByRole("textbox", { name: "Email*" }).fill(`${email}`)
      await page.getByRole("textbox", { name: "Password*" }).fill(`${password}`)
      await page.getByRole("textbox", { name: "Company" }).fill("test company")
      await page.getByRole("textbox", { name: "Website" }).fill("webQAtest")

      await page.getByRole("combobox").selectOption("AT")

      await page
        .getByRole("textbox", { name: "City", exact: true })
        .fill("Australia")

      await page
        .getByRole("textbox", { name: "Address 1" })
        .fill("test address 1")

      await page
        .getByRole("textbox", { name: "Address 2" })
        .fill("test address 2")

      await page
        .getByRole("textbox", { name: "City* State*" })
        .fill("city state")
      await page.getByRole("textbox", { name: "Zip Code*" }).click()
      await page
        .getByRole("textbox", { name: "Zip Code*" })
        .fill(`${ExportCode}`)

      formSubmitPage.submitForm()
    })
    await test.step("Then user should see text validation for successfull submission", async () => {
      await expect(page.getByText("Thanks for contacting us")).toBeVisible()
    })
  })
})
