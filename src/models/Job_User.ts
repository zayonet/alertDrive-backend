import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne
} from 'typeorm';
import User from './User';

@Entity('job_users')
class Job_User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  occupation: string;

  @Column()
  start_work_time: string;

  @Column()
  end_work_time: string;

  @Column()
  period: string;

  @Column()
  company: string;

  @Column({
    unique: true,
  })
  user_id: string;

  @OneToOne(type => User, job_user => Job_User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Job_User;