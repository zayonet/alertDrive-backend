import { Fuel } from '../../models/Fuel';
import ICreateFuelDTO from '../../dtos/ICreateFuelDTO';

export default interface IModelRepository {
  findAll(): Promise<Fuel[]>;
  findById(id: string): Promise<Fuel | undefined>;
  searcFuelByName(fuel: string): Promise<Fuel[]>;
  findAllVehicleFuels(vehicle_id: string): Promise<Fuel[]>
  create(createFuelDTO: ICreateFuelDTO): Promise<Fuel>;
  save(fuel: Fuel): Promise<Fuel>;
  delete(id: string): Promise<void>;
}