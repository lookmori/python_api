import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('question')
export class QuesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'tinytext' })
  question_name: string;
  @Column({ type: 'varchar' })
  question_desc: string;
  @Column({ type: 'mediumblob' })
  question_in: string;
  @Column({ type: 'mediumblob' })
  question_out: string;
  @Column({ type: 'longtext' })
  question_ans: string;
}
