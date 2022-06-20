import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  countrycode: string;

  @Column()
  country_name: string;

  @Column()
  phoneCode: number;
}