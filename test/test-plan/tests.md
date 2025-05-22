# Test Plan

Acceptance Criteria: This is a counter that should only display positive numbers, it should increment and decrement when pressed accordingly

## Functional
- TC1:checks ofincrement button 0 to 1
- TC2: When counter is 0, verify clicking decrement does not display a negative number in the counter

### E2E Edge Cases:
- TC1: When counter is 1, verify clicking decrement turns the counter to 0 
- TC2: Verify rapid decrement clicks does not display negative number when counter is set to 0
- TC3: Verify rapid decrement clicks when counter is set to a non-zero.(eg:35) decreases the count accordingly without app overload or crash
- TC4: Verify rapid increment clicks when counter is set to 0 and it increases count accordingly without app overload


### Unit/development-driven Edge Cases 
- TCU1: Verify when Number.MAX_SAFE_INTEGER + 2(increment) throws precision error or unexpected behavior
- TCU2: Verify when Number.MAX_SAFE_INTEGER - 1(decrement) displays the expected output in the counter(9007199254740991 - 1)
- TCU3: Verify web app behavior when a non-integer or null value is set as initial counter value
- TCU4: Verify web app behavior when an extremely large number(eg:1000000000000000000000) is set as initial counter value


### Accessibility Edge Cases
- TCA1: Verify all the buttons(increment and decrement) are working as expected and operable with keyboard buttons - tab and enter key(Note: This is an accessibility edge case according to WCAG Standard)
- TCA2: Verify when increment and decrement buttons are operated through tab, the buttons are highlighted accordingly when selected


### Other Tests:
- Verify browser compatibility for the counter app
- Dependency scanning gives 0 vulnerabilities for the packages used in package.json
