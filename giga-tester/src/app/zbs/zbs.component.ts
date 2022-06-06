import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../injectable/questions-service";
import {ClosedQuestion} from "../questions/closed-question.model";
import {OpenQuestion} from "../questions/open-question.model";
import {ZfiQuizes} from "../data/zfi/zfi-quizes";
import {ZbsOldExam} from "../data/zbs/zbs-old-exam";

@Component({
  selector: 'app-zbs',
  templateUrl: './zbs.component.html',
  styleUrls: ['./zbs.component.css']
})
export class ZbsComponent implements OnInit {

  //settings
  allQuestions: boolean;
  enabledQuestionsEntries: boolean;
  enabledQuestionsWdc: boolean;
  enabledQuestionsCustom: boolean;

  //other shit
  showAnswers: boolean;
  pointsPerClosedQuestion = 1;
  maxPointsClosedQuestions = 20;
  questionsCount = 20;

  closedQuestions: ClosedQuestion[];
  openQuestions: OpenQuestion[];

  constructor(
    private questionsService: QuestionsService
  ) {
    this.showAnswers = false;
  }

  ngOnInit(): void {
    this.initExam();
    this.allQuestions = false;
    this.enabledQuestionsEntries = false;
    this.enabledQuestionsWdc = false;
    this.enabledQuestionsCustom = false;
  }

  initExam() {
    let category = "zbs-";
    category += this.enabledQuestionsEntries ? "1-" : "0-";
    category += this.enabledQuestionsWdc ? "1-" : "0-";
    category += this.enabledQuestionsCustom ? "1-" : "0";

    this.closedQuestions = this.questionsService.getRandomClosedQuestions(category, this.questionsCount, false)
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

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * make it work again....
   * @param question
   */
  mixQuestion(question): ClosedQuestion {
    //console.log(question);
    //let correctAnswerString = question.answers[question.correctAnswer];
    //let answersStrings = [];
    //question.answers.forEach(a => answersStrings.push(a));
    //question.answers.splice(0, question.answers.length);
    //let correctAnswerNewInd = 0;
    //let totalAnswers = answersStrings.length;
    //for (let i = 0; i < totalAnswers; i++) {
    //  let ind = Math.floor(Math.random() * answersStrings.length);
    //  if (answersStrings[ind] === correctAnswerString) {
    //    correctAnswerNewInd = i;
    //  }
    //  question.answers.push(answersStrings[ind]);
    //  answersStrings.splice(ind, 1);
    //}
    //question.correctAnswer = correctAnswerNewInd;
    //console.log(question);
    return question;
  }

  onCheckAllQuestions() {
    if (this.allQuestions) {
      this.maxPointsClosedQuestions = 20;
      this.questionsCount = 20;
    } else {
      this.maxPointsClosedQuestions = ZbsOldExam.closedQuestions.length +
        (this.enabledQuestionsCustom ? ZbsOldExam.closedQuestionsCustom.length : 0) +
        (this.enabledQuestionsWdc ? ZbsOldExam.closedQuestionsWDC.length : 0) +
        (this.enabledQuestionsEntries ? ZbsOldExam.closedQuestionsEntries.length : 0);
      this.questionsCount = ZbsOldExam.closedQuestions.length +
        (this.enabledQuestionsCustom ? ZbsOldExam.closedQuestionsCustom.length : 0) +
        (this.enabledQuestionsWdc ? ZbsOldExam.closedQuestionsWDC.length : 0) +
        (this.enabledQuestionsEntries ? ZbsOldExam.closedQuestionsEntries.length : 0);
    }
    this.allQuestions = !this.allQuestions;
    this.onNewExam();
  }

  onToggleQuestionsEntries() {
    this.enabledQuestionsEntries = !this.enabledQuestionsEntries;
    this.onNewExam();
  }

  onToggleQuestionsWdc() {
    this.enabledQuestionsWdc = !this.enabledQuestionsWdc;
    this.onNewExam();
  }

  onToggleQuestionsCustom() {
    this.enabledQuestionsCustom = !this.enabledQuestionsCustom;
    this.onNewExam();
  }

}
