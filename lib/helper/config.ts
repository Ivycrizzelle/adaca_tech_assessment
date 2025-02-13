/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export interface AppCredential {
  URL: string
  FORM_DEMO: string
}

export interface EnvironmentCredentials {
  CRED: AppCredential
}

export const config: EnvironmentCredentials = {
  CRED: {
    // SITE_URLS
    URL: process.env.URL || "https://www.lambdatest.com/selenium-playground/",
    FORM_DEMO:
      process.env.FORM_DEMO ||
      "https://www.lambdatest.com/selenium-playground/input-form-demo",
  },
}
