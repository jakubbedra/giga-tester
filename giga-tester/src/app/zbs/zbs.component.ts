import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../injectable/questions-service";
import {ClosedQuestion} from "../questions/closed-question.model";
import {OpenQuestion} from "../questions/open-question.model";

@Component({
  selector: 'app-zbs',
  templateUrl: './zbs.component.html',
  styleUrls: ['./zbs.component.css']
})
export class ZbsComponent implements OnInit {

  showAnswers: boolean;
  pointsPerClosedQuestion = 1;
  maxPointsClosedQuestions = 10;

  closedQuestions: ClosedQuestion[];
  openQuestions: OpenQuestion[];

  constructor(
    private questionsService: QuestionsService
  ) {
    this.showAnswers = false;
  }

  ngOnInit(): void {
    this.initExam();
  }

  initExam() {
    this.closedQuestions = this.questionsService.getRandomClosedQuestions("zbs", 10)
      .map(this.mixQuestion);
    this.closedQuestions.forEach(q => {
      q.selected = -1;
    });
    this.openQuestions = this.questionsService.getRandomOpenQuestions("zbs", 1, false);
  }

  onSelectAnswer(i: number, j: number) {
    if (!this.showAnswers) {
      this.closedQuestions[i].selected = j;
    }
  }

  onSubmit() {
    this.showAnswers = true;
  }

  onNewExam() {
    this.showAnswers = false;
    this.closedQuestions.forEach(q => {
      q.selected = -1;
    });
    this.initExam();
  }

  calculateScore(): number {
    let score = 0;
    for (let q of this.closedQuestions) {
      if (q.correctAnswer === q.selected) {
        score += this.pointsPerClosedQuestion;
      }
    }
    return score;
  }

  mixQuestion(question): ClosedQuestion {
    console.log(question);
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
    //console.log(question);
    return question;
  }

}
