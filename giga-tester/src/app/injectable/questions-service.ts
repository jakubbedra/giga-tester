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
    }
    return [];
  }

  private static findClosedQuestionsList(category: string) {
    switch (category) {
      case "zbs": {
        return ZbsOldExam.closedQuestions;
      }
    }
    return [];
  }

}
