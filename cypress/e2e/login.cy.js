/// <reference types="cypress" />


describe('Login Validation', () => {
    it('Navigating to the webpage', () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "http://automationpractice.com/index.php");
    });
});