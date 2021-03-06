import { Request, Response } from 'express';
import CreateDeseaseService from '../services/desease/CreateDeseaseService';
import DeseaseRepository from '../repositories/DeseaseRepository/DeseaseRepository';
import DeleteDeseaseService from '../services/desease/DeleteDeseaseService';
import logger from '../logs';
import ListAllDeseaseOfUserService from '../services/desease/ListAllDeseaseOfUserService';
import UserRepository from '../repositories/UserRepository';
import UpdateDeseaseService from '../services/desease/UpdateDeseaseService';
import Body_UserRepository from '../repositories/Body_UserRepository/Body_UserRepository';
import ShowDeseaseService from '../services/desease/ShowDeseaseService';

class DeseaseController {

  public async index(request: Request, response: Response): Promise<Response> {
    const deseasesRepository = new DeseaseRepository();

    const deseases = await deseasesRepository.findAll();

    return response.json(deseases);
  }

  public async findAllUserDesease(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const deseasesRepository = new DeseaseRepository();
    const deseasesService = new ListAllDeseaseOfUserService(
      deseasesRepository,
    );

    const deseases = await deseasesService.execute(user_id);

    return response.json(deseases);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deseasesRepository = new DeseaseRepository();
    const deseasesService = new ShowDeseaseService(deseasesRepository);

    const deseases = await deseasesService.execute(id);

    return response.json(deseases);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      desease_name,
      desease_type,
      description,
      user_id,
      body_user_id } = request.body;

    const deseaseRespository = new DeseaseRepository();
    const userRepository = new UserRepository();
    const body_UserRepository = new Body_UserRepository();
    const createDesease = new CreateDeseaseService(deseaseRespository, userRepository, body_UserRepository);

    const desease = await createDesease.execute({
      desease_name,
      desease_type,
      description,
      user_id,
      body_user_id
    });

    return response.json(desease);
  }
  public async updates(request: Request, response: Response): Promise<Response | undefined> {
    const { id } = request.params;
    try {
      const {
        desease_name,
        desease_type,
        description,
        user_id,
        body_user_id } = request.body;

      logger.info(' desease_name:' + desease_name + ' desease_type:' + desease_type + ' description:' + description)
      const history_userRepository = new DeseaseRepository();
      const userRepository = new UserRepository();
      const body_UserRepository = new Body_UserRepository();
      const updateHistory = new UpdateDeseaseService(history_userRepository, userRepository, body_UserRepository);

      const history = await updateHistory.execute({
        id,
        desease_name,
        desease_type,
        description,
        body_user_id,
        user_id
      });
      return response.json(history);
    } catch (error) {
      logger.error(error)
    }
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