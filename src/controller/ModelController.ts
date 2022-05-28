import { Request, Response } from 'express';
import CreateModelService from '../services/model/CreateModelService';
import ModelRepository from '../repositories/ModelRepository/ModelRepository';
import DeleteModelService from '../services/model/DeleteModelService';
import logger from '../logs';

class ModelController {

  public async index(request: Request, response: Response): Promise<Response> {
    const modelsRepository = new ModelRepository();

    const models = await modelsRepository.findAll();

    return response.json(models);
  }

  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const modelsRepository = new ModelRepository();
    const modelsService = new ShowModelService(modelsRepository);
  
    const models = await modelsService.execute(id);
  
    return response.json(models);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { model, vehicle_id } = request.body;

    const modelRespository = new ModelRepository();
    const createModel = new CreateModelService(modelRespository);

    const modelo = await createModel.execute({ model, vehicle_id });

    return response.json(modelo);
  }


  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const modelRepository = new ModelRepository();

    const models = await modelRepository.searcModelByName(name?.toString() || '');

    return response.json(models);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const modelRepository = new ModelRepository();
    const destroyModel = new DeleteModelService(modelRepository);

    await destroyModel.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default ModelController;