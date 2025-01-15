import { Inject, Controller, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { User } from '../interface';

@Controller('/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/login')
  async getUser(@Body() user: User) {
    const useResult = await this.userService.loginUser(user);
    return useResult;
  }

  @Post('/register')
  async registerUser(@Body() user: User) {
    console.log(user, 'user');
    const user_one = await this.userService.RegisterUser(user);
    return user_one;
  }
}
