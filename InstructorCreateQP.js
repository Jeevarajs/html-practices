import InstructorCreateQPPage from "../../support/pageObjects/InstructorCreateQPPage";
import InstructorDashboardPage from "../../support/pageObjects/InstructorDashboardPage";
const insCreateQPPage = new InstructorCreateQPPage();
const inDsPage = new InstructorDashboardPage();

describe("Instructor - Create Question Paper", function () {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  // it("A1.Create Question Paper - Single Subject", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   cy.url().should("include", "questionpaper");
  //   insCreateQPPage.getqpName().type(this.data.qpName);
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select("No");
  //   insCreateQPPage.getqpSub().select(this.data.qpSub);
  //   insCreateQPPage.getqpTotalScore().type(this.data.qpTotalScore);
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   insCreateQPPage.getqpClass().then(($el) => {
  //     expect($el).to.have.prop("disabled", false);
  //   });
  //   cy.get("button[type='submit']").click();
  //   insCreateQPPage.getqpClass().then(($el) => {
  //     expect($el).to.have.prop("disabled", true);
  //   });
  //   cy.pause();
  //   cy.get("input#questions-auto").should("not.be.checked");
  //   cy.contains("Add Questions Automatically").should("be.visible");
  //   insCreateQPPage.getTablinks().should("have.length", 3);
  //   insCreateQPPage.getSearchQues().type(this.data.searchQues);
  //   cy.wait(1000);
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(1000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   cy.wait(2000);
  //   insCreateQPPage.getQuesBox().should("have.length", this.data.qpTotalQues);
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.get("div[role='alert']").should("be.visible");
  //   cy.contains("Questions are added in the question paper").should(
  //     "be.visible"
  //   );
  //   cy.contains("Update").should("be.visible");
  //   cy.contains("Preview").should("be.visible");
  //   cy.contains("Publish").should("be.visible");
  //   cy.wait(6000);
  //   cy.contains("Publish").click();
  //   cy.get("div.modal").should("be.visible");
  //   cy.contains("Submit").click();
  //   cy.get("div[role='alert']").should("be.visible");
  //   cy.contains("Your Question paper has been published");
  // });

  // it("B1.Create Question Paper - Multi Subject", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   cy.url().should("include", "questionpaper");
  //   insCreateQPPage.getqpName().type(this.data.qpName);
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select("Yes");
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   insCreateQPPage.getSecSub().select("Physics");
  //   insCreateQPPage.getSecNoOfQues().type("5");
  //   insCreateQPPage.getSecMark().type("5");
  //   insCreateQPPage.getSecDiv().should("have.length", 1);
  //   insCreateQPPage.getAddSecBtn().should("be.visible").click();
  //   insCreateQPPage.getSearchQues().type(this.data.searchQues);
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(2000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   insCreateQPPage.getSecNoOfQues().then(($el) => {
  //     let phyQueNum = $el.val();
  //     insCreateQPPage.getQuesBox().should("have.length", phyQueNum);
  //   });
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.get("div[role='alert']").should("be.visible");
  //   cy.contains("Questions are added in the question paper").should(
  //     "be.visible"
  //   );
  //   cy.wait(6000);
  //   cy.contains("Update").should("be.visible");
  //   cy.contains("Preview").should("be.visible");
  //   cy.contains("Publish").should("be.visible");
  //   insCreateQPPage.getSecSub().select("Mathematics");
  //   insCreateQPPage.getSecNoOfQues().clear().should("have.value", "");
  //   insCreateQPPage.getSecMark().clear().should("have.value", "");
  //   insCreateQPPage.getSecNoOfQues().type("5");
  //   insCreateQPPage.getSecMark().type("5");
  //   cy.contains("Update Section").click();
  //   insCreateQPPage.getSecDiv().should("have.length.above", 1);
  //   insCreateQPPage.getSearchQues().clear().type("a");
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(2000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   insCreateQPPage.getSecNoOfQues().then(($el) => {
  //     let mathQueNum = $el.val();
  //     insCreateQPPage.getQuesBox().should("have.length", mathQueNum);
  //   });
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.wait(6000);
  //   cy.contains("Publish").click();
  //   cy.get("div.modal").should("be.visible");
  //   cy.contains("Submit").click();
  //   cy.get("div[role='alert']").should("be.visible");
  //   cy.contains("Your Question paper has been published");
  // });

  // it("C1.Create Question Paper - Empty inputs", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   cy.get("button[type='submit']").click();
  //   cy.wait(2000);
  //   cy.get("button[type='submit']").click();
  //   cy.wait(2000);
  //   insCreateQPPage.getqpNameSpan().then((el) => {
  //     const nameSpanText = el.text();
  //     expect(nameSpanText.toLowerCase().includes("name is required")).to.be
  //       .true;
  //   });
  //   insCreateQPPage.getqpClassSpan().then((el) => {
  //     const classSpanText = el.text();
  //     expect(classSpanText.toLowerCase().includes("class is required")).to.be
  //       .true;
  //   });
  //   insCreateQPPage.getqpMultiSubSpan().then((el) => {
  //     const multiSubSpanText = el.text();
  //     expect(multiSubSpanText.toLowerCase().includes("select a option")).to.be
  //       .true;
  //   });
  //   insCreateQPPage.getqpSubSpan().then((el) => {
  //     const subSpanText = el.text();
  //     expect(subSpanText.toLowerCase().includes("subject is required")).to.be
  //       .true;
  //   });
  //   insCreateQPPage.getqpTotalScoreSpan().then((el) => {
  //     const totalScoreSpanText = el.text();
  //     expect(totalScoreSpanText.toLowerCase().includes("score is required")).to
  //       .be.true;
  //   });
  //   insCreateQPPage.getqpTagNameSpan().then((el) => {
  //     const tagNameSpanText = el.text();
  //     expect(tagNameSpanText.toLowerCase().includes("tag name is required")).to
  //       .be.true;
  //   });
  //   insCreateQPPage.getqpTotalQuesSpan().then((el) => {
  //     const totalQuesSpanText = el.text();
  //     expect(
  //       totalQuesSpanText.toLowerCase().includes("total questions is required")
  //     ).to.be.true;
  //   });
  // });

  // it("D1.Create Question Paper - Single Subject - Preview", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   insCreateQPPage.getqpName().type(this.data.qpName);
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select("No");
  //   insCreateQPPage.getqpSub().select(this.data.qpSub);
  //   insCreateQPPage.getqpTotalScore().type(this.data.qpTotalScore);
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   cy.get("button[type='submit']").click();
  //   cy.get("input#questions-auto").should("not.be.checked");
  //   insCreateQPPage.getSearchQues().type(this.data.searchQues);
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(2000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.wait(4000);
  //   cy.contains("Preview").should("be.visible").click();
  //   cy.url().should("include", "questionpaper/preview");
  //   cy.wait(2000);
  //   cy.contains("Edit").should("be.visible").click();
  //   cy.url().should("include", "create/questionpaper");
  //   cy.wait(2000);
  //   cy.contains("Preview").should("be.visible").click();
  //   cy.url().should("include", "questionpaper/preview");
  //   insCreateQPPage.getQPNamePreview().then(($el) => {
  //     expect($el.text()).to.equal("Internal 12F");
  //   });
  //   insCreateQPPage.getClassPreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpClass);
  //   });
  //   insCreateQPPage.getMulSubPreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpMultiSub);
  //   });
  //   insCreateQPPage.getTotalScorePreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpTotalScore);
  //   });
  //   insCreateQPPage.getTagNamePreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpTagName);
  //   });
  //   insCreateQPPage.getTotalQuesPreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpTotalQues);
  //   });
  //   insCreateQPPage.getQuesTypePreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpType);
  //   });
  //   insCreateQPPage.getSubBtnPreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpSub);
  //   });
  //   insCreateQPPage
  //     .getQuesRowPreview()
  //     .should("have.length", this.data.qpTotalQues);
  //   cy.contains("Edit").should("be.visible");
  //   cy.contains("Publish").should("be.visible");
  // });

  // it("D2.Create Question Paper - Multi Subject - Preview", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   cy.url().should("include", "questionpaper");
  //   insCreateQPPage.getqpName().type(this.data.qpName);
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select("Yes");
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   insCreateQPPage.getSecSub().select(this.data.mulSubArray[0]);
  //   insCreateQPPage.getSecNoOfQues().type(this.data.mulSub1Ques);
  //   insCreateQPPage.getSecMark().type(this.data.mulSub1Mark);
  //   insCreateQPPage.getAddSecBtn().click();
  //   insCreateQPPage.getSearchQues().type(this.data.searchQues);
  //   cy.wait(2000);
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(1000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.wait(6000);
  //   insCreateQPPage.getSecSub().select(this.data.mulSubArray[1]);
  //   insCreateQPPage.getSecNoOfQues().clear().type(this.data.mulSub2Ques);
  //   insCreateQPPage.getSecMark().clear().type(this.data.mulSub2Mark);
  //   cy.contains("Update Section").click();
  //   insCreateQPPage.getSearchQues().clear().type("a");
  //   cy.wait(2000);
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(1000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.wait(6000);
  //   cy.contains("Preview").should("be.visible").click();
  //   cy.url().should("include", "questionpaper/preview");
  //   insCreateQPPage.getClassPreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpClass);
  //   });
  //   insCreateQPPage.getMulSubPreview().then(($el) => {
  //     expect($el.text()).to.equal("Yes");
  //   });
  //   insCreateQPPage.getTotalScorePreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpTotalScore);
  //   });
  //   insCreateQPPage.getTagNamePreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpTagName);
  //   });
  //   insCreateQPPage.getTotalQuesPreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpTotalQues);
  //   });
  //   insCreateQPPage.getQuesTypePreview().then(($el) => {
  //     expect($el.text()).to.equal(this.data.qpType);
  //   });
  //   insCreateQPPage.getSubBtnPreview().each(($el, index, $list) => {
  //     expect($el.text()).to.equal(this.data.mulSubArray[index]);
  //   });
  //   insCreateQPPage
  //     .getQuesRowPreview()
  //     .should("have.length", this.data.qpTotalQues);
  //   cy.contains("Edit").should("be.visible");
  //   cy.contains("Publish").should("be.visible");
  // });

  // it("D3.Create Question Paper - Without Randomise Question & Options Selection", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   insCreateQPPage.getqpName().type(this.data.qpName);
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select("No");
  //   insCreateQPPage.getqpSub().select(this.data.qpSub);
  //   insCreateQPPage.getqpTotalScore().type(this.data.qpTotalScore);
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   cy.get("button[type='submit']").click();
  //   cy.get("input#questions-auto").should("not.be.checked");
  //   insCreateQPPage.getSearchQues().type(this.data.searchQues);
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(2000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.wait(4000);
  //   cy.contains("Preview").should("be.visible").click();

  //   insCreateQPPage.getRandomQuePreview().then(($el) => {
  //     expect($el.text()).to.equal("No");
  //   });
  //   insCreateQPPage.getRandomOptionsPreview().then(($el) => {
  //     expect($el.text()).to.equal("No");
  //   });
  // });

  // it("D4.Create Question Paper - Randomise Question & Options Selection", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   insCreateQPPage.getqpName().type(this.data.qpName);
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select("No");
  //   insCreateQPPage.getqpSub().select(this.data.qpSub);
  //   insCreateQPPage.getqpTotalScore().type(this.data.qpTotalScore);
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
  //   cy.get("input[name='randomised_question']").click();
  //   cy.get("input[name='randomise_options']").click();
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   cy.get("button[type='submit']").click();
  //   cy.get("input#questions-auto").should("not.be.checked");
  //   insCreateQPPage.getSearchQues().type(this.data.searchQues);
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(2000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.wait(4000);
  //   cy.contains("Preview").should("be.visible").click();

  //   insCreateQPPage.getRandomQuePreview().then(($el) => {
  //     expect($el.text()).to.equal("Yes");
  //   });
  //   insCreateQPPage.getRandomOptionsPreview().then(($el) => {
  //     expect($el.text()).to.equal("Yes");
  //   });
  // });

  it("D4.Create Question Paper - Add Questions automatically", function () {
    cy.visit(Cypress.env("rubriksUrl") + "dashboard");
    inDsPage.quesMouseOver().trigger("mouseover");
    cy.contains("Create Question Paper").click();
    insCreateQPPage.getqpName().type(this.data.qpName);
    insCreateQPPage.getqpClass().select(this.data.qpClass);
    insCreateQPPage.getqpMultiSub().select("No");
    insCreateQPPage.getqpSub().select(this.data.qpSub);
    insCreateQPPage.getqpTotalScore().type(this.data.qpTotalScore);
    insCreateQPPage.getqpTagName().type(this.data.qpTagName);
    insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
    cy.get("input[name='randomised_question']").click();
    cy.get("input[name='randomise_options']").click();
    insCreateQPPage.getqpType().select(this.data.qpType);
    cy.get("button[type='submit']").click();
    cy.get("input#questions-auto").click();
    cy.get(".difficult-section input[name='auto_qs']").click();
    cy.get("select[name='state']").select("Easy");
    cy.get("input[name='value']").type("100");
    cy.get(".difficult-section .btn").click();
    cy.contains("Generate").click();
    cy.get("div[role='alert']").should("be.visible");
    cy.contains("Questions are added in the question paper").should(
      "be.visible"
    );
    cy.wait(10000);
    cy.contains("Preview").should("be.visible").click();
  });

  // it("E1.Delete subject section - Multi subject", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   cy.url().should("include", "questionpaper");
  //   insCreateQPPage.getqpName().type(this.data.qpName);
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select("Yes");
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   insCreateQPPage.getSecSub().select(this.data.mulSubArray[0]);
  //   insCreateQPPage.getSecNoOfQues().type(this.data.mulSub1Ques);
  //   insCreateQPPage.getSecMark().type(this.data.mulSub1Mark);
  //   insCreateQPPage.getAddSecBtn().click();
  //   insCreateQPPage.getSecSub().select(this.data.mulSubArray[1]);
  //   insCreateQPPage.getSecNoOfQues().clear().type(this.data.mulSub2Ques);
  //   insCreateQPPage.getSecMark().clear().type(this.data.mulSub2Mark);
  //   cy.contains("Update Section").click();
  //   insCreateQPPage.getSecSub().select(this.data.mulSubArray[2]);
  //   insCreateQPPage.getSecNoOfQues().clear().type(this.data.mulSub3Ques);
  //   insCreateQPPage.getSecMark().clear().type(this.data.mulSub3Mark);
  //   cy.contains("Update Section").click();

  //   insCreateQPPage.getSubjectData().should("have.length", 3);
  //   insCreateQPPage.getSubjectData().each(($el, index) => {
  //     let subjectText = $el.text();
  //     if (subjectText.includes("Mathematics")) {
  //       expect(subjectText.includes("Mathematics")).to.be.true;
  //     }
  //   });
  //   insCreateQPPage.getSubjectData().each(($el, index) => {
  //     let subText = $el.text();
  //     if (subText.includes("Mathematics")) {
  //       cy.get(".bg-trash_black").eq(index).click();
  //     }
  //   });
  //   insCreateQPPage.getSubjectData().should("have.length", 2);
  //   insCreateQPPage.getSubjectData().each(($el, index) => {
  //     let sText = $el.text();
  //     expect(sText.includes("Mathematics")).to.be.false;
  //   });
  //   insCreateQPPage.getSubjectData().each(($el, index) => {
  //     let subText = $el.text();
  //     if (subText.includes("Chemistry")) {
  //       cy.get(".bg-trash_black").eq(index).click();
  //     }
  //   });
  //   insCreateQPPage.getSubjectData().each(($el, index) => {
  //     let subText = $el.text();
  //     if (subText.includes("Physics")) {
  //       cy.get(".bg-trash_black").eq(index).click();
  //     }
  //   });
  //   cy.get(".test-details tbody tr").should("have.length.below", 1);
  // });

  // it("F1.Delete added question - Single Subject", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   cy.url().should("include", "questionpaper");
  //   insCreateQPPage.getqpName().type(this.data.qpName);
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select("No");
  //   insCreateQPPage.getqpSub().select(this.data.qpSub);
  //   insCreateQPPage.getqpTotalScore().type(this.data.qpTotalScore);
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(5);
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   cy.get("button[type='submit']").click();
  //   insCreateQPPage.getSearchQues().type(this.data.searchQues);
  //   cy.wait(1000);
  //   insCreateQPPage.getSearchQuesBtn().click();
  //   cy.wait(1000);
  //   insCreateQPPage.getSelectAllBox().click();
  //   cy.wait(2000);
  //   insCreateQPPage.getAddQuesBtn().click();
  //   cy.contains("Added Question").click();
  //   cy.wait(6000);
  //   cy.get("#Added .preview ol > div").should("have.length", "5");
  //   cy.get("#Added .preview ol .line-clamp p").each(($el, index) => {
  //     let question = $el.text();
  //     if (question.includes(this.data.keyQuesWord)) {
  //       cy.get("#Added .preview ol .bg-trash_black").eq(index).click();
  //     }
  //   });
  //   cy.contains("Question had been deleted successfully").should("be.visible");
  //   cy.get("#Added .preview ol > div").should("have.length", "4");
  // });

  // it("G1.Create Question Paper - Create new question - Single Subject", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   inDsPage.quesMouseOver().trigger("mouseover");
  //   cy.contains("Create Question Paper").click();
  //   cy.url().should("include", "questionpaper");
  //   function qpNameGen() {
  //     let text = "BIO-";
  //     let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  //     for (let i = 0; i < 5; i++)
  //       text += possible.charAt(Math.floor(Math.random() * possible.length));
  //     return text;
  //   }
  //   insCreateQPPage.getqpName().type(qpNameGen());
  //   insCreateQPPage.getqpClass().select(this.data.qpClass);
  //   insCreateQPPage.getqpMultiSub().select(this.data.qpMultiSub);
  //   insCreateQPPage.getqpSub().select(this.data.qpSub);
  //   insCreateQPPage.getqpTotalScore().type(this.data.qpTotalScore);
  //   insCreateQPPage.getqpTagName().type(this.data.qpTagName);
  //   insCreateQPPage.getqpTotalQues().type(this.data.qpTotalQues);
  //   insCreateQPPage.getqpType().select(this.data.qpType);
  //   cy.get("button[type='submit']").click();
  //   insCreateQPPage.getCreateQuesBtn().click();
  //   cy.wait(1000);
  //   insCreateQPPage.getCQClass().then(($el) => {
  //     expect($el.val()).to.equal(this.data.qpClass);
  //   });
  //   insCreateQPPage.getCQSub().then(($el) => {
  //     expect($el.val()).to.equal(this.data.qpSub);
  //   });
  //   insCreateQPPage.getCQQuesType().select(this.data.qpQuesType);
  //   insCreateQPPage.getCQScore().type(this.data.qpScore);
  //   insCreateQPPage.getCQSource().type(this.data.qpSource);
  //   insCreateQPPage.getCQTopic().select(this.data.qpTopic);
  //   insCreateQPPage.getCQSubTopic().select(this.data.qpSubTopic);
  //   insCreateQPPage.getCQSemantics().select(this.data.qpSemantics);
  //   insCreateQPPage.getCQDiff().select(this.data.qpDiff);
  //   cy.wait(1000);
  //   insCreateQPPage.getCQTag().type(this.data.qpTag[0]).tab();
  //   cy.wait(1000);
  //   insCreateQPPage.getCQTag().type(this.data.qpTag[1]).tab();
  //   cy.wait(1000);
  //   cy.get(".button input[type='submit']").click();
  //   insCreateQPPage.getCQQuestion().type(this.data.question);
  //   insCreateQPPage.getCQOption().each(($el, index, $list) => {
  //     cy.get($el).type(this.data.options[index]);
  //     if (this.data.options[index] == this.data.answer) {
  //       insCreateQPPage.getCQRadio().eq(index).click();
  //     }
  //   });
  //   cy.wait(1000);
  //   cy.get("button[value='Save']").click();
  //   insCreateQPPage.getQuesSection().should("be.visible");
  //   insCreateQPPage.getAnsSection().should("be.visible");
  //   cy.contains("Publish and Add").click();
  //   cy.wait(7000);
  //   cy.contains("Added Question").click();
  //   insCreateQPPage.getQASection().should("be.visible");
  //   insCreateQPPage.getPubBtn().click();
  //   cy.get("div.modal").should("be.visible");
  //   cy.contains("Submit").click();
  //   cy.get("div[role='alert']").should("be.visible");
  //   cy.contains("Your Question paper has been published").should("be.visible");
  // });
});
