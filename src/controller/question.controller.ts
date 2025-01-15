import { Context, Controller, Inject } from "@midwayjs/core";

@Controller('/question')
export class Question {
  @Inject()
  ctx: Context;

  @Inject()
  questionService: QuestionService;
}