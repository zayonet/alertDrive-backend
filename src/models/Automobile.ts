import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import User from './User';

@Entity('automobiles')
class Automobile {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column({
    unique: true,
  })
  registration_number: string;

  @Column()
  registration_country: string;

  @Column({
    nullable: true,
  })
  engine_capacity: string;

  @Column()
  year: string;

  @Column()
  fuel: string;

  @Column({
    nullable: true,
  })
  horse_power: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  /* @ManyToMany((type) => User, (user) => user.vehicles, {
      cascade: true,
      eager: true,
  })
  @JoinTable()
  users: User[] */


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Automobile;