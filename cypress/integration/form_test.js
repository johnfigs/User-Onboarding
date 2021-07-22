
describe('User-Onboarding-App', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })
})


//ensuring Cypress is setup
it('sanity check for making sure everything is setup',()=>{
    //check some assertions here
    expect(1+2).to.equal(3)     //strict
    expect(2+2).not.to.equal(5)
})
