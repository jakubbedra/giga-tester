import {Component, OnInit} from '@angular/core';
import {OpenQuestion} from "../questions/open-question.model";
import {QuestionsService} from "../injectable/questions-service";
import {ClosedQuestion} from "../questions/closed-question.model";

@Component({
  selector: 'app-jo',
  templateUrl: './jo.component.html',
  styleUrls: ['./jo.component.css']
})
export class JoComponent implements OnInit {

  includeCustomQuestions: boolean;

  maxPointsClosedKuchtaQuestions: number;
  closedQuestions: ClosedQuestion[];
  openQuestions: OpenQuestion[];
  selectedExam: string;
  showAnswers: boolean;

  constructor(
    private questionsService: QuestionsService
  ) {
    this.includeCustomQuestions = false;
    this.maxPointsClosedKuchtaQuestions = 7;
    this.closedQuestions = [];
    this.openQuestions = [];
    this.showAnswers = false;
    this.selectedExam = '';
  }

  ngOnInit(): void {
    this.initEntry();
  }

  initEntry(): void {
    this.closedQuestions = this.questionsService.getRandomClosedQuestions(this.selectedExam, 6)
      .map(this.mixQuestion);
    this.showAnswers = false;
    this.openQuestions = this.questionsService.getRandomOpenQuestions(this.selectedExam, 6, false);
    if (this.closedQuestions != null && this.openQuestions !== null) {
      this.clearQuestions();
    }
  }

  onSubmit() {
    this.showAnswers = true;
  }

  onNewEntry() {
    this.showAnswers = false;
    this.initEntry();
  }

  onSelectAnswer(i: number, j: number) {
    if (!this.showAnswers) {
      this.closedQuestions[i].selected = j;
    }
  }

  calculateScore(): number {
    let score = 0;
    for (let q of this.closedQuestions) {
      if (q.correctAnswer === q.selected) {
        score++;
      }
    }
    return score;
  }

  onCheckCustomQuestions() {
    this.includeCustomQuestions = !this.includeCustomQuestions;
    console.log(this.includeCustomQuestions);
    this.initEntry();
  }

  private mixQuestion(question): ClosedQuestion {
    let correctAnswerString = question.answers[question.correctAnswer];
    let answersStrings = [];
    question.answers.forEach(a => answersStrings.push(a));
    question.answers.splice(0, question.answers.length);
    let correctAnswerNewInd = 0;
    let totalAnswers = answersStrings.length;
    for (let i = 0; i < totalAnswers; i++) {
      let ind = Math.floor(Math.random() * answersStrings.length);
      if (answersStrings[ind] === correctAnswerString) {
        correctAnswerNewInd = i;
      }
      question.answers.push(answersStrings[ind]);
      answersStrings.splice(ind, 1);
    }
    question.correctAnswer = correctAnswerNewInd;
    return question;
  }

  private clearQuestions(): void {
    this.closedQuestions.forEach(q => q.selected = -1);
    this.openQuestions.forEach(q => q.givenAnswer = "");
  }

}
