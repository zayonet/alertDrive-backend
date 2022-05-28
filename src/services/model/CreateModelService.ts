

import { hash } from 'bcryptjs';
import IModelRepository from '../../repositories/ModelRepository/IModelRepository';
import ModelRepository from '../../repositories/ModelRepository/ModelRepository';
import { Model } from './../../models/Model';

interface Request {
  model: string;
  vehicle_id: string;
}

class CreateModelService {
  private modelRepository: IModelRepository;

  constructor(modelRepository: ModelRepository) {
    this.modelRepository = modelRepository;
  }

  public async execute({ model, vehicle_id, }: Request): Promise<Model> {


    const modelo = await this.modelRepository.create({
      model,
      vehicle_id,
    });
    return modelo;
  }
}

export default CreateModelService;