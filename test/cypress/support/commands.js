// Created a custom command for increment/decrement and to validate expected counter value

// use command cy.incrementAndCheck(times,expected value) to directly perform an increment(n-times) and assert expected value
// use command cy.decrementAndCheck(times, expected value) to directly perform an increment(n-times) and assert expected value

Cypress.Commands.add('incrementAndCheck', (times, expected) => {
  cy.get("#increment-btn").then($btn => {
    Cypress._.times(times, () => {
      cy.wrap($btn).click()
    })
  })
  cy.get("#counter").should('have.text', expected.toString())
})


Cypress.Commands.add('decrementAndCheck', (times, expected) => {
  cy.get("#decrement-btn").then($btn => {
    Cypress._.times(times, () => {
      cy.wrap($btn).click()
    })
  })
  cy.get("#counter").should('have.text', expected.toString())
})
