import { test, expect } from "@playwright/test"
import { SimpleFormDemoPage } from "../pages/demo-form.page"

test.describe("LambdaTest Selenium Playground Tests", () => {
  test("Validate Simple Form Demo functionality", async ({ page }) => {
    const simpleFormDemoPage = new SimpleFormDemoPage(page)

    await test.step("Given user navigates to the homepage", async () => {
      await simpleFormDemoPage.gotoHomePage()
    })

    await test.step("When user fills the form and submits the message", async () => {
      await simpleFormDemoPage.navigateToSimpleFormDemo()

      const message = "Welcome to LambdaTest"
      await simpleFormDemoPage.enterMessage(message)
      await simpleFormDemoPage.submitMessage()
    })

    await test.step("Then the correct message should be displayed", async () => {
      const expectedMessage = "Your Message: Welcome to LambdaTest"
      await simpleFormDemoPage.verifyDisplayedMessage(expectedMessage)
    })
  })
})
