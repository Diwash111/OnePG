it('google test', function() {
    //login Page                
    
cy.visit('https://adminsandbox.nepalpayment.com/')  
    //click on donate button  
cy.get('button').contains('Donate').click()
 cy.get('#Amount').type(100)
 cy.get('[type="checkbox"]').check()
 cy.get('#CustomerName').type('Testeeer')
 cy.get('#CustomerEmail').type('Testeer@gmail.com')
 cy.wait(1000)
 cy.get('button').contains('Pay amount').click()
cy.wait(1000)
    //Payment page

 //cy.get('.image-radio').click()
 cy.scrollTo('bottom')
 
// cy.get('#pills-contact-tab').click({ multiple: true })         //khalti
 //cy.get('[alt="KHALTI"]').click({ multiple: true }) 
 cy.get('[alt="Test MBanking"]').eq(0).click({ force: true })     //Test

 //cy.get('button').contains('Continue').click()
 cy.wait(1000)
//cy.get('div').contains('Continue').click()
cy.get('input[type=submit]').click()    
//cy.get('#btn btn-block px-0 btn-primary px-4 w-600').contains('Continue').dblclick()
cy.get('input[name="username"]').type('test')
cy.get('input[name="password"]').type('test')
cy.get('button').contains('Login').click()
cy.wait(1000)
cy.get('input[name="txnpin"]').type('1234')
cy.wait(1000)
cy.get('button').contains('Pay Now').click()
//cy.get('button').contains('Cancel').click()
cy.wait(1000)
cy.get('.btn').contains('Back').click()
})
