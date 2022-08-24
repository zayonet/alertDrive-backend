import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import Automobile from './Automobile';
import Vehicle from './Vehicle';

@Entity('vehicleModels')
export class Model {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  model: string;

  @Column()
  vehicle_id: string;

  @ManyToOne(() => Vehicle, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  /* @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle; */
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Automobile;

  @CreateDateColumn()
  created_at: Date;


  @UpdateDateColumn()
  updated_at: Date;
}
