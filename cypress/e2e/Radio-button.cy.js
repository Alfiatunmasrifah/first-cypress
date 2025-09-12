describe('Radio button test', () => {
    it ('launch app', () =>{
       cy.visit('https://artoftesting.com/samplesiteforselenium')
       cy.wait(3000)
       cy.get('input#female').check().should('be.checked')
       cy.get('input#female').should('have.value', 'female')
    })
})