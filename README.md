# adaca_tech_assessment
QA Tech Assessment 

This repository contains an automated test suite built using Playwright. 
The tests are designed to validate functionalities of this app:

APP used: 
https://www.lambdatest.com/selenium-playground/
Scenarios tested: 
- Validate Input Form (https://www.lambdatest.com/selenium-playground/input-form-demo)
- Validate Submit Form (https://www.lambdatest.com/selenium-playground/simple-form-demo)

Directory Structure

    project/
    ├── tests/
        ├── input-form-validation.spec.ts
        └── website-navigate.spec.ts
    ├── pages/
        ├── demo-form.page.ts
        └── inputform.page.ts
    ├── lib/
        └── helper/
            ├── config.ts
            ├── util-random-text.ts
            └── global-setup.ts
    └── playwright.config.ts

Setup Instruction:
1. Clone the Repository

        git clone <repository-url>
        cd <repository-folder>

3. Install Dependencies
Make sure you have Node.js installed. 
Run the following command to install the required dependencies:

        npm install
        npx playwright install
        npm install @faker-js/faker

3. Run Test
To execute the tests, use this commands:

        npx playwright test

Notes/Assumption

- The project is built with Playwright version 1.50.1.
- Node.js >=16 is installed on the local or CI environment.
- No need to create a .env file. For this test, no sensitive datas are needed to be added as a secret file. Thus, any credentials/url used are declared in the config.ts file

