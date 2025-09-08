describe('Registration launch', () => {
    it ('launch app', () =>{
         cy.visit('https://parabank.parasoft.com/parabank/index.htm')
         cy.get("input[name='username']").type('Kei')
         cy.get("input[name='password']").type('kei123')
         cy.get(':nth-child(5) > .button').click()
    })
})