# 1. Task

This is a counter that should only display positive numbers, it should increment and decrement when pressed accordingly


- [x] choose a testing e2e framework (recommended cypress)
- [x] apply e2e setup to run a single test: When pressing "increment", verify that counter shows 1
- [ ] Create a Github Action pipeline, that runs the test on every PR as a "verify" step
- [x] extend the tests: create a test plan (can be a markdown file in the repo under i.e.`test-plan/`), that covers the edge cases
- [x] implement some tests of the test-plan
 
All code should be on Github, the GH runner should have had at least one seccessful run.  


### Steps to Run Locally

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npx http-server -p 3000
```


### Cypress Setup
```bash
npm install
cd test
npx cypress open
```