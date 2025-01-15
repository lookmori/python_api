import { Provide } from '@midwayjs/core';
import { User } from '../interface';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(UserEntity)
  userModel: Repository<User>;
  async loginUser(options: User) {
    const userResult = await this.userModel.find({
      where: { user_name: options.user_name, user_pwd: options.user_pwd },
    });
    if (userResult.length) {
      return {
        code: 200,
        data: { ...userResult[0] },
        message: '登录成功',
      };
    }
    return {
      code: 400,
      data: {},
      message: '未查询到用户，请先注册',
    };
  }

  async RegisterUser(options: User) {
    console.log(options, '123');
    const userResult = await this.userModel.find({
      where: { user_name: options.user_name },
    });
    console.log(userResult);
    if (userResult.length) {
      return {
        code: 400,
        data: {},
        message: '账号已存在',
      };
    }
    const user_item = new UserEntity();
    user_item.user_name = options.user_name;
    user_item.user_pwd = options.user_pwd;
    user_item.user_email = options.user_email;

    const insertUseResult = await this.userModel.save(user_item);
    if (insertUseResult) {
      return {
        code: 200,
        data: { ...insertUseResult },
        message: '注册成功',
      };
    }
    return {
      code: 500,
      data: {},
      message: '服务器异常',
    };
  }
}
