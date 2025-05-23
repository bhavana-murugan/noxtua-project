/// <reference types="cypress" />

// I have created custom commands for the below script. commands logic can be found in support/commands.js
// I have set up the baseUrl in the config file 

describe('Functional Test', () => {

  it('TCF1:When pressing increment, verify that counter shows 1', () => {
    cy.visit('/')
    cy.incrementAndCheck(1, 1)
  })

  it.skip('TCF2:When counter is 0, verify clicking decrement does not display a negative number in the counter', () => {
    cy.visit('/')
    cy.decrementAndCheck(1, 0)

  })

})

describe('E2E Edge Cases', () => {

  it('TCE1:When counter is 1, verify clicking decrement turns the counter to 0 ', () => {
    cy.visit('/')
    cy.incrementAndCheck(1, 1)
    cy.decrementAndCheck(1, 0)
  })

  it.skip('TCE2:Verify rapid decrement clicks does not display negative number when counter is set to 0', () => {
    cy.visit('/')
    cy.decrementAndCheck(35, 0)

  })

  it('TCE3:Verify rapid decrement clicks when counter is set to a non-zero decreases the count accordingly without app crash', () => {
    cy.visit('/')
    cy.incrementAndCheck(25, 25)
    cy.decrementAndCheck(25, 0)

  })

  it('TCE4:Verify rapid increment clicks when counter is set to 0 and it increases count accordingly without app crash', () => {
    cy.visit('/')
    cy.incrementAndCheck(35, 35)

  })


})
