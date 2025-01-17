import { Context, Controller, Inject } from '@midwayjs/core';
import { QuestionService } from '../service/question.service';

@Controller('/question')
export class Question {
  @Inject()
  ctx: Context;

  @Inject()
  questionService: QuestionService;
}
