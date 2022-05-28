import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  ManyToMany,
} from 'typeorm';
import { Country } from './Country';
import Job_User from './Job_User';
import Vehicle from './Vehicle';

@Entity('users')
class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  nif: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    default: true,
  })
  active: boolean;

  @Column()
  birthday: string;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column({
    nullable: true,
  })
  photo: string;

  @Column({
    nullable: true,
  })
  street: string;

  @Column({
    nullable: true,
  })
  house_number: string;

  @Column({
    nullable: true,
  })
  post_code: string;

  @Column({
    nullable: true,
  })
  city: string;

  @Column()
  country_id: string;

  @ManyToOne(() => Country, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToOne(type => Job_User, user => User) // specify inverse side as a second parameter
  job_user: Job_User

  @Column({
    type: "text", //To force the type
    default: null,
  })
  aboutme: string;

  @ManyToMany((type) => Vehicle, (vehicle) => vehicle.users)
  vehicles: Vehicle[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;