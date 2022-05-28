import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import User from './User';

@Entity('history_users')
export class History_User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  accident_before: string;

  @Column()
  is_taking_medicine_now: string;

  @Column()
  is_sick_now: string;

  @Column({
    type: "text", //To force the type
    default: null,
  })
  description: string;


  @Column()
  user_id: string;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}