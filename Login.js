import LoginPage from "../../support/pageObjects/LoginPage";
const loginPage = new LoginPage();

describe("Rubriks Login Test Suite", function () {
  before(function () {
    //runs once before all tests
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });
  it("Login with valid data - test case", function () {
    //cy.visit(Cypress.env("rubriksUrl") + "logout");
    cy.visit(Cypress.env("rubriksUrl"));
    loginPage.getMail().type("authpbis4@pbistnagar.com");
    loginPage.getPass().type("authpbis4@pbistnagar.com");
    loginPage.getMail().should("have.value", this.data.authorEmail);
    loginPage.getPass().should("have.value", this.data.authorPass);
    loginPage.getSubBtn().click();
    cy.wait(5000);
    loginPage.getUserIcon().click();
    cy.contains("Logout").click({ force: true });
    cy.wait(5000);
    cy.visit(Cypress.env("rubriksUrl") + "logout");
    cy.wait(10000);
  });

  it("Login with empty data - test case", function () {
    cy.get("input[name='email']").should("be.visible");
    loginPage.getSubBtn().click();
    cy.get("span:nth-child(2)").then((el) => {
      const mailSpanText = el.text();
      expect(mailSpanText.includes("Email is required")).to.be.true;
    });
    cy.get("span:nth-child(4)").then((el) => {
      const passSpanText = el.text();
      expect(passSpanText.includes("Password is required")).to.be.true;
    });
  });
});
