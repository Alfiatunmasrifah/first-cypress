describe('Login launch', () => {
    it ('launch app', () =>{
         cy.visit('https://parabank.parasoft.com/parabank/index.htm')
         cy.get("input[name='username']").type('ale')
         cy.get("input[name='password']").type('ale123')
         cy.get(':nth-child(5) > .button').click()
    })
})