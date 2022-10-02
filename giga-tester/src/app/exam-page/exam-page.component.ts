import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../injectable/questions-service";
import {ActivatedRoute} from "@angular/router";
import {OpenQuestionDto} from "../questions/open-question.dto";
import {ClosedQuestionDto} from "../questions/closed-question.dto";
import {MultipleChoiceQuestionDto} from "../questions/multiple-choice-question.dto";

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

  examId: number;

  // questions
  openQuestions: OpenQuestionDto[];
  closedQuestions: ClosedQuestionDto[];
  multipleChoiceQuestions: MultipleChoiceQuestionDto[];

  // answers
  openQuestionsAnswers: string[];
  closedQuestionsAnswers: number[];
  multipleChoiceQuestionsAnswers: number[][];

  allQuestions: boolean;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.examId = Number(routeParams.get('examId'));
  }

  fetchRandomQuestions(): void {
    this.openQuestions.splice(0);
    this.closedQuestions.splice(0);
    this.multipleChoiceQuestions.splice(0);
    this.questionsService.getRandomExamQuestions(-1, this.allQuestions).subscribe(questions => {
      questions.openQuestionRequests.forEach(q => this.openQuestions.push(q));
      questions.closedQuestionRequests.forEach(q => this.closedQuestions.push(q));
      questions.multipleChoiceQuestionRequests.forEach(q => this.multipleChoiceQuestions.push(q));
      this.initAnswers();
    });
  }

  initAnswers(): void {
    for (let i = 0; i < this.openQuestions.length; i++) {
      this.openQuestionsAnswers.push("");
    }
    for (let i = 0; i < this.closedQuestions.length; i++) {
      this.closedQuestionsAnswers.push(-1);
    }
    for (let i = 0; i < this.multipleChoiceQuestions.length; i++) {
      this.multipleChoiceQuestionsAnswers.push([]);
    }
  }

}
