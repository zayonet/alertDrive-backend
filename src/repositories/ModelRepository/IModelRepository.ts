import { Model } from '../../models/Model';
import ICreateModelDTO from '../../dtos/ICreateModelDTO';

export default interface IModelRepository {
  findAll(): Promise<Model[]>;
  findById(id: string): Promise<Model | undefined>;
  searcModelByName(model: string): Promise<Model[]>;
  findAllVehicleModels(vehicle_id: string): Promise<Model[]>
  create(createModelDTO: ICreateModelDTO): Promise<Model>;
  save(model: Model): Promise<Model>;
  delete(id: string): Promise<void>;
}