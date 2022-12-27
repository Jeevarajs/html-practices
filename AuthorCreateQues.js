import AuthorCreateQuesPage from "../../support/pageObjects/AuthorCreateQuesPage";
const authorCreateQuesPage = new AuthorCreateQuesPage();
describe("Rubriks - Author - Create Question Test Suite", function () {
  beforeEach(function () {
    //runs before every test block
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  // it("A1.onClicking create question tab it redirects to createQuestion page", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.url().should("include", "/createquestion");
  //   cy.wait(2000);
  // });
  // it("A2.Fill the questions details which are considered as attribute to questions created", function () {
  //   authorCreateQuesPage.getClass().select("12");
  //   authorCreateQuesPage.getClass().should("have.value", this.data.class);
  //   authorCreateQuesPage.getSubject().select("Mathematics");
  //   authorCreateQuesPage.getSubject().should("have.value", this.data.subject);
  //   authorCreateQuesPage.getQuesType().select("mcq");
  //   authorCreateQuesPage.getQuesType().should("have.value", this.data.quesType);
  //   authorCreateQuesPage.getScore().type("2");
  //   authorCreateQuesPage.getScore().should("have.value", this.data.score);
  //   authorCreateQuesPage.getSource().type("test_source");
  //   authorCreateQuesPage.getSource().should("have.value", this.data.source);
  //   authorCreateQuesPage.getTopics().select("Matrix");
  //   authorCreateQuesPage.getTopics().should("have.value", this.data.topics);
  //   authorCreateQuesPage.getSubTopics().select("Quadratic Equation");
  //   authorCreateQuesPage
  //     .getSubTopics()
  //     .should("have.value", this.data.subTopics);
  //   authorCreateQuesPage.getSemantics().select("Apply");
  //   authorCreateQuesPage
  //     .getSemantics()
  //     .should("have.value", this.data.semantics);
  //   authorCreateQuesPage.getDifficulty().select("Medium");
  //   authorCreateQuesPage
  //     .getDifficulty()
  //     .should("have.value", this.data.difficulty);
  //   authorCreateQuesPage.getTags().type("tag1").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getTags().type("tag2").tab();
  //   cy.wait(2000);
  // });
  // it("A3.click create button", function () {
  //   authorCreateQuesPage.getCreateBtn().click();
  // });
  // it("A4.open question and option and create", function () {
  //   authorCreateQuesPage.getQuestionDiv().should("be.visible");
  //   authorCreateQuesPage.getQuestion().type(this.data.question);
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     cy.get($el).type(this.data.options[index]);
  //     if (this.data.options[index] == this.data.answer) {
  //       authorCreateQuesPage.getOptionRadio().eq(index).click();
  //     }
  //   });
  // });
  // it("A5. click save button", function () {
  //   cy.get("button[value='Save']").click();
  //   cy.wait(2000);
  // });
  // it("A6. question saved", function () {
  //   authorCreateQuesPage.getAnswerSection().should("be.visible");
  // });
  // it("B1.onClicking create question tab it redirects to createQuestion page", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.url().should("include", "/createquestion");
  //   cy.wait(2000);
  // });
  // it("B2.click create button without datas(empty data)", function () {
  //   authorCreateQuesPage.getCreateBtn().click();
  //   authorCreateQuesPage.getAnswerSection().should("not.exist");

  //   authorCreateQuesPage.getClassSpan().then((el) => {
  //     const classSpanText = el.text();
  //     expect(classSpanText.toLowerCase().includes("enter the class")).to.be
  //       .true;
  //   });
  //   authorCreateQuesPage.getSubjectSpan().then((el) => {
  //     const subjectSpanText = el.text();
  //     expect(subjectSpanText.toLowerCase().includes("enter the subject")).to.be
  //       .true;
  //   });
  //   authorCreateQuesPage.getQuesTypeSpan().then((el) => {
  //     const typeSpanText = el.text();
  //     expect(typeSpanText.toLowerCase().includes("enter the type")).to.be.true;
  //   });
  //   authorCreateQuesPage.getScoreSpan().then((el) => {
  //     const scoreSpanText = el.text();
  //     expect(scoreSpanText.toLowerCase().includes("enter the score")).to.be
  //       .true;
  //   });
  //   authorCreateQuesPage.getSourceSpan().then((el) => {
  //     const sourceSpanText = el.text();
  //     expect(sourceSpanText.toLowerCase().includes("enter the source")).to.be
  //       .true;
  //   });
  //   authorCreateQuesPage.getTopicsSpan().then((el) => {
  //     const topicSpanText = el.text();
  //     expect(topicSpanText.toLowerCase().includes("enter the topic")).to.be
  //       .true;
  //   });
  //   authorCreateQuesPage.getSubTopicsSpan().then((el) => {
  //     const subTopicSpanText = el.text();
  //     expect(subTopicSpanText.toLowerCase().includes("enter the subtopic")).to
  //       .be.true;
  //   });
  //   authorCreateQuesPage.getSemanticsSpan().then((el) => {
  //     const semanticsSpanText = el.text();
  //     expect(semanticsSpanText.toLowerCase().includes("enter the semantics")).to
  //       .be.true;
  //   });
  //   authorCreateQuesPage.getDifficultySpan().then((el) => {
  //     const difficultySpanText = el.text();
  //     expect(difficultySpanText.toLowerCase().includes("enter the difficulty"))
  //       .to.be.true;
  //   });
  //   authorCreateQuesPage.getTagsSpan().then((el) => {
  //     const tagsSpanText = el.text();
  //     expect(tagsSpanText.toLowerCase().includes("enter the tags")).to.be.true;
  //   });
  // });

  // it("C1.save question without tags data", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.url().should("include", "/createquestion");
  //   cy.wait(2000);
  //   authorCreateQuesPage.getClass().select("12");
  //   authorCreateQuesPage.getClass().should("have.value", this.data.class);
  //   authorCreateQuesPage.getSubject().select("Mathematics");
  //   authorCreateQuesPage.getSubject().should("have.value", this.data.subject);
  //   authorCreateQuesPage.getQuesType().select("mcq");
  //   authorCreateQuesPage.getQuesType().should("have.value", this.data.quesType);
  //   authorCreateQuesPage.getScore().type("2");
  //   authorCreateQuesPage.getScore().should("have.value", this.data.score);
  //   authorCreateQuesPage.getSource().type("test_source");
  //   authorCreateQuesPage.getSource().should("have.value", this.data.source);
  //   authorCreateQuesPage.getTopics().select("Matrix");
  //   authorCreateQuesPage.getTopics().should("have.value", this.data.topics);
  //   authorCreateQuesPage.getSubTopics().select("Quadratic Equation");
  //   authorCreateQuesPage
  //     .getSubTopics()
  //     .should("have.value", this.data.subTopics);
  //   authorCreateQuesPage.getSemantics().select("Apply");
  //   authorCreateQuesPage
  //     .getSemantics()
  //     .should("have.value", this.data.semantics);
  //   authorCreateQuesPage.getDifficulty().select("Medium");
  //   authorCreateQuesPage
  //     .getDifficulty()
  //     .should("have.value", this.data.difficulty);
  //   authorCreateQuesPage.getTags().type("tag1");
  //   cy.wait(2000);
  //   authorCreateQuesPage.getCreateBtn().click();
  //   authorCreateQuesPage.getQuestionDiv().should("be.visible");
  //   authorCreateQuesPage.getQuestion().type(this.data.question);
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     cy.get($el).type(this.data.options[index]);
  //     if (this.data.options[index] == this.data.answer) {
  //       authorCreateQuesPage.getOptionRadio().eq(index).click();
  //     }
  //   });
  //   cy.get("button[value='Save']").click();
  //   cy.get("#tags li").should("have.length", 0);
  //   cy.get("div.Toastify__toast-body").should("be.visible");
  // });

  // it("D1.save question without enter question and options", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.url().should("include", "/createquestion");
  //   cy.wait(2000);
  //   authorCreateQuesPage.getClass().select("12");
  //   authorCreateQuesPage.getClass().should("have.value", this.data.class);
  //   authorCreateQuesPage.getSubject().select("Mathematics");
  //   authorCreateQuesPage.getSubject().should("have.value", this.data.subject);
  //   authorCreateQuesPage.getQuesType().select("mcq");
  //   authorCreateQuesPage.getQuesType().should("have.value", this.data.quesType);
  //   authorCreateQuesPage.getScore().type("2");
  //   authorCreateQuesPage.getScore().should("have.value", this.data.score);
  //   authorCreateQuesPage.getSource().type("test_source");
  //   authorCreateQuesPage.getSource().should("have.value", this.data.source);
  //   authorCreateQuesPage.getTopics().select("Matrix");
  //   authorCreateQuesPage.getTopics().should("have.value", this.data.topics);
  //   authorCreateQuesPage.getSubTopics().select("Quadratic Equation");
  //   authorCreateQuesPage
  //     .getSubTopics()
  //     .should("have.value", this.data.subTopics);
  //   authorCreateQuesPage.getSemantics().select("Apply");
  //   authorCreateQuesPage
  //     .getSemantics()
  //     .should("have.value", this.data.semantics);
  //   authorCreateQuesPage.getDifficulty().select("Medium");
  //   authorCreateQuesPage
  //     .getDifficulty()
  //     .should("have.value", this.data.difficulty);
  //   authorCreateQuesPage.getTags().type("tag1").tab();
  //   authorCreateQuesPage.getTags().type("tag2").tab();
  //   cy.wait(2000);
  //   authorCreateQuesPage.getCreateBtn().click();
  //   cy.wait(2000);
  //   //authorCreateQuesPage.getQuestion().type(this.data.question);
  //   cy.get(":nth-child(5) > .fr-box > .fr-wrapper > .fr-element > p").type(512);
  //   // authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //   //   cy.get($el).type(this.data.options[index]);
  //   //   if (this.data.options[index] == this.data.answer) {
  //   //     authorCreateQuesPage.getOptionRadio().eq(index).click();
  //   //   }
  //   // });
  //   cy.get("button[value='Save']").click();
  //   authorCreateQuesPage.getQuestion().then((el) => {
  //     const questionText = el.text();
  //     if (questionText === "") {
  //       cy.get("span.text-red-400:nth-child(2)").should("be.visible");
  //     }
  //   });
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     const optionText = $el.text();
  //     if (optionText == "") {
  //       cy.get("span.text-red-400:nth-child(5)").should("be.visible");
  //     }
  //   });
  // });

  // it("E1.Create question based on question type selection(mcq)", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.wait(2000);
  //   authorCreateQuesPage.getClass().select("12");
  //   authorCreateQuesPage.getSubject().select("Mathematics");
  //   authorCreateQuesPage.getQuesType().select("mcq");
  //   authorCreateQuesPage.getScore().type("2");
  //   authorCreateQuesPage.getSource().type("test_source");
  //   authorCreateQuesPage.getTopics().select("Matrix");
  //   authorCreateQuesPage.getSubTopics().select("Quadratic Equation");
  //   authorCreateQuesPage.getSemantics().select("Apply");
  //   authorCreateQuesPage.getDifficulty().select("Medium");
  //   authorCreateQuesPage.getTags().type("tag1").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getTags().type("tag2").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getCreateBtn().click();
  //   authorCreateQuesPage.getQuestion().type(this.data.question);
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     cy.get($el).type(this.data.options[index]);
  //     if (this.data.options[index] == this.data.answer) {
  //       authorCreateQuesPage.getOptionRadio().eq(index).click();
  //     }
  //   });
  //   authorCreateQuesPage.getQuestionBox().should("be.visible");
  //   authorCreateQuesPage.getOptionsBox().should("have.length", 3);
  //   authorCreateQuesPage.getRadioBox().should("have.length", 3);
  //   cy.get("button[value='Save']").click();
  //   authorCreateQuesPage.getAnswerSection().should("be.visible");
  // });

  // it("E2.Create question based on question type selection(free text)", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.wait(2000);
  //   authorCreateQuesPage.getClass().select("12");
  //   authorCreateQuesPage.getSubject().select("Mathematics");
  //   authorCreateQuesPage.getQuesType().select("free text");
  //   authorCreateQuesPage.getScore().type("2");
  //   authorCreateQuesPage.getSource().type("test_source");
  //   authorCreateQuesPage.getTopics().select("Matrix");
  //   authorCreateQuesPage.getSubTopics().select("Quadratic Equation");
  //   authorCreateQuesPage.getSemantics().select("Apply");
  //   authorCreateQuesPage.getDifficulty().select("Medium");
  //   authorCreateQuesPage.getTags().type("tag1").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getTags().type("tag2").tab();
  //   cy.wait(2000);
  //   authorCreateQuesPage.getCreateBtn().click();
  //   authorCreateQuesPage.getQuestion().type(this.data.question);
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     cy.get($el).type(this.data.options[index]);
  //     if (this.data.options[index] == this.data.answer) {
  //       authorCreateQuesPage.getOptionRadio().eq(index).click();
  //     }
  //   });
  //   authorCreateQuesPage.getQuestionBox().should("be.visible");
  //   authorCreateQuesPage.getOptionsBox().should("have.length", 1);
  //   cy.get("button[value='Save']").click();
  //   authorCreateQuesPage.getAnswerSection().should("be.visible");
  // });

  // it("E3.Create question based on question type selection(multiselect)", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.wait(2000);
  //   authorCreateQuesPage.getClass().select("12");
  //   authorCreateQuesPage.getSubject().select("Mathematics");
  //   authorCreateQuesPage.getQuesType().select("multiselect");
  //   authorCreateQuesPage.getScore().type("2");
  //   authorCreateQuesPage.getSource().type("test_source");
  //   authorCreateQuesPage.getTopics().select("Matrix");
  //   authorCreateQuesPage.getSubTopics().select("Quadratic Equation");
  //   authorCreateQuesPage.getSemantics().select("Apply");
  //   authorCreateQuesPage.getDifficulty().select("Medium");
  //   authorCreateQuesPage.getTags().type("tag1").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getTags().type("tag2").tab();
  //   cy.wait(2000);
  //   authorCreateQuesPage.getCreateBtn().click();
  //   authorCreateQuesPage.getQuestion().type(this.data.question);
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     cy.get($el).type(this.data.options[index]);
  //     if (this.data.options[index] == this.data.answer) {
  //       authorCreateQuesPage.getOptionCheck().eq(index).click();
  //     }
  //   });
  //   authorCreateQuesPage.getQuestionBox().should("be.visible");
  //   authorCreateQuesPage.getOptionsBox().should("have.length", 3);
  //   authorCreateQuesPage.getCheckBox().should("have.length", 3);
  //   cy.get("button[value='Save']").click();
  //   authorCreateQuesPage.getAnswerSection().should("be.visible");
  // });

  it("F1.Random input selection", function () {
    cy.visit(Cypress.env("rubriksUrl") + "dashboard");
    authorCreateQuesPage.getCreateQues().click({ force: true });
    cy.wait(2000);
    authorCreateQuesPage.getClass().select("12");
    let subjectIndex = Math.floor(
      Math.random() * this.data.subjectArray.length
    );
    authorCreateQuesPage
      .getSubject()
      .select(this.data.subjectArray[subjectIndex]);
    authorCreateQuesPage.getQuesType().select("mcq");
    let scoreIndex = Math.floor(Math.random() * this.data.scoreArray.length);
    authorCreateQuesPage.getScore().type(this.data.scoreArray[scoreIndex]);
    let sourceIndex = Math.floor(Math.random() * this.data.sourceArray.length);
    authorCreateQuesPage.getSource().type(this.data.sourceArray[sourceIndex]);
    let topicsIndex = Math.floor(Math.random() * this.data.topicsArray.length);
    authorCreateQuesPage.getTopics().select(this.data.topicsArray[topicsIndex]);
    let subTopicsIndex = Math.floor(
      Math.random() * this.data.topicsArray.length
    );
    authorCreateQuesPage
      .getSubTopics()
      .select(this.data.subTopicsArray[subTopicsIndex]);
    let semanticsIndex = Math.floor(
      Math.random() * this.data.semanticsArray.length
    );
    authorCreateQuesPage
      .getSemantics()
      .select(this.data.semanticsArray[semanticsIndex]);
    let difficultyIndex = Math.floor(
      Math.random() * this.data.difficultyArray.length
    );
    authorCreateQuesPage
      .getDifficulty()
      .select(this.data.difficultyArray[difficultyIndex]);
    let tagsIndex = Math.floor(Math.random() * this.data.tagsArray.length);
    authorCreateQuesPage.getTags().type(this.data.tagsArray[tagsIndex]).tab();
    cy.wait(1000);
    authorCreateQuesPage.getCreateBtn().click();
    authorCreateQuesPage.getQuestion().type(this.data.question);
    authorCreateQuesPage.getOptions().each(($el, index, $list) => {
      cy.get($el).type(this.data.options[index]);
      if (this.data.options[index] == this.data.answer) {
        authorCreateQuesPage.getOptionRadio().eq(index).click();
      }
    });
    authorCreateQuesPage.getQuestionBox().should("be.visible");
    authorCreateQuesPage.getOptionsBox().should("have.length", 3);
    authorCreateQuesPage.getRadioBox().should("have.length", 3);
    cy.get("button[value='Save']").click();
    authorCreateQuesPage.getAnswerSection().should("be.visible");
  });

  // it("G1.Create question", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.wait(2000);
  //   authorCreateQuesPage.getClass().select("12");
  //   authorCreateQuesPage.getSubject().select("Mathematics");
  //   authorCreateQuesPage.getQuesType().select("mcq");
  //   authorCreateQuesPage.getScore().type("2");
  //   authorCreateQuesPage.getSource().type("test_source");
  //   authorCreateQuesPage.getTopics().select("Matrix");
  //   authorCreateQuesPage.getSubTopics().select("Quadratic Equation");
  //   authorCreateQuesPage.getSemantics().select("Apply");
  //   authorCreateQuesPage.getDifficulty().select("Medium");
  //   authorCreateQuesPage.getTags().type("tag1").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getTags().type("tag2").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getCreateBtn().click();
  //   authorCreateQuesPage.getQuestion().type(this.data.question);
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     cy.get($el).type(this.data.options[index]);
  //     if (this.data.options[index] == this.data.answer) {
  //       authorCreateQuesPage.getOptionRadio().eq(index).click();
  //     }
  //   });
  //   authorCreateQuesPage.getQuestionBox().should("be.visible");
  //   authorCreateQuesPage.getOptionsBox().should("have.length", 3);
  //   authorCreateQuesPage.getRadioBox().should("have.length", 3);
  //   authorCreateQuesPage.getSaveBtn().click();
  //   authorCreateQuesPage.getAnswerSection().should("be.visible");
  //   authorCreateQuesPage.getSaveAlert().should("be.visible");
  //   authorCreateQuesPage.getButtonSection().should("have.length", 3);
  //   authorCreateQuesPage.getEditBtn().should("be.visible");
  //   authorCreateQuesPage.getPublishBtn().should("be.visible");
  //   authorCreateQuesPage.getCreateNewBtn().should("be.visible");
  // });

  // it("G2.Publish question", function () {
  //   cy.visit(Cypress.env("rubriksUrl") + "dashboard");
  //   authorCreateQuesPage.getCreateQues().click({ force: true });
  //   cy.wait(2000);
  //   authorCreateQuesPage.getClass().select("12");
  //   authorCreateQuesPage.getSubject().select("Mathematics");
  //   authorCreateQuesPage.getQuesType().select("mcq");
  //   authorCreateQuesPage.getScore().type("2");
  //   authorCreateQuesPage.getSource().type("test_source");
  //   authorCreateQuesPage.getTopics().select("Matrix");
  //   authorCreateQuesPage.getSubTopics().select("Quadratic Equation");
  //   authorCreateQuesPage.getSemantics().select("Apply");
  //   authorCreateQuesPage.getDifficulty().select("Medium");
  //   authorCreateQuesPage.getTags().type("tag1").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getTags().type("tag2").tab();
  //   cy.wait(1000);
  //   authorCreateQuesPage.getCreateBtn().click();
  //   authorCreateQuesPage.getQuestion().type(this.data.question);
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     cy.get($el).type(this.data.options[index]);
  //     if (this.data.options[index] == this.data.answer) {
  //       authorCreateQuesPage.getOptionRadio().eq(index).click();
  //     }
  //   });
  //   authorCreateQuesPage.getQuestionBox().should("be.visible");
  //   authorCreateQuesPage.getOptionsBox().should("have.length", 3);
  //   authorCreateQuesPage.getRadioBox().should("have.length", 3);
  //   authorCreateQuesPage.getSaveBtn().click();
  //   authorCreateQuesPage.getPublishBtn().should("be.visible");
  //   cy.wait(6000);
  //   authorCreateQuesPage.getPublishBtn().click();
  //   authorCreateQuesPage.getPublishAlert().should("be.visible");
  //   authorCreateQuesPage.getAnswerSection().should("be.visible");
  //   authorCreateQuesPage.getButtonSection().should("have.length", 1);
  //   authorCreateQuesPage.getCreateNewBtn().should("be.visible");
  // });

  // it("G3.Create New question", function () {
  //   authorCreateQuesPage.getCreateNewBtn().click();
  //   authorCreateQuesPage.getClass().should("have.value", this.data.class);
  //   authorCreateQuesPage.getSubject().should("have.value", this.data.subject);
  //   authorCreateQuesPage.getQuesType().should("have.value", this.data.quesType);
  //   authorCreateQuesPage.getScore().should("have.value", this.data.score);
  //   authorCreateQuesPage.getSource().should("have.value", this.data.source);
  //   authorCreateQuesPage.getTopics().should("have.value", this.data.topics);
  //   authorCreateQuesPage
  //     .getSubTopics()
  //     .should("have.value", this.data.subTopics);
  //   authorCreateQuesPage
  //     .getSemantics()
  //     .should("have.value", this.data.semantics);
  //   authorCreateQuesPage
  //     .getDifficulty()
  //     .should("have.value", this.data.difficulty);
  //   authorCreateQuesPage.getQuestionBox().should("have.length", 1);
  //   authorCreateQuesPage.getQuestion().then(($el) => {
  //     expect($el.text()).to.be.empty;
  //   });
  //   authorCreateQuesPage.getOptionsBox().should("be.visible");
  //   authorCreateQuesPage.getOptions().each(($el, index, $list) => {
  //     expect($el.text()).to.be.empty;
  //   });
  // });
});
