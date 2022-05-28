import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import User from './User';

@Entity('body_users')
class Body_User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  heights: string;

  @Column()
  weigh: string;

  @Column({
    unique: true,
  })
  blood_type: string;

  @Column()
  body_pressure_min: string;

  @Column()
  body_pressure_max: string;

  @Column()
  glicemia: string;

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

export default Body_User;