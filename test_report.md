## Test Report
```

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        14.3.3                                                                         │
  │ Browser:        Firefox 138 (headless)                                                         │
  │ Node Version:   v23.7.0 (/opt/homebrew/Cellar/node/23.7.0/bin/node)                            │
  │ Specs:          1 found (test_suite.cy.js)                                                     │
  │ Searched:       cypress/e2e/test_suite.cy.js                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  test_suite.cy.js                                                                (1 of 1)


  Functional Test
    ✓ TCF1:When pressing increment, verify that counter shows 1 (140ms)
    - TCF2:When counter is 0, verify clicking decrement does not display a negative number in the counter

  E2E Edge Cases
    ✓ TCE1:When counter is 1, verify clicking decrement turns the counter to 0  (200ms)
    - TCE2:Verify rapid decrement clicks does not display negative number when counter is set to 0
    ✓ TCE3:Verify rapid decrement clicks when counter is set to a non-zero decreases the count accordingly without app crash (4043ms)
    ✓ TCE4:Verify rapid increment clicks when counter is set to 0 and it increases count accordingly without app crash (2793ms)


  4 passing (7s)
  2 pending


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        6                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      2                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     7 seconds                                                                        │
  │ Spec Ran:     test_suite.cy.js                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  test_suite.cy.js                         00:07        6        4        -        2        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:07        6        4        -        2        -  

```
