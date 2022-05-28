import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany
} from 'typeorm';
import User from './User';

@Entity('vehicles')
class Vehicle {

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
  engine_cc: string;

  @Column()
  year: string;

  @Column()
  fuel: string;

  @Column({
    nullable: true,
  })
  horse_power: string;

  @ManyToMany((type) => User, (user) => user.vehicles, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  users: User[]


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Vehicle;