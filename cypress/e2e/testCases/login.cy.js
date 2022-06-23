/// <reference types="cypress" />

import HomePageActions from "../../pages/HomePage"
import BasicAssertion from "../../pages/BasicAssertions"
import homePageLocators from "../../locators/HomePageLocators"


describe('Login Validation', () => {
    it('Navigating to the webpage', () => {
        HomePageActions.HomePageVisiting(Cypress.env("HomePageUrl"))
        BasicAssertion.AssertUrl(Cypress.env("HomePageUrl"));
        BasicAssertion.ResponseCodeAssertion(Cypress.env("HomePageUrl"), 200);
        BasicAssertion.ShouldNotResponseAssertion(Cypress.env("HomePageUrl"), 404);
        BasicAssertion.elementVisible(homePageLocators.HomePageLogo);
        HomePageActions.signInButton(homePageLocators.SignInButton, "login")

    });
});