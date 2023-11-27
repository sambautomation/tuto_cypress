const {Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

/*
  Scenario: Acceder aux cours 
*/

When('I click on "Start Learning"', function ()  {
  cy.get(this.data.learningButton).click()
})
Then('I should have access Courses', () => {
  cy.redirection('#courses')
  cy.get('[data-test="course-0"]').should("be.visible")
    })
  

/*
Then('I should have access Courses', () => {
  cy.location().should((location) => {
  expect(location.hash).to.eq('#courses')
})
*/





