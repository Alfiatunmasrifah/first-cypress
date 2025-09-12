describe('Dynamic Dropdown launch', () => {
    it ('launch app', () =>{
         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         cy.wait(2000)
         //static dropdown
        // cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')
         //dynamic dropdown
         cy.get('#autocomplete').type('ame').get('.ui-menu-item').each((ele, index)=>{
            if(ele.text()==='American Samoa')
            cy.wrap(ele).click()
         })
    })
})