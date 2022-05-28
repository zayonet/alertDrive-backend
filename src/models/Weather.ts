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
import Vehicle from './Vehicle';

@Entity('weathers')
class Weather {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
  })
  road_type: string;

  @Column({
    nullable: true,
  })
  current_speed: string;

  @Column({
    nullable: true,
  })
  free_flow_speed: string;

  @Column({
    nullable: true,
  })
  data_confidence: string;

  @Column({
    type: "text", //To force the type
    default: null,
  })
  weather_description: string;

  @Column()
  temperature: string;

  @Column()
  pressure: string;

  @Column()
  humidity: string;

  @Column()
  visibility: string;

  @Column({
    nullable: true,
  })
  wind_speed: string;

  @Column({
    nullable: true,
  })
  wind_direction: string;

  @Column({
    nullable: true,
  })
  cloudiness: string;

  @Column({
    nullable: true,
  })
  user_id: string;

  @ManyToOne(() => User, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  vehicle_id: string;

  @ManyToOne(() => Vehicle, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle;

  @CreateDateColumn()
  created_at: Date;


  @UpdateDateColumn()
  updated_at: Date;

}

export default Weather;