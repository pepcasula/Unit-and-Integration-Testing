describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  })

  it('should update display with result of operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6');
  })

  it('should be able to chain multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '99');
  })

  it('output should be positive number', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7');
  });
  
  it('output should be negative number', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3');
  });
  
  it('output should be decimal number', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.4');
  });
  
  it('output should be very large number', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '997002999');
  });

  it ('should do return 0 when dividing by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');

  })
    
});
