import { Request, Response } from 'express';
import CreateJob_UserService from '../services/job_user/CreateJob_UserService';
import Job_UserRepository from '../repositories/Job_User/Job_UserRepository';
import DeleteJob_UserService from '../services/job_user/DeleteJob_UserService';
import logger from '../logs';

class Job_UserController {

  public async index(request: Request, response: Response): Promise<Response> {
    const job_usersRepository = new Job_UserRepository();;

    const job_users = await job_usersRepository.findAll();

    return response.json(job_users);
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const job_usersRepository = new Job_UserRepository();

    const job_users = await job_usersRepository.searchJob_UserByCompany(name?.toString() || '');

    return response.json(job_users);
  }

  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const vehiclesRepository = new Job_UserRepository();
    const countriesService = new ShowVehicleService(vehiclesRepository);
  
    const countries = await countriesService.execute(id);
  
    return response.json(countries);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { occupation,
      start_work_time,
      end_work_time,
      period,
      company,
      user_id } = request.body;

    const job_userRespository = new Job_UserRepository();
    const createJob_User = new CreateJob_UserService(job_userRespository);

    const job_user = await createJob_User.execute({
      occupation,
      start_work_time,
      end_work_time,
      period,
      company,
      user_id
    });

    return response.json(job_user);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const job_userRepository = new Job_UserRepository();
    const destroyjob_user = new DeleteJob_UserService(job_userRepository);

    await destroyjob_user.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default Job_UserController;