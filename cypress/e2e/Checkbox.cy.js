describe('Checkbox test', () => {
    it ('launch app', () =>{
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       
       cy.get('#checkBoxOption1').check().should('be.checked')
       cy.get('#checkBoxOption2').check().should('be.checked')
       cy.wait(4000)
       cy.get('#checkBoxOption1').check().uncheck().should('not.be.checked')
      
    })
})