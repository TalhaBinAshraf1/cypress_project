/// <reference types="cypress" />

export default class ActionPage{

    static clickOnElement(element){
        cy.get(element)
        .click()
    }






}