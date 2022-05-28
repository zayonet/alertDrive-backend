import { Request, Response } from 'express';
import CreateHistoryUserService from '../services/historyUser/CreateHistoryUserService';
import HistoryUserRepository from '../repositories/HistoryUserRepository/HistoryUserRepository';
import DeleteHistoryUserService from '../services/historyUser/DeleteHistoryUserService';
import logger from '../logs';

class HistoryUserController {

  public async index(request: Request, response: Response): Promise<Response> {
    const historyUsersRepository = new HistoryUserRepository();

    const historyUsers = await historyUsersRepository.findAll();

    return response.json(historyUsers);
  }

  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const historyUsersRepository = new historyUserRepository();
    const historyUsersService = new ShowHistoryUserService(historyUsersRepository);
  
    const historyUsers = await historyUsersService.execute(id);
  
    return response.json(historyUsers);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      accident_before,
      is_taking_medicine_now,
      is_sick_now,
      user_id,
      description } = request.body;

    const historyUserRespository = new HistoryUserRepository();
    const createHistoryUser = new CreateHistoryUserService(historyUserRespository);

    const historyUser = await createHistoryUser.execute({
      accident_before,
      is_taking_medicine_now,
      is_sick_now,
      user_id,
      description
    });

    return response.json(historyUser);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const historyUserRepository = new HistoryUserRepository();
    const destroyHistoryUser = new DeleteHistoryUserService(historyUserRepository);

    await destroyHistoryUser.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default HistoryUserController;