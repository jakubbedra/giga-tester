export class OpenQuestion {
  public content: string;
  public correctAnswer: string;
  public givenAnswer: string;
  public submitted: boolean;

  constructor(content: string, correctAnswer: string) {
    this.content = content;
    this.correctAnswer = correctAnswer;
    this.givenAnswer = "";
    this.submitted = false;
  }

}
