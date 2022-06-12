import IModelRepository from '../../repositories/ModelRepository/IModelRepository';
import {Model} from '../../models/Model';

class ListAllModelOfVehicleService {
  private modelRepository: IModelRepository;

  constructor(modelRepository: IModelRepository) {
    this.modelRepository = modelRepository;
  }

  public async execute(vehicle_id: string): Promise<Model[]> {
    const model = await this.modelRepository.findAllVehicleModels(vehicle_id);

    return model;
  }
}

export default ListAllModelOfVehicleService;