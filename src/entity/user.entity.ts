import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  user_name: string;
  @Column({ type: 'varchar' })
  user_pwd: string;
  @Column({ type: 'varchar' })
  user_email: string;
}
