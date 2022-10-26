

describe('facebook example ', () => {
  beforeEach(() => {
    
    cy.visit('https://en-gb.facebook.com/')
 
  })
  it('By ID', () => {
    
    cy.get("#email")

  })

  it('By class', () => {
    
    cy.get(".email")

  })

  it('By tag', () => {
    
    cy.get("nav")

  })
  it('By tag value', () => {
    
    cy.get('[name="pass"]')

  })
  it('By different types', () => {
    
    cy.get('button[type="button"][title="close-banner"]')

  })
  it('By contains name', () => {
    
    cy.get('*[class^="card"]') //we are looking for any selector which class name are starting from word - card 

  })
  it('Using get with find and Eq',()=>{
    cy.get('tbody').find('td').find('div').find('button').eq(0)

  })
  it.only('Using get with find and Eq',()=>{
    cy.viewport(1800, 700)
    cy.get('aside').find('div').find('ol').find('li').find('a').eq(0)

  })
 })
 
  