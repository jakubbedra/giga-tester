import {OpenQuestion} from "../../questions/open-question.model";

export class WzrExam {
  public static questions: OpenQuestion[] = [
    new OpenQuestion(`
      question1
    `, `
      answer1
    `),
    new OpenQuestion(`
      question2
    `, `
      answer2
    `),
    new OpenQuestion(`
      question3
    `, `
      answer3
    `),
    new OpenQuestion(`
      question4
    `, `
      answer4
    `),
    new OpenQuestion(`
      question5
    `, `
      answer5
    `)
  ];
}
