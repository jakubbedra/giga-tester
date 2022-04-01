import { Component, OnInit } from '@angular/core';
import {OpenQuestion} from "../questions/open-question.model";
import {QuestionsService} from "../injectable/questions-service";

@Component({
  selector: 'app-zbs-entry',
  templateUrl: './zbs-entry.component.html',
  styleUrls: ['./zbs-entry.component.css']
})
export class ZbsEntryComponent implements OnInit {

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
    this.questions = this.questionsService.getRandomOpenQuestions(this.selectedEntry, 5);
    for(let i=0; i<5; i++) {
      (<HTMLTextAreaElement>document.getElementById('userAnswer'+i)).value = "";
    }
  }

  onSubmit() {
    this.showAnswers = true;
  }

  onNewEntry() {
    this.showAnswers = false;
    this.initEntry();
  }

}
