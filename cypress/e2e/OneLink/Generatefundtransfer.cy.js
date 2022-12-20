// import {LoginPage} from "./pages/Loginpage.cy"
// const LoginPage = newLoginPage()
// describe('Generate fund Transfer', () => {
    it('google test', function() {

    
        //login Page                
        
    cy.visit('https://merchantsandbox.nepalpayment.com/')    
      
    
   
    cy.login('testapiuser','Qwe@123','TEST01')
       //Dashboard
    cy.visit('https://merchantsandbox.nepalpayment.com/FundTransfer/GenerateFundTransfer')
    cy.get('input[name="MerchantTxnId"]').type(19)
    cy.get('input[name="Amount"]').type(1000)
    cy.get('textarea[name="TransactionRemarks"]').type('test')
    cy.wait(200)
    cy.get('#api_user_name').select('testapift').contains('testapift')
  
    cy.get('#other_account').select('Diwakar Baskota - Test API - FTTESTBANK(1900000000000076)').contains('Diwakar Baskota - Test API - FTTESTBANK(1900000000000076)')   
    cy.wait(2000)
    cy.get('#DestinationBank').select('Test Bank')
    cy.get('input[name="DestinationAccName"]').type('Sabin Dawadi')
    cy.get('input[name="DestinationAccNo"]').type('19000000000000000005')
    cy.get('#is_destination_mobile').eq(0).select('No')
    
    cy.wait(2000)
    cy.get('input[name="TransactionPin"]').type('11111')
    cy.get('button[type=submit]').contains('Generate').click()
    })
    