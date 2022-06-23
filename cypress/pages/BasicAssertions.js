/// <reference types="cypress" />

export default class BasicAssertions{


    static AssertUrl(UrlAssert){
        cy.url().should('equal', UrlAssert)
    }

    static ResponseCodeAssertion(Url,responseCode){
        cy.request(Url).should((Response) => {
            expect(Response.status).to.eq(responseCode)
        })
    }

    static ShouldNotResponseAssertion(Url,NotResponseCode){
        cy.request(Url).should((Response) => {
            expect(Response.status).to.not.eq(NotResponseCode)
        })
    }

    static elementVisible(element){
        cy.get(element).should('be.visible')
    }





}