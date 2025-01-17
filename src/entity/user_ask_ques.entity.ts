import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum AnsStatus {
  FINALL = '1',
  ERROR = '-1',
  OTHER = '0',
}
@Entity('user_ask_ques')
export class UserAskQues {
  @PrimaryGeneratedColumn()
  ques_id: string;
  @Column()
  user_id: string;
  @Column()
  ans_code: string;
  @Column({
    type: 'enum',
    default: AnsStatus.OTHER,
    enum: AnsStatus,
  })
  ans_status: string;
  question_name: string;
}
