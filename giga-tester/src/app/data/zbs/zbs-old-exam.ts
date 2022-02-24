import {OpenQuestion} from "../../questions/open-question.model";
import {ClosedQuestion} from "../../questions/closed-question.model";

export class ZbsOldExam {
  public static closedQuestions: ClosedQuestion[] = [
    new ClosedQuestion(`
Question 1
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 2
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 3
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 4
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 5
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 6
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 7
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 8
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 9
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0),
    new ClosedQuestion(`
Question 10
`,
      [`
answer1
`, `
answer2
`, `
answer3
`, `
answer4
`], 0)
  ];

  public static openQuestions: OpenQuestion[] = [
    new OpenQuestion(`
      question1
    `, `
      answer1
    `)
  ];
}
