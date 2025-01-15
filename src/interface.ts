/**
 * @description User-Service parameters
 */

export interface User {
  user_name: string;
  user_pwd: string;
  user_email?: string;
}

export interface Question {
  id: number;
  question_name: string;

  question_desc: string;

  question_in: string;

  question_out: string;
  question_ans: string;
}
