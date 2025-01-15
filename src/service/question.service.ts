import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserAskQues } from '../entity/user_ask_ques.entity';
import { Repository } from 'typeorm';
import { QuesEntity } from '../entity/question.entity';
import { Question } from '../interface';

@Provide()
export class QuestionService {
  @InjectEntityModel(QuesEntity)
  QuesModel: Repository<Question>;

  async addQuestion(options: Question) {
    const newQuestion = new QuesEntity();
    newQuestion.question_name = options.question_name;
    newQuestion.question_desc = options.question_desc;
    newQuestion.question_in = options.question_in;
    newQuestion.question_out = options.question_out;
    const addResult = await this.QuesModel.save(newQuestion);
    if (addResult) {
      return {
        code: 200,
        data: { ...addResult },
        message: '发布问题成功',
      };
    }
  }
  async delQuestion(options: Question) {
    const delResult = await this.QuesModel.find({ where: { id: options.id } });
    if (delResult) {
      return {
        code: 200,
        data: { ...delResult },
        message: '删除问题成功',
      };
    }
  }

  async getQuestionAll() {
    const getQuesResult = await this.QuesModel.find();
    return {
      code: 200,
      data: { ...getQuesResult },
      message: '查询成功',
    };
  }
}
