import { Component, OnInit } from '@angular/core';
import {OpenQuestion} from "../questions/open-question.model";
import {QuestionsService} from "../injectable/questions-service";

@Component({
  selector: 'app-jo',
  templateUrl: './jo.component.html',
  styleUrls: ['./jo.component.css']
})
export class JoComponent implements OnInit {

  questions: OpenQuestion[];
  selectedEntry: string;
  showAnswers: boolean;

  constructor(
    private questionsService: QuestionsService
  ) {
    this.questions = [];
    this.showAnswers = false;
    this.selectedEntry = '';
  }

  ngOnInit(): void {
    this.initEntry();
  }

  initEntry(): void {
    this.showAnswers = false;
    this.questions = this.questionsService.getRandomOpenQuestions(this.selectedEntry, 10, false);
    console.log(this.selectedEntry);
  }

  onSubmit() {
    this.showAnswers = true;
  }

  onNewEntry() {
    this.showAnswers = false;
    this.initEntry();
  }

}
