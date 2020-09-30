/// <reference types="cypress" />
import "../support/commands";

context("Test form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should provide complete elibility flow", () => {
    cy.getDomNode({ atrributeValue: "title", elementType: "select" }).select(
      "Mr"
    );
    cy.getDomNode({ atrributeValue: "firstName" }).type("FirstName");
    cy.getDomNode({ atrributeValue: "lastName" }).type("LastName");
    cy.getDomNode({ atrributeValue: "dateOfBirth" }).type("01/02/2000");
    cy.getDomNode({
      atrributeValue: "employmentStatus",
      elementType: "select",
    }).select("partTime");
    cy.getDomNode({ atrributeValue: "annualIncome" }).type("50000");
    cy.getDomNode({ atrributeValue: "address.houseNumber" }).type("House 12");

    cy.getDomNode({
      atrributeName: "type",
      atrributeValue: "submit",
      elementType: "button",
    }).click();

    // should redirect on submit
    cy.location("pathname", { timeout: 6000 }).should(
      "eq",
      "/check-eligibility"
    );

    cy.waitUntil(
      () =>
        Cypress.$(
          cy.getDomNode({
            atrributeName: "data-testid",
            atrributeValue: "e2e-eligibleCreditCard",
            elementType: "div",
          })
        ).length > 0
    );

    // on click of card, expected value is provided as total credit available
    const firstCreditCard = cy
      .getDomNode({
        atrributeName: "data-testid",
        atrributeValue: "e2e-eligibleCreditCard",
        elementType: "div",
      })
      .first();

    firstCreditCard.click();

    firstCreditCard
      .find("div[data-testid='e2e-creditCardAvailableAmount']")
      .invoke("text")
      .then((creditCardAvailableAmount) => {
        cy.getDomNode({
          atrributeName: "data-testid",
          atrributeValue: "e2e-creditAvailable",
          elementType: "p",
        })
          .invoke("text")
          .then((totalCreditAvailableAmount) => {
            expect(totalCreditAvailableAmount).to.include(
              creditCardAvailableAmount
            );
          });
      });

    // should redirect on checkEligibility click and allow resubmit
    cy.getDomNode({
      atrributeName: "data-testid",
      atrributeValue: "e2e-checkEligibility",
      elementType: "button",
    }).click();

    cy.getDomNode({ atrributeValue: "address.postCode" }).type("1WA 4NG");

    cy.getDomNode({
      atrributeName: "type",
      atrributeValue: "submit",
      elementType: "button",
    }).click();

    cy.waitUntil(
      () =>
        Cypress.$(
          cy.getDomNode({
            atrributeName: "data-testid",
            atrributeValue: "e2e-eligibleCreditCard",
            elementType: "div",
          })
        ).length > 0
    );

    // should reset credit available
    cy.getDomNode({
      atrributeName: "data-testid",
      atrributeValue: "e2e-creditAvailable",
      elementType: "p",
    })
      .invoke("text")
      .then((totalCreditAvailableAmount) => {
        expect(totalCreditAvailableAmount).to.equal("Credit Available £0.00");
      });
  });
});
