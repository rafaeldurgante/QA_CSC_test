describe('Computers Test', () => {
  it('Locate Commodore 64', () => {
    cy.visit('https://computer-database.gatling.io/computers');

    cy.get('#searchbox').type('Commodore 64');

    cy.get('#searchsubmit').click();

    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click();

    cy.get('#name').should('have.value', 'Commodore 64');

    cy.get('#discontinued').clear();

    cy.get('#discontinued').type('1981-08-01');

    cy.get('.primary').click();

    cy.screenshot('');

    cy.get('#discontinued').clear();

    cy.get('#discontinued').type('1994-08-01')

    
    cy.get('.primary').click();

    cy.get('.alert-message').should('be.visible')
    
    })

    it ('HP', () => {

      cy.get('#searchbox').type('HP');

      cy.get('#searchsubmit').click();

      cy.screenshot('')


    })

    it ('IBM', () => {

      cy.get('#searchbox').clear();

      cy.get('#searchbox').type('IBM');

      cy.get('#searchsubmit').click();

      cy.get('.next > a').click();

      cy.get('.next > a').click();

      cy.screenshot('')
   
    })

    it ('Add Computer', () => {

      cy.get('#add').click();

      cy.get('#name').type('TestPc');

      cy.get('#introduced').type('2022-09-05');

      cy.get('#discontinued').type('2022-09-06')

      cy.get('#company').select('Evans & Sutherland');

      cy.get('.primary').click();

      cy.get('.alert-message').should('be.visible');
    
    })

    
    

})