import {Component, OnInit} from '@angular/core';
import {ClosedQuestion} from "../questions/closed-question.model";
import {QuestionsService} from "../injectable/questions-service";

@Component({
  selector: 'app-zfi',
  templateUrl: './zfi.component.html',
  styleUrls: ['./zfi.component.css']
})
export class ZfiComponent implements OnInit {

  showAnswers: boolean;
  pointsPerClosedQuestion = 1;
  maxPointsClosedQuestions = 5;

  closedQuestions: ClosedQuestion[];

  constructor(
    private questionsService: QuestionsService
  ) {
    this.showAnswers = false;
  }

  ngOnInit(): void {
    this.initExam();
  }

  initExam() {
    this.closedQuestions = this.questionsService.getRandomClosedQuestions("zfi", 5)
      .map(this.mixQuestion);
    this.closedQuestions.forEach(q => {
      q.selected = -1;
    });
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
    return question;
  }

}
