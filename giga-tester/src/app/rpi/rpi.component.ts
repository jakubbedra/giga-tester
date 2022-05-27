import {Component, OnInit} from '@angular/core';
import {ClosedQuestion} from "../questions/closed-question.model";
import {QuestionsService} from "../injectable/questions-service";
import {RpiExam} from "../data/rpi/rpi-exam";

@Component({
  selector: 'app-rpi',
  templateUrl: './rpi.component.html',
  styleUrls: ['./rpi.component.css']
})
export class RpiComponent implements OnInit {

  allQuestions: boolean;

  showAnswers: boolean;
  pointsPerClosedQuestion = 1;
  maxPointsClosedQuestions = 40;
  questionsCount = 40;

  closedQuestions: ClosedQuestion[];

  constructor(
    private questionsService: QuestionsService
  ) {
    this.showAnswers = false;
    this.allQuestions = false;
  }

  ngOnInit(): void {
    this.initExam();
  }

  initExam() {
    this.closedQuestions = this.questionsService.getRandomClosedQuestions(
      "rpi", this.questionsCount, false
    ).map(this.mixQuestion);
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

  onCheckAllQuestions() {
    if (this.allQuestions) {
      this.maxPointsClosedQuestions = 40;
      this.questionsCount = 40;
    } else {
      this.maxPointsClosedQuestions = RpiExam.closedQuestions.length;
      this.questionsCount = RpiExam.closedQuestions.length;
    }
    this.allQuestions = !this.allQuestions;
    this.onNewExam();
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
