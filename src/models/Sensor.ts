import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import User from './User';
import Vehicle from './Vehicle';

@Entity('sensores')
class Sensores {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  accelerometerX: string;

  @Column()
  accelerometerY: string;

  @Column()
  accelerometerZ: string;

  @Column()
  gyroscopeX: string;

  @Column()
  gyroscopeY: string;

  @Column()
  gyroscopeZ: string;

  @Column({
    nullable: true,
  })
  latitude: string;
  @Column({
    nullable: true,
  })
  longitude: string;
  @Column({
    nullable: true,
  })
  altitude: string;

  @Column()
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

export default Sensores;