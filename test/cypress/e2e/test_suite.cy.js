/// <reference types="cypress" />



describe('Functional Test', () => {

  it('TC1:checks ofincrement button 0 to 1', () => {
    cy.visit('/')
    cy.incrementAndCheck(1, 1)
  })

  it('TC2:check decrement button 0 to 0', () => {
    cy.visit('/')
    cy.decrementAndCheck(1, 0)

  })

})

describe('E2E Edge Cases', () => {

  it('TC1: When counter is 1, verify clicking decrement turns the counter to 0', () => {
    cy.visit('/')
    cy.incrementAndCheck(1, 1)
    cy.decrementAndCheck(1, 0)
  })


  it('TC2:Rapid decrement clicks when counter is 0', () => {
    cy.visit('/')
    cy.decrementAndCheck(35, 0)

  })

  it('TC3:Rapid decrement clicks when counter is non-zero', () => {
    cy.visit('/')
    cy.incrementAndCheck(25, 25)
    cy.decrementAndCheck(25, 0)

  })

  it('TC4:Rapid increment clicks when counter is 0', () => {
    cy.visit('/')
    cy.incrementAndCheck(35, 35)

  })


})
