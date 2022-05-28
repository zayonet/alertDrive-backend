import { Request, Response } from 'express';
import CreateDeseaseService from '../services/desease/CreateDeseaseService';
import DeseaseRepository from '../repositories/DeseaseRepository/DeseaseRepository';
import DeleteDeseaseService from '../services/desease/DeleteDeseaseService';
import logger from '../logs';

class DeseaseController {

  public async index(request: Request, response: Response): Promise<Response> {
    const deseasesRepository = new DeseaseRepository();

    const deseases = await deseasesRepository.findAll();

    return response.json(deseases);
  }

  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deseasesRepository = new DeseaseRepository();
    const deseasesService = new ShowDeseaseService(deseasesRepository);
  
    const deseases = await deseasesService.execute(id);
  
    return response.json(deseases);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      desease_name,
      desease_type,
      description,
      user_id,
      body_user_id } = request.body;

    const deseaseRespository = new DeseaseRepository();
    const createDesease = new CreateDeseaseService(deseaseRespository);

    const desease = await createDesease.execute({
      desease_name,
      desease_type,
      description,
      user_id,
      body_user_id
    });

    return response.json(desease);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deseaseRepository = new DeseaseRepository();
    const destroyDesease = new DeleteDeseaseService(deseaseRepository);

    await destroyDesease.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default DeseaseController;