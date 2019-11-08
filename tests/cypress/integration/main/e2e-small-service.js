Cypress.on(
  'uncaught:exception',
  (err, runnable) =>
    // returning false here prevents Cypress from
    // failing the test. We do this because of some ugly js errors
    // from a js library we are using
    false
)

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

    cy.get('input#root_assessor')
      .click()
      .type('Pat Caramello')
    cy.get('#root_bikeMake')
      .clear()
      .type('Shimano')
    cy.get('input#root_bikeModel')
      .clear()
      .type('Very Fast')

    cy.get('#root_bikeColor').type('Red')

    cy.get('#root_approxBikeValue')
      .clear()
      .type('200')
    cy.get('#root_services_0').uncheck()

    cy.get('#root_services_1').uncheck()

    cy.get('#root_services_2').uncheck()

    cy.get('#root_services_3').uncheck()

    cy.get('#root_services_7').check()
    cy.get('#root_services_9').check()
  })
  it('clicks the next button, "type"', function() {
    cy.get('button')
      .contains('Next')
      .click()
  })
  it('Select parts and add further work, "type"', function() {
    cy.get('#root_parts_9').check() // checks the rear brake cable option.
    cy.get('#root_parts_5').check() // checks the V brake pad option.
    cy.get('#root_parts_13').check()

    cy.get('#root_comments')
      .clear()
      .click()
      .type('Had to wait for more parts to come in.')

    cy.get('#root_additionalFee')
      .clear()
      .type('50')

    cy.get('#root_discount')
      .clear()
      .type('10')

    cy.get('#root_discountReason').type('late with delivery')
  })

  it('Click buttton to go to next page, "type"', function() {
    cy.get('button')
      .contains('Next')
      .click()
  })

  it('Click buttton to go to next page, "type"', function() {
    cy.get('button')
      .contains('Next')
      .click()
  })

  it('Enters customer data in the form, "type"', function() {
    cy.get('#root_pickUpDate').type('2019-11-12')

    cy.get('ui input')
      .contains('Name')
      .type('Patrick Carmel')
  })
})
