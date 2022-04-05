import {Component, OnInit} from '@angular/core';
import {OpenQuestion} from "../questions/open-question.model";
import {QuestionsService} from "../injectable/questions-service";
import {MultipleChoiceQuestion} from "../questions/multiple-choice-question.model";

@Component({
  selector: 'app-bsk',
  templateUrl: './bsk.component.html',
  styleUrls: ['./bsk.component.css']
})
export class BskComponent implements OnInit {

  includeCustomQuestions: boolean;

  showAnswers: boolean;
  pointsPerMultipleChoiceQuestion = 1;
  maxPointsMultipleChoiceQuestions = 15;

  multipleChoiceQuestions: MultipleChoiceQuestion[];
  openQuestions: OpenQuestion[];

  constructor(
    private questionsService: QuestionsService
  ) {
    this.includeCustomQuestions = false;
    this.showAnswers = false;
  }

  ngOnInit(): void {
    this.initExam();
    this.multipleChoiceQuestions.forEach(q => {
      q.selected = [];
    });
  }

  initExam() {
    this.multipleChoiceQuestions = this.questionsService.getRandomMultipleChoiceQuestions("bsk", 15)
      .map(this.mixQuestion);
    this.openQuestions = this.questionsService.getRandomOpenQuestions("bsk", 2, this.includeCustomQuestions);
  }

  onSelectAnswer(i: number, j: number) {
    let ind = this.multipleChoiceQuestions[i].selected.indexOf(j);
    if (!this.showAnswers) {
      if (ind === -1) {
        this.multipleChoiceQuestions[i].selected.push(j);
      } else {
        this.multipleChoiceQuestions[i].selected.splice(ind, 1);
      }
    }
  }

  onSubmit() {
    this.showAnswers = true;
  }

  onNewExam() {
    this.showAnswers = false;
    this.multipleChoiceQuestions.forEach(q => {
      q.selected = [];
    });
    this.initExam();
  }

  calculateScore(): number {
    let score = 0;
    for (let q of this.multipleChoiceQuestions) {
      score += this.calculateMultipleChoiceQuestionScore(q);
    }
    return score * this.pointsPerMultipleChoiceQuestion;
  }

  calculateMultipleChoiceQuestionScore(question: MultipleChoiceQuestion): number {
    let points = 0;
    for (let a of question.selected) {
      if (question.correctAnswers.indexOf(a) > -1) {
        points++;
      } else {
        return 0;
      }
    }
    return points / question.correctAnswers.length;
  }

  mixQuestion(question: MultipleChoiceQuestion): MultipleChoiceQuestion {
    console.log(question);
    let correctAnswers: string[] = [];
    for (let ind of question.correctAnswers) {
      correctAnswers.push(question.answers[ind]);
    }
    question.correctAnswers = [];
    let answersStrings = [];
    question.answers.forEach(a => answersStrings.push(a));
    question.answers.splice(0, question.answers.length);
    let totalAnswers = answersStrings.length;
    for (let i = 0; i < totalAnswers; i++) {
      let ind = Math.floor(Math.random() * answersStrings.length);
      question.answers.push(answersStrings[ind]);
      if (correctAnswers.indexOf(answersStrings[ind]) > -1) {
        question.correctAnswers.push(i);
      }
      answersStrings.splice(ind, 1);
    }
    return question;
  }

}
