
it('google test', function() {
   //Login Page          
cy.visit('https://merchantsandbox.nepalpayment.com/')   

  
cy.login('testapiuser','Qwe@123','TEST01')
   //dashboard
cy.visit('https://merchantsandbox.nepalpayment.com/paymentlink/GeneratePaymentLink')
cy.get('input[name="CustomerName"]').type('diwssssss')
cy.get('input[name="CustomerEmail"]').type('diwssss@gmail.com')
cy.get('input[name="CustomerMobile"]').type('9861016577')
cy.get('input[name="TransactionAmount"]').type('5000')
cy.get('#PaymentType').select('Partial Payment')
  //to activate date picker
cy.get('input[name="ValidityTime"]').focus()   
  //select the value                                           
cy.get('select[class="hourselect form-control input-sm"]').eq(0).select(15)             
cy.get('div[class="content"]').click('bottomRight',{force: true})
cy.get('textarea[name="TransactionRemarks"]').type('teesst')
cy.get('input[name="MinimumAmount"]').type('500')             
cy.get('input[name="TransactionPin"]').type('11111')
cy.get('input[name="DisplayDate"]').focus().get('td[class="available"]').eq(0).click({force: true})
cy.get('div[class="content"]').click('bottomRight',{force: true})
cy.wait(1000)
cy.get('button').contains('Send Email').click()
cy.wait(1000)
  //Approve Payment Link page
cy.visit('https://merchantsandbox.nepalpayment.com/paymentlink/ApprovePaymentLink')
cy.scrollTo('top')
cy.get('i[class="icon-menu9"]').eq(0).click('right',{force: true})
cy.contains('Accept').click({force: true})
cy.wait(1000)
cy.get("#Remarks").click().type('test')
cy.wait(1000)
cy.get("#TransactionPin").click().type('11111')
cy.wait(1000)
cy.get('.btn.btn-success.btn-sm').should('be.visible').eq(0).click()
cy.wait(1000)
cy.get('.btn.btn-success.btn-sm').should('be.visible').first().click()
})   //Link is generated.