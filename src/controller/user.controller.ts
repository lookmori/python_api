import { Inject, Controller, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { User } from '../interface';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.163.com',
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: 'lookmori@163.com',
    pass: 'PRuQBpNBJfWXHBXR',
  },
});
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
  @Post('/sendCode')
  async sendCode(@Body() options: any) {
    let result = null;
    const mailOptions = {
      from: '"lookmori@163.com', // sender address
      to: options.registerUsereMail, // list of receivers
      subject: '注册账号', // Subject line
      html: '<p>你正在注册做题网站账号 （<a href="www.zuotipy.com">网站链接</a>），如不是你的操作请忽视！</p>',
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error, 'error');
      }
      result = info;
      if (result) {
        return { status: 'success', data: result, code: 200 };
      } else {
        return { status: 'error', data: {}, code: 500 };
      }
    });
  }
}
