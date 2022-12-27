import InstructorDashboardPage from "../../support/pageObjects/InstructorDashboardPage";
const inDsPage = new InstructorDashboardPage();
describe("Instructor login test case", function () {
  beforeEach(function () {
    //runs before every test block
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  it("A1.Login as instructor", function () {
    cy.visit(Cypress.env("rubriksUrl") + "logout");
    cy.wait(10000);
    inDsPage.getEmail().type(this.data.instructorEmail);
    inDsPage.getPass().type(this.data.instructorPass);
    inDsPage.getSubBtn().click();
    cy.wait(3000);
  });
  // it("B1.Instructor - Dashboard Page without test list", function () {
  //   //cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.getDashboardLink().should("be.visible");
  //   inDsPage.getQPLink().should("be.visible");
  //   inDsPage.getTestLink().should("be.visible");
  //   inDsPage.getTableContent().should("be.visible");
  //   inDsPage.getTableRow().should("have.length", 1);
  // });

  it("B2.Instructor - Dashboard Page with test list", function () {
    cy.visit(Cypress.env("rubriksUrl") + "dashboard");
    inDsPage.getDashboardLink().should("be.visible");
    inDsPage.getQPLink().should("be.visible");
    inDsPage.getTestLink().should("be.visible");
    inDsPage.getTableContent().should("be.visible");
    inDsPage.getTableRow().should("have.length.above", 1);
    inDsPage.quesMouseOver().trigger("mouseover");
    cy.contains("Create Question Paper").should("be.visible");
    cy.contains("Manage Question Paper").should("be.visible");
    inDsPage.testMouseOver().trigger("mouseover");
    cy.contains("Manage Tests").should("be.visible");
  });
});
