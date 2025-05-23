# Counter Web app Test Plan

## Overview

**Project:** Counter Web Application

**Description/Acceptance Criteria:** A simple counter app that only displays positive numbers. It should increment and decrement when the respective buttons are pressed, but never display negative values.

## Scope

- Functional testing of counter increment/decrement logic
- E2E and edge case validation
- Unit and development-driven tests
- Accessibility Edge checks
- Non-functional checks (browser compatibility, dependency security)

## Testing Strategy

- Manual and automated testing using Cypress for E2E and edge cases
- Unit tests for core counter logic
- Accessibility testing for keyboard navigation and WCAG compliance
- Non-functional testing for browser compatibility and dependency scanning

## Test Case Blueprint

> **Note:** The following is a sample format for a detailed test case when the test suite is created in Testrail or Xray. Each test case would include these fields for clarity and traceability.

| Test Case ID: TCF1                                                                   |
| ------------------------------------------------------------------------------------ |
| **Title:** Increment Button Functionality                                            |
| **Objective:** Verify that clicking the increment button increases the counter by 1. |
| **Preconditions:** Counter app is loaded and counter value is 0.                     |
| **Test Steps:**                                                                      |
| **1.** Locate the increment button on the counter app.                               |
| **2.** Click the increment button once.                                              |
| **Expected Result:** Counter displays 1.                                             |
| **Actual Result:** (To be filled during execution)                                   |
| **Status:** (Pass/Fail)                                                              |
| **Notes:** N/A                                                                       |

## Test Cases

### Functional

- TCF1: When pressing increment, verify that counter shows 1
- TCF2: When counter is 0, verify clicking decrement does not display a negative number in the counter

### E2E Edge Cases

- TCE1: When counter is 1, verify clicking decrement turns the counter to 0 
- TCE2: Verify rapid decrement clicks does not display negative number when counter is set to 0
- TCE3: Verify rapid decrement clicks when counter is set to a non-zero decreases the count accordingly without app crash
- TCE4: Verify rapid increment clicks when counter is set to 0 and it increases count accordingly without app crash

### Unit/development-driven Edge Cases

- TCU1: Verify when `Number.MAX_SAFE_INTEGER` + 2(increment) throws precision error or unexpected behavior
- TCU2: Verify when `Number.MAX_SAFE_INTEGER` - 1(decrement) displays the expected output in the counter(9007199254740991 - 1)
- TCU3: Verify web app behavior when a non-integer or null value is set as initial counter value
- TCU4: Verify web app behavior when an extremely large number(eg:1000000000000000000000) is set as initial counter value

### Accessibility Edge Cases

- TCA1: Verify all the buttons(increment and decrement) are working as expected and operable with keyboard buttons - tab and enter key(Note: This is an accessibility edge case according to WCAG Standard)
- TCA2: Verify when increment and decrement buttons are operated through tab, the buttons are highlighted accordingly when selected

### Non-functional Tests:

- TCNF1: Verify browser compatibility for the counter app
- TCNF2: Verify dependency scanning gives 0 vulnerabilities for the packages used in package.json

## Test Environment

- Browsers: Chrome, Firefox (latest versions)
- OS: Windows, macOS
- Tools: Cypress, npm, GitHub Actions
- Language: Javascript

## Test Deliverables

The following are the deliverables usually produced during a testing phase. 
- Test cases (as above)
- Test execution report
- Defect log(can be logged in jira or github)
