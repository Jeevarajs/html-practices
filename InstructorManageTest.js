import InstructorManageTestPage from "../../support/pageObjects/InstructorManageTestPage";
import InstructorDashboardPage from "../../support/pageObjects/InstructorDashboardPage";
const inDsPage = new InstructorDashboardPage();
const insManageTestPage = new InstructorManageTestPage();

describe("Instructor - Manage Tests", function () {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });
  // it("A1.Manage Tests", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.testMouseOver().trigger("mouseover");
  //   cy.contains("Manage Tests").click();
  //   cy.contains("Assigned tests").should("be.visible");
  //   insManageTestPage.getAllTestCheck().then(($el) => {
  //     expect($el).to.be.checked;
  //   });
  //   insManageTestPage.getTableHeadRow().should("have.length", 1);
  // });
  // it("A2.Manage Tests - Sheduled filter - No tests", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.testMouseOver().trigger("mouseover");
  //   cy.contains("Manage Tests").click();
  //   cy.contains("Assigned tests").should("be.visible");
  //   insManageTestPage.getSchTestCheck().click();
  //   insManageTestPage.getTableHeadRow().should("have.length", 1);
  //   insManageTestPage.getTabBodyRow().should("not.exist");
  //   insManageTestPage.getNoRowPara().should("include.text", "no Test");
  // });

  // it("A3.Manage Tests - Open filter", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.testMouseOver().trigger("mouseover");
  //   cy.contains("Manage Tests").click();
  //   cy.contains("Assigned tests").should("be.visible");
  //   insManageTestPage.getOpenTestCheck().click();
  //   insManageTestPage.getTableHeadRow().should("have.length", 1);
  //   insManageTestPage.getTabBodyRow().should("have.length.above", 0);
  //   insManageTestPage.getManageEDBtns().each(($el, index) => {
  //     expect($el.text()).to.equal("Manage End Date");
  //   });
  // });

  // it("A4.Manage Tests - Closed filter", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.testMouseOver().trigger("mouseover");
  //   cy.contains("Manage Tests").click();
  //   cy.contains("Assigned tests").should("be.visible");
  //   insManageTestPage.getClosedTestCheck().click();
  //   insManageTestPage.getTableHeadRow().should("have.length", 1);
  //   insManageTestPage.getTabBodyRow().should("have.length.above", 0);
  //   insManageTestPage.getManageEDBtns().each(($el, index) => {
  //     expect($el.text()).to.equal("Closed");
  //   });
  // });
});
