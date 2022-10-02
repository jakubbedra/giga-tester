import {OpenQuestionDto} from "./open-question.dto";
import {ClosedQuestionDto} from "./closed-question.dto";
import {MultipleChoiceQuestionDto} from "./multiple-choice-question.dto";

export class ExamQuestionsDto {
  openQuestionRequests: OpenQuestionDto[];
  closedQuestionRequests: ClosedQuestionDto[];
  multipleChoiceQuestionRequests: MultipleChoiceQuestionDto[];
}
