import Vehicle from '../../models/Vehicle';
import ICreateVehicleDTO from '../../dtos/ICreateVehicleDTO';

export default interface IVehicleRepository {
  findAll(): Promise<Vehicle[]>;
  findById(id: string): Promise<Vehicle | undefined>;
  searcVehicleByName(name: string): Promise<Vehicle[]>;
  findAllUserVehicle(user_id: string): Promise<Vehicle[]>;
  create(createVehicleDTO: ICreateVehicleDTO): Promise<Vehicle>;
  save(vehicle: Vehicle): Promise<Vehicle>;
  delete(id: string): Promise<void>;
}