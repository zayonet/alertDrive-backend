import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('car_db')
class Car {

  @PrimaryGeneratedColumn()
  id_trim: number

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  generation: string;

  @Column()
  year_from: string;

  @Column()
  year_to: string;

  @Column()
  series: string;

  @Column()
  trim: string;

  @Column()
  body_type: string;
  @Column()
  load_height_mm: string;
  @Column()
  number_of_seats: string;

  @Column()
  length_mm: string;

  @Column()
  width_mm: string;

  @Column()
  height_mm: string;

  @Column()
  wheelbase_mm: string;

  @Column()
  front_track_mm: string;

  @Column()
  rear_track_mm: string;

  @Column()
  curb_weight_kg: string;

  @Column()
  wheel_size_r14: string;
  @Column()
  ground_clearance_mm: string;
  @Column()
  trailer_load_with_brakes_kg: string;

  @Column()
  payload_kg: string;
  @Column()
  back_track_width_mm: string;

  @Column()
  front_track_width_mm: string;

  @Column()
  clearance_mm: string;

  @Column()
  full_weight_kg: string;

  @Column()
  front_rear_axle_load_kg: string;

  @Column()
  max_trunk_capacity_l: string;

  @Column()
  cargo_compartment_length_width_height_mm: string;
  @Column()
  cargo_volume_m3: string;
  @Column()
  minimum_trunk_capacity_l: string;

  @Column()
  maximum_torque_n_m: string;
  @Column()
  injection_type: string;



  @Column()
  overhead_camshaft: string;

  @Column()
  cylinder_layout: string;

  @Column()
  number_of_cylinders: string;

  @Column()
  compression_ratio: string;

  @Column()
  engine_type: string;

  @Column()
  valves_per_cylinder: string;
  @Column()
  boost_type: string;
  @Column()
  cylinder_bore_mm: string;

  @Column()
  stroke_cycle_mm: string;
  @Column()
  engine_placement: string;

  @Column()
  cylinder_bore_and_stroke_cycle_mm: string;

  @Column()
  turnover_of_maximum_torque_rpm: string;

  @Column()
  max_power_kw: string;

  @Column()
  presence_of_intercooler: string;

  @Column()
  capacity_cm3: string;
  @Column()
  engine_hp: string;
  @Column()
  engine_hp_rpm: string;

  @Column()
  drive_wheels: string;
  @Column()
  bore_stroke_ratio: string;

  @Column()
  number_of_gears: string;

  @Column()
  turning_circle_m: string;

  @Column()
  transmission: string;

  @Column()
  mixed_fuel_consumption_per_100_km_l: string;

  @Column()
  range_km: string;
  @Column()
  emission_standards: string;
  @Column()
  fuel_tank_capacity_l: string;

  @Column()
  acceleration_0_100_km_h_s: string;
  @Column()
  max_speed_km_per_h: string;

  @Column()
  city_fuel_per_100km_l: string;

  @Column()
  CO2_emissions_g_km: string;

  @Column()
  fuel_grade: string;

  @Column()
  highway_fuel_per_100km_l: string;

  @Column()
  back_suspension: string;
  @Column()
  rear_brakes: string;
  @Column()
  front_brakes: string;

  @Column()
  front_suspension: string;
  @Column()
  steering_type: string;
  @Column()
  car_class: string;
  @Column()
  country_of_origin: string;
  @Column()
  number_of_doors: string;
  @Column()
  safety_assessment: string;
  @Column()
  rating_name: string;
  @Column()
  battery_capacity_KW_per_h: string;
  @Column()
  electric_range_km: string;
  @Column()
  charging_time_h: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Car;