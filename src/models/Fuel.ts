import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import Vehicle from './Vehicle';

@Entity('fuels')
export class Fuel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fuel: string;

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
