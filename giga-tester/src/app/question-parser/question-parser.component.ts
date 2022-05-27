import {Component, OnInit} from '@angular/core';
import {ClosedQuestion} from "../questions/closed-question.model";

@Component({
  selector: 'app-question-parser',
  templateUrl: './question-parser.component.html',
  styleUrls: ['./question-parser.component.css']
})
export class QuestionParserComponent implements OnInit {

  questionsAndAnswers: string;
  customClosedQuestions: ClosedQuestion[] = [];

  answersCount: number;

  constructor() {
    this.questionsAndAnswers = "";
    this.answersCount = 5;
  }

  ngOnInit(): void {
  }

  onParse() {
    //console.log(this.questionsAndAnswers);
    let lines = this.questionsAndAnswers.split('==');
    let i = 0;
    let check = this.answersCount + 1 + 1;
    for (let ind in lines) {
      let line = lines[ind];
      if (line != '') {
        if (i % check == 0) {
          //question
          let q = new ClosedQuestion(line, [], 0);
          this.customClosedQuestions.push(q);
        } else if (i % check > 0 && i % check < 6) {
          //answers
          let question = this.customClosedQuestions[this.customClosedQuestions.length - 1];
          question.answers.push(line);
        } else {
          //correct answer
          let correct = line.charCodeAt(1) - 97;
          //console.log(correct);
          let question = this.customClosedQuestions[this.customClosedQuestions.length - 1];
          question.correctAnswer = correct;
        }
        i++;
      }
    }
    let json = JSON.stringify(this.customClosedQuestions);
    this.download(json);
  }

  download(json: string) {
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(json));
    element.setAttribute('download', "primer-server-task.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

}
