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
        termsInput().should('exist')
    })

    //inputting a user test
    it('test inputting into the form and checking expected value', () =>{
        nameInput().type("Johnathan")
        nameInput().should('have.value', 'Johnathan')
    })


})

//definitions of components
const foobarInput = () => cy.get('input[name=foobar]')
const submitBtn = () => cy.get('button[id="submitBtn"]')
const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const termsInput = () => cy.get('input[name="terms"]')
