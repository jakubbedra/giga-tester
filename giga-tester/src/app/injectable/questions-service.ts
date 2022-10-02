import {Injectable} from "@angular/core";
import {ClosedQuestion} from "../questions/closed-question.model";
import {OpenQuestion} from "../questions/open-question.model";
import {ZbsEntry1} from "../data/zbs/zbs-entry1";
import {ZbsEntry2} from "../data/zbs/zbs-entry2";
import {ZbsEntry3} from "../data/zbs/zbs-entry3";
import {ZbsEntry4} from "../data/zbs/zbs-entry4";
import {ZbsEntry5} from "../data/zbs/zbs-entry5";
import {ZbsEntry6} from "../data/zbs/zbs-entry6";
import {ZbsEntry7} from "../data/zbs/zbs-entry7";
import {ZbsOldExam} from "../data/zbs/zbs-old-exam";
import {RpiExam} from "../data/rpi/rpi-exam";
import {ZfiQuizes} from "../data/zfi/zfi-quizes";
import {MultipleChoiceQuestion} from "../questions/multiple-choice-question.model";
import {WzrExam} from "../data/wzr/wzr-exam";
import {JoKuchtaExam} from "../data/jo/jo-kuchta-exam";
import {JoBowiszExam} from "../data/jo/jo-bowisz-exam";
import {BskK1} from "../data/bsk/bsk-k1";
import {StExam} from "../data/st/st-exam";
import pmlJson from "../data/pml/pml.json"
import {ExamQuestionsDto} from "../questions/exam-questions-dto";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class QuestionsService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getRandomExamQuestions(examId: number, allQuestions: boolean): Observable<ExamQuestionsDto> {
    return this.http.get<ExamQuestionsDto>(
      environment.apiUrl + "/exams/" + examId + "/questions?allQuestions" + allQuestions
    );
  }

  public getExamTemplates(subjectId: number): Observable<> {
   return this.http.get<>(
     environment.apiUrl + "/subjects/" + subjectId + "/templates"
   );
  }

  public getRandomClosedQuestions(category: string, amount: number, includeCustomQuestions: boolean): ClosedQuestion[] {
    let ret: ClosedQuestion[] = [];
    let tmp: ClosedQuestion[] = [];
    let closedQuestions = QuestionsService.findClosedQuestionsList(category, includeCustomQuestions);
    if (closedQuestions.length < amount) {
      return [];
    }
    for (let q of closedQuestions) {
      tmp.push(q);
    }
    for (let i = 0; i < amount; i++) {
      let ind = Math.floor(Math.random() * tmp.length);
      ret.push(tmp[ind]);
      tmp.splice(ind, 1);
    }
    return ret;
  }

  public getRandomMultipleChoiceQuestions(category: string, amount: number, includeCustomQuestions: boolean): MultipleChoiceQuestion[] {
    let ret: MultipleChoiceQuestion[] = [];
    let tmp: MultipleChoiceQuestion[] = [];
    let multipleChoiceQuestions = QuestionsService.findMultipleChoiceQuestionsList(category, includeCustomQuestions);
    if (multipleChoiceQuestions.length < amount) {
      return [];
    }
    for (let q of multipleChoiceQuestions) {
      tmp.push(q);
    }
    for (let i = 0; i < amount; i++) {
      let ind = Math.floor(Math.random() * tmp.length);
      ret.push(tmp[ind]);
      tmp.splice(ind, 1);
    }
    return ret;
  }

  public getRandomOpenQuestions(category: string, amount: number, includeCustomQuestions: boolean): OpenQuestion[] {
    let ret: OpenQuestion[] = [];
    let tmp: OpenQuestion[] = [];
    QuestionsService.findOpenQuestionsList(category, includeCustomQuestions).forEach(q => tmp.push(q));
    if (tmp.length < amount) {
      return [];
    }
    for (let i = 0; i < amount; i++) {
      let ind = Math.floor(Math.random() * tmp.length);
      ret.push(tmp[ind]);
      tmp.splice(ind, 1);
    }
    return ret;
  }

  private static findOpenQuestionsList(category: string, includeCustomQuestions) {
    if (category.startsWith("zbs")) {
      //zbs-0-0-0
      let entryQuestions: boolean = category.charAt(4) === "1";
      let wdcQuestions: boolean = category.charAt(6) === "1";
      let customQuestions: boolean = category.charAt(8) === "1";
      let questions = ZbsOldExam.openQuestions;
      questions.forEach(q => q.content = "[Paka] " + q.content);
      if (wdcQuestions) {
        let tmp = ZbsOldExam.openQuestionsWDC;
        tmp.forEach(q => q.content = "[WDC] " + q.content);
        questions.concat(tmp);
      }
      if (customQuestions) {
        let tmp = ZbsOldExam.openQuestionsCustom;
        tmp.forEach(q => q.content = "[Custom] " + q.content);
        questions.concat(tmp);
      }
      return questions;
    }
    switch (category) {
      case "firewall": {
        return ZbsEntry1.questions;
      }
      case "radius": {
        return ZbsEntry2.questions;
      }
      case "vlan2": {
        return ZbsEntry3.questions;
      }
      case "monitoring": {
        return ZbsEntry4.questions;
      }
      case "pki": {
        return ZbsEntry5.questions;
      }
      case "netscan": {
        return ZbsEntry6.questions;
      }
      case "ipv6": {
        return ZbsEntry7.questions;
      }
      case "bsk": {
        if (includeCustomQuestions) {
          return BskK1.openQuestions.concat(BskK1.nonExamOpenQuestions);
        }
        return BskK1.openQuestions;
      }
      case "wzr": {
        return WzrExam.questions;
      }
      case "jo-kuchta": {
        if (includeCustomQuestions) {
          return JoKuchtaExam.openQuestions.concat(JoKuchtaExam.customOpenQuestions);
        }
        return JoKuchtaExam.openQuestions;
      }
      case "jo-bowisz": {
        return JoBowiszExam.openQuestions;
      }
      case "st": {
        return StExam.openQuestions;
      }
    }
    return [];
  }

  private static findClosedQuestionsList(category: string, includeCustomQuestions: boolean) {
    //console.log(category);
    //console.log(category.startsWith("zbs"));
    if (category.startsWith("zbs")) {
      //zbs-0-0-0
      //console.log("chuj");
      let entryQuestions: boolean = category.charAt(4) === "1";
      let wdcQuestions: boolean = category.charAt(6) === "1";
      let customQuestions: boolean = category.charAt(8) === "1";
      let questions = [];
      ZbsOldExam.closedQuestions.forEach(q => questions.push(Object.assign({}, q)));
      questions.forEach(q => q.content = "[Paka] " + q.content);
      if (entryQuestions) {
        let tmp = [];
        ZbsOldExam.closedQuestionsEntries.forEach(q => tmp.push(Object.assign({}, q)));
        tmp.forEach(q => {
          q.content = "[Wejsciówka] " + q.content;
          questions.push(q);
        });
      }
      if (wdcQuestions) {
        let tmp = [];
        //console.log("WDCCCCC XD");
        ZbsOldExam.closedQuestionsWDC.forEach(q => tmp.push(Object.assign({}, q)));
        tmp.forEach(q => {
          q.content = "[WDC] " + q.content;
          questions.push(q);
        });
      }
      if (customQuestions) {
        let tmp = [];
        ZbsOldExam.closedQuestionsCustom.forEach(q => tmp.push(Object.assign({}, q)));
        tmp.forEach(q => {
          q.content = "[Custom] " + q.content;
          questions.push(q);
        });
      }
      return questions;
    }
    switch (category) {
      case "rpi": {
        return RpiExam.closedQuestions;
      }
      case "zfi": {
        return ZfiQuizes.closedQuestions;
      }
      case "jo-kuchta": {
        if (includeCustomQuestions) {
          return JoKuchtaExam.closedQuestions.concat(JoKuchtaExam.customClosedQuestions);
        }
        return JoKuchtaExam.closedQuestions;
      }
      case "st": {
        return StExam.closedQuestions;
      }
      case "pml": {
        return pmlJson;
      }
    }
    return [];
  }

  private static findMultipleChoiceQuestionsList(category: string, includeCustomQuestions: boolean) {
    switch (category) {
      case "bsk": {
        if (includeCustomQuestions) {
          return BskK1.multipleChoiceQuestions.concat(BskK1.nonExamMultipleChoiceQuestions);
        }
//        return BskExam.multipleChoiceQuestions;
        return BskK1.multipleChoiceQuestions;
      }
    }
    return [];
  }

}
