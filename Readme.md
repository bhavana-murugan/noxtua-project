# Test Setup

- All test related cypress files are maintained under the folder `test` 

- The **Test Plan** for the web app is in `test/test-plan`

- Github Workflow `test.yaml` runs on every Pull Request to the master branch. Test reports are generated as markdown file and uploaded as artifact which can be found under Workflow Run(for both success and failure checks)
  
- Expected failures in the test_suite are marked as skipped for a success run.
  


# Steps to run Cypress locally
```bash
npm install

# Make sure you run the Web App before running Cypress
npx http-server -p 3000

# To run Cypress Spec from CLI
npx cypress run --project ./test \ 
          --spec test/cypress/e2e/test_suite.cy.js \
          --browser firefox

# To run Cypress UI
cd test
npx cypress open 
```

# 1. Task
This is a counter that should only display positive numbers, it should increment and decrement when pressed accordingly

- [x] choose a testing e2e framework (recommended cypress)
- [x] apply e2e setup to run a single test: When pressing "increment", verify that counter shows 1
- [x] Create a Github Action pipeline, that runs the test on every PR as a "verify" step
- [x] extend the tests: create a test plan (can be a markdown file in the repo under i.e.`test-plan/`), that covers the edge cases
- [x] implement some tests of the test-plan
- [x] All code should be on Github, the GH runner should have had at least one seccessful run.  


### Steps to Run Locally
1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npx http-server -p 3000
```