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
import Body_User from './Body_User';

@Entity('deseases')
export class Desease {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  desease_name: string;

  @Column()
  desease_type: string;

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

  @Column()
  body_user_id: string;

  @ManyToOne(() => Body_User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'body_user_id' })
  body_user: Body_User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}