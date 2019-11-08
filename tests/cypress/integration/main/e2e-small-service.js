describe('Small Service Test', function() {
  it('Open-Assesment Wepage', () => {
    cy.visit('/assessment')
  })

  it('clicks service page "type"', function() {
    cy.get('#minor-service').click()
    //.dblclick()
  })
  it('enters data on page, "type"', function() {
    // cy.get('input.search').type('Hermino Blick') //types in the name Stephen
    //.contains('this field must have a An Assessor Name')

    // cy.get('#root_assessor')
    // .type('Shimano')

    cy.get('input#root_bikeModel')
      .clear()
      .type('Very Fast')

    cy.get('#root_bikeColor').type('Red')

    cy.get('#approxBikeValue').type('$200.00')
    // cy.get('#root_serivces_0').uncheck()
    // //   .uncheck(value)
    // cy.get('#root_serivces_1').uncheck()
    // //   .uncheck(value)
    // cy.get('#root_serivces_2').uncheck()
    // // .uncheck(value)
    // cy.get('#root_serivces_3').uncheck()
    // //.uncheck(value)
    // cy.get('#root_serivces_4').uncheck()
    // //.uncheck(value)
    // cy.get('#root_serivces_5').uncheck()
    // //.uncheck(value)
    // cy.get('#root_serivces_6').uncheck()
    // //.uncheck(value)

    // cy.get('#root_serivces_7').check()
    // cy.get('#root_serivces_9').check()
  })
})
