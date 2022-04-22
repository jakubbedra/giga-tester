import {Component, OnInit} from '@angular/core';
import {ClosedQuestion} from "../questions/closed-question.model";
import {OpenQuestion} from "../questions/open-question.model";
import {QuestionsService} from "../injectable/questions-service";

@Component({
  selector: 'app-st',
  templateUrl: './st.component.html',
  styleUrls: ['./st.component.css']
})
export class StComponent implements OnInit {

  showAnswers: boolean;
  pointsPerClosedQuestion = 1;
  maxPointsClosedQuestions = 4;

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
    if (this.closedQuestions != null && this.openQuestions != null) {
      this.clearQuestions();
    }
    this.closedQuestions = this.questionsService.getRandomClosedQuestions("st", 4, false);
    this.closedQuestions.forEach(q => {
      q.selected = -1;
    });
    this.openQuestions = this.questionsService.getRandomOpenQuestions("st", 10, false);
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

  private clearQuestions(): void {
    this.closedQuestions.forEach(q => q.selected = -1);
    this.openQuestions.forEach(q => q.givenAnswer = "");
  }

}
