export class MultipleChoiceQuestion {
  public content: string;
  public answers: string[];
  public correctAnswers: number[];
  public selected: number[];

  constructor(content: string, answers: string[], correctAnswers: number[]) {
    this.content = content;
    this.answers = answers;
    this.correctAnswers = correctAnswers;
    this.selected = [];
  }

}
