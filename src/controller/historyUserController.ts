import { Request, Response } from 'express';
import CreateHistoryUserService from '../services/historyUser/CreateHistoryUserService';
import HistoryUserRepository from '../repositories/HistoryUserRepository/HistoryUserRepository';
import DeleteHistoryUserService from '../services/historyUser/DeleteHistoryUserService';
import logger from '../logs';
import ListAllHistoryOfUserService from '../services/historyUser/ListAllHistoryOfUserService';
import UserRepository from '../repositories/UserRepository';
import UpdateHistory_UserService from '../services/historyUser/UpdateHistoryUserService';

class HistoryUserController {

  public async index(request: Request, response: Response): Promise<Response> {
    const historyUsersRepository = new HistoryUserRepository();

    const historyUsers = await historyUsersRepository.findAll();

    return response.json(historyUsers);
  }

  public async findAllUserHistory_User(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const brandsRepository = new HistoryUserRepository();
    const brandsService = new ListAllHistoryOfUserService(
      brandsRepository,
    );

    const activities = await brandsService.execute(user_id);

    return response.json(activities);
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


  public async updates(request: Request, response: Response): Promise<Response | undefined> {
    const { id } = request.params;
    try {
      const {
        accident_before,
        is_taking_medicine_now,
        is_sick_now,
        user_id,
        description } = request.body;
      console.log(request.body)
      logger.info(' accid:' + accident_before + ' sickness:' + is_sick_now + ' medicine:' + is_taking_medicine_now)
      const history_userRepository = new HistoryUserRepository();
      const userRepository = new UserRepository();
      const updateHistory = new UpdateHistory_UserService(history_userRepository, userRepository);

      const history = await updateHistory.execute({
        id,
        accident_before,
        is_taking_medicine_now,
        is_sick_now,
        description,
        user_id
      });
      return response.json(history);
    } catch (error) {
      logger.error(error)
    }
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