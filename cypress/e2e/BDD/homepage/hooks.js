before(function () {
    cy.fixture("homepage").then((data) =>  {
    this.data = data 
  })
})


beforeEach (function () {
      cy.visit ("/")
      cy.viewport(1740, 1200)
    //  cy.get('.osano-cm-accept-all').click()
    }
)


