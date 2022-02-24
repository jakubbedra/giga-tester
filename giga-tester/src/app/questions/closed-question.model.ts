export class ClosedQuestion {
  public content: string;
  public answers: string[];
  public correctAnswer: number;
  public selected: number;
  public submitted: boolean;

  constructor(content: string, answers: string[], correctAnswer: number) {
    this.content = content;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.selected = -1;
    this.submitted = false;
  }

}
