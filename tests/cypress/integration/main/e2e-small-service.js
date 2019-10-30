describe('Small Service Test', function() {
  it('Open-Assesment Wepage', () => {
    cy.visit('http://localhost:3030/assessment')
  })

  it('clicks service page "type"', function() {
    cy.get('#minor-service').click()
  })
  it('enters data on page, "type"', function() {
    cy.get('#search')
      .type('Stephen') //types in the name Stephen
      .contains('this field must have a An Assessor Name')

    cy.get('div')
    cy.get('#root_bikeMake')
      .type('Shimano')
      .contains("This field can't be empty.")
    cy.get('#root_bikeModel').type('VeryFast')

    cy.get('#root_bikeColor').type(Red)

    cy.get('#root_approxBikeValue').type('$200.00')
    cy.get('#root_serivces_0')
      .uncheck()
      .uncheck(value)
    cy.get('#root_serivces_1')
      .uncheck()
      .uncheck(value)
    cy.get('#root_serivces_2')
      .uncheck()
      .uncheck(value)
    cy.get('#root_serivces_3')
      .uncheck()
      .uncheck(value)
    cy.get('#root_serivces_4')
      .uncheck()
      .uncheck(value)
    cy.get('#root_serivces_5')
      .uncheck()
      .uncheck(value)
    cy.get('#root_serivces_6')
      .uncheck()
      .uncheck(value)

    cy.get('#root_serivces_7').check()
    cy.get('#root_serivces_9').check()
  })
})
