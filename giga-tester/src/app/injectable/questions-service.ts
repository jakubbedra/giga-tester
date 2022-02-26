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
import {BskExam} from "../data/bsk/bsk-exam";
import {WzrExam} from "../data/wzr/wzr-exam";
import {JoKuchtaExam} from "../data/jo/jo-kuchta-exam";
import {JoBowiszExam} from "../data/jo/jo-bowisz-exam";

@Injectable()
export class QuestionsService {

  constructor() {
  }

  public getRandomClosedQuestions(category: string, amount: number): ClosedQuestion[] {
    let ret: ClosedQuestion[] = [];
    let tmp: ClosedQuestion[] = [];
    let closedQuestions = QuestionsService.findClosedQuestionsList(category);
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

  public getRandomMultipleChoiceQuestions(category: string, amount: number): MultipleChoiceQuestion[] {
    let ret: MultipleChoiceQuestion[] = [];
    let tmp: MultipleChoiceQuestion[] = [];
    let multipleChoiceQuestions = QuestionsService.findMultipleChoiceQuestionsList(category);
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

  public getRandomOpenQuestions(category: string, amount: number): OpenQuestion[] {
    let ret: OpenQuestion[] = [];
    let tmp: OpenQuestion[] = [];
    QuestionsService.findOpenQuestionsList(category).forEach(q => tmp.push(q));
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

  private static findOpenQuestionsList(category: string) {
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
      case "zbs": {
        return ZbsOldExam.openQuestions;
      }
      case "bsk": {
        return BskExam.openQuestions;
      }
      case "wzr": {
        return WzrExam.questions;
      }
      case "jo-kuchta": {
        return JoKuchtaExam.openQuestions;
      }
      case "jo-bowisz": {
        return JoBowiszExam.openQuestions;
      }
    }
    return [];
  }

  private static findClosedQuestionsList(category: string) {
    switch (category) {
      case "zbs": {
        return ZbsOldExam.closedQuestions;
      }
      case "rpi": {
        return RpiExam.closedQuestions;
      }
      case "zfi": {
        return ZfiQuizes.closedQuestions;
      }
    }
    return [];
  }

  private static findMultipleChoiceQuestionsList(category: string) {
    switch (category) {
      case "bsk": {
        return BskExam.multipleChoiceQuestions;
      }
    }
    return [];
  }

}