import { Request, Response } from 'express';
import CreateBody_UserService from '../services/Body_User/CreateBody_UserService';
import Body_UserRepository from '../repositories/Body_UserRepository/Body_UserRepository';
import DeleteBody_UserService from '../services/Body_User/DeleteBody_UserService';
import logger from '../logs';
import ListAllBody_UserOfUserService from '../services/Body_User/ListAllBody_UserOfUserService';

class Body_UserController {

  public async index(request: Request, response: Response): Promise<Response> {
    const body_usersRepository = new Body_UserRepository();;

    const body_users = await body_usersRepository.findAll();

    return response.json(body_users);
  }

  public async findAllUserBody_User(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const body_usersRepository = new Body_UserRepository();
    const body_usersService = new ListAllBody_UserOfUserService(
      body_usersRepository,
    );

    const activities = await body_usersService.execute(user_id);

    return response.json(activities);
  }
  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const vehiclesRepository = new Body_UserRepository();
    const countriesService = new ShowVehicleService(vehiclesRepository);
  
    const countries = await countriesService.execute(id);
  
    return response.json(countries);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      heights,
      weigh,
      blood_type,
      body_pressure_min,
      body_pressure_max,
      glicemia,
      user_id } = request.body;

    const body_userRespository = new Body_UserRepository();
    const createBody_User = new CreateBody_UserService(body_userRespository);

    const body_user = await createBody_User.execute({
      heights,
      weigh,
      blood_type,
      body_pressure_min,
      body_pressure_max,
      glicemia,
      user_id
    });

    return response.json(body_user);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const body_userRepository = new Body_UserRepository();
    const destroybody_user = new DeleteBody_UserService(body_userRepository);

    await destroybody_user.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default Body_UserController;