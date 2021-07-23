//writing tests here
describe('User-Onboarding-App', () =>{
    //visit localhost project website
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })

    //ensuring Cypress is setup
    it('sanity check for making sure everything is setup',()=>{
        //check some assertions here
        expect(1+2).to.equal(3)     //strict
        expect(2+2).not.to.equal(5)
    })

    //ensuring we can read elements
    it('check that elements exist', () =>{
        foobarInput().should('not.exist')
        submitBtn().should('exist')
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsCheck().should('exist')
    })

    //inputting a user's name test
    it('test inputting into the form and checking expected value', () =>{
        nameInput().type("Johnathan")
        nameInput().should('have.value', 'Johnathan')
    })
    //inputting a user's email test
    it('test inputting email', () =>{
        emailInput().type("test@test.com")
    })
    //inputting a user's password test
    it('Inputting a user password', () =>{
        passwordInput().type("mySecret!!!!!!")
    })
    //checking the user's terms checkbox test
    it('checking the terms checkbox test', () => {
        termsCheck().check()
    })
    //check if user can submit the form
    it('checking if user can submit form', () =>{
        nameInput().type("Johnathan")
        emailInput().type("test@test.com")
        passwordInput().type("mySecret!!!!!!")
        termsCheck().check()
        submitBtn().click()
    })
    //check form validation is occurring if no username is entered
    it('checking empty values in username', () => {
        nameInput().type("Johnathan")
        nameInput().clear()
        invalidForm().should('exist')
    })



})

//definitions of components & get
const foobarInput = () => cy.get('input[name=foobar]')
const submitBtn = () => cy.get('button[id="submitBtn"]')
const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const termsCheck = () => cy.get('[type="checkbox"]')
const invalidForm = () => cy.get('div[id="errorInName"]')
