/// <reference types="cypress" />
import HomePageActions from "../../pages/HomePage";
import BasicAssertion from "../../pages/BasicAssertions";
import homePageLocators from "../../locators/HomePageLocators";
import webUtils from "../../pages/WebUtils";
import actions from "../../pages/ActionPage";
import signInPage from "../../locators/SignInPage"

describe('HomePage Validation', () => {
    it('Navigating to the webpage', () => {
        HomePageActions.HomePageVisiting(Cypress.env("HomePageUrl"))
        BasicAssertion.AssertUrl(Cypress.env("HomePageUrl"));
        cy.StatusCodeAssertion(Cypress.env("HomePageUrl"), 200, 404)
        BasicAssertion.elementVisible(homePageLocators.HomePageLogo);
        HomePageActions.signInButton(homePageLocators.SignInButton, "login");
        actions.clickOnElement(homePageLocators.SignInButton);

    });
});