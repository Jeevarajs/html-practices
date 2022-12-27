import InstructorManageQPPage from "../../support/pageObjects/InstructorManageQPPage";
import InstructorDashboardPage from "../../support/pageObjects/InstructorDashboardPage";
const insManageQPPage = new InstructorManageQPPage();
const inDsPage = new InstructorDashboardPage();

describe("Instructor - Create Question Paper", function () {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });
  // it("A1.Manage Question Paper", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Manage Question Paper").click();
  //   cy.url().should("include", "manage/questionpaper");
  //   cy.contains("Manage Question Paper").should("be.visible");
  //   insManageQPPage.getqpClass().select(this.data.manageQPClass);
  //   insManageQPPage.getqpSub().select(this.data.manageQPSub);
  //   insManageQPPage.getqpTable().should("not.exist");
  //   cy.wait(1000);
  //   insManageQPPage.getViewBtn().click();
  //   cy.wait(1000);
  //   insManageQPPage.getTableRow().should("have.length.above", 0);
  //   cy.wait(2000);
  //   insManageQPPage.getClassCol().each(($el, index, $list) => {
  //     expect($el.text()).to.equal("12");
  //   });
  //   insManageQPPage.getSubCol().each(($el, index, $list) => {
  //     cy.get($el.text).should("include.text", "Physics");
  //   });
  //   insManageQPPage.getPublishBtns().each(($el, index, $list) => {
  //     insManageQPPage.getEditBtns().eq(index).should("be.visible");
  //   });
  // });

  // it("A2.Manage Question Paper - Edit question", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Manage Question Paper").click();
  //   insManageQPPage.getqpClass().select(this.data.manageQPClass);
  //   insManageQPPage.getqpSub().select(this.data.manageQPSub);
  //   cy.wait(1000);
  //   insManageQPPage.getViewBtn().click();
  //   cy.wait(2000);
  //   insManageQPPage.getEditBtns().then((index) => {
  //     index = 0;
  //     insManageQPPage.getEditBtns().eq(index).click();
  //   });
  //   cy.wait(2000);
  //   cy.url().should("includes", "create/questionpaper");
  //   insManageQPPage.getqpName().then(($el) => {
  //     expect($el).to.have.prop("disabled", false);
  //   });
  //   insManageQPPage.getqpClass().then(($el) => {
  //     expect($el).to.have.prop("disabled", true);
  //   });
  //   insManageQPPage.getMulSub().then(($el) => {
  //     expect($el).to.have.prop("disabled", true);
  //   });
  //   insManageQPPage.getqpSub().then(($el) => {
  //     expect($el).to.have.prop("disabled", true);
  //   });
  //   insManageQPPage.getTotalScore().then(($el) => {
  //     expect($el).to.have.prop("disabled", false);
  //   });
  //   insManageQPPage.getTagName().then(($el) => {
  //     expect($el).to.have.prop("disabled", false);
  //   });
  //   insManageQPPage.getTotalQuesNum().then(($el) => {
  //     expect($el).to.have.prop("disabled", false);
  //   });
  //   insManageQPPage.getQuesType().then(($el) => {
  //     expect($el).to.have.prop("disabled", false);
  //   });
  // });

  // it("A3.Manage Question Paper - Publish question paper", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Manage Question Paper").click();
  //   insManageQPPage.getqpClass().select(this.data.manageQPClass);
  //   insManageQPPage.getqpSub().select(this.data.manageQPSub);
  //   cy.wait(1000);
  //   insManageQPPage.getViewBtn().click();
  //   cy.wait(2000);
  //   insManageQPPage.getQPNCol().each(($el, index) => {
  //     if ($el.text().includes(this.data.quesPaperName)) {
  //       cy.get($el)
  //         .next()
  //         .next()
  //         .next()
  //         .next()
  //         .next()
  //         .then(($subEl) => {
  //           expect($subEl.text()).to.equal(this.data.publishBtnValue);
  //           cy.get($subEl).click();
  //         });
  //     }
  //   });
  //   insManageQPPage.getClickModal().should("be.visible");
  //   cy.contains("click here to review and publish")
  //     .should("be.visible")
  //     .click();
  //   cy.wait(3000);
  //   cy.contains("Publish").click();
  //   insManageQPPage.getPubModal().should("be.visible");
  //   cy.contains("Submit").click();
  //   cy.wait(2000);
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Manage Question Paper").click();
  //   insManageQPPage.getqpClass().select(this.data.manageQPClass);
  //   insManageQPPage.getqpSub().select(this.data.manageQPSub);
  //   cy.wait(1000);
  //   insManageQPPage.getViewBtn().click();
  //   cy.wait(2000);
  //   insManageQPPage.getQPNCol().each(($el, index) => {
  //     if ($el.text().includes(this.data.quesPaperName)) {
  //       cy.get($el)
  //         .next()
  //         .next()
  //         .next()
  //         .next()
  //         .next()
  //         .then(($subEl) => {
  //           expect($subEl.text()).to.equal(this.data.assignBtnValue);
  //         });
  //     }
  //   });
  // });

  // it("A4.Manage Question Paper - Assign question paper", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Manage Question Paper").click();
  //   insManageQPPage.getqpClass().select(this.data.manageQPClass);
  //   insManageQPPage.getqpSub().select(this.data.manageQPSub);
  //   cy.wait(1000);
  //   insManageQPPage.getViewBtn().click();
  //   cy.wait(2000);
  //   insManageQPPage.getAssignBtns().then((index) => {
  //     index = 0;
  //     insManageQPPage.getAssignBtns().eq(index).click();
  //   });
  //   cy.url().should("includes", "/test");
  //   insManageQPPage.getTestName().type(this.data.TestName);
  //   insManageQPPage.getASecCheck().click();
  //   insManageQPPage.getDSecCheck().click();
  //   insManageQPPage.getTestDesc().type(this.data.TestDesc);
  //   cy.contains("Assign").click();
  //   cy.contains("The test has been assigned").should("be.visible");
  //   cy.url().should("includes", "manage/tests");
  // });
});
