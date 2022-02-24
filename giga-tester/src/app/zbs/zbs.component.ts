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
    this.closedQuestions = this.questionsService.getRandomClosedQuestions("zbs", 10);
    this.openQuestions = this.questionsService.getRandomOpenQuestions("zbs", 1);
  }

  checkAnswers() {

  }

  onSelectAnswer(i: number, j: number) {
    this.closedQuestions[i].selected = j;
  }

  onSubmit() {

  }

  onNewExam() {

  }

//???? czy nie mam juz tego gdzies
  mixAnswers() {

  }

}
