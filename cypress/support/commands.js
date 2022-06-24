import BasicAssertion from "../pages/BasicAssertions";
import actions from "../pages/ActionPage";
import HomePageActions from "../pages/HomePage";
import webUtils from "../pages/WebUtils"

Cypress.Commands.add("StatusCodeAssertion", (PageUrl, PositiveAssert, NegativeAssert) => {
    BasicAssertion.ResponseCodeAssertion(PageUrl, PositiveAssert);
    BasicAssertion.ShouldNotResponseAssertion(PageUrl, NegativeAssert);
  });
