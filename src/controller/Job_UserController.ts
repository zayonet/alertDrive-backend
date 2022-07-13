import { Request, Response } from 'express';
import CreateJob_UserService from '../services/job_user/CreateJob_UserService';
import Job_UserRepository from '../repositories/Job_User/Job_UserRepository';
import DeleteJob_UserService from '../services/job_user/DeleteJob_UserService';
import logger from '../logs';
import ListAllJob_UserOfUserService from '../services/job_user/ListAllJobOfUserService';
import UserRepository from '../repositories/UserRepository';
import UpdateJobUserService from '../services/job_user/UpdateJobUserService';
import ShowJobUserService from '../services/job_user/ShowJobUserService';

class Job_UserController {

  public async index(request: Request, response: Response): Promise<Response> {
    const job_usersRepository = new Job_UserRepository();;

    const job_users = await job_usersRepository.findAll();

    return response.json(job_users);
  }

  public async findAllUserJob_User(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const job_UserRepository = new Job_UserRepository();
    const job_UserService = new ListAllJob_UserOfUserService(
      job_UserRepository,
    );

    const job_User = await job_UserService.execute(user_id);

    return response.json(job_User);
  }


  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const job_usersRepository = new Job_UserRepository();

    const job_users = await job_usersRepository.searchJob_UserByCompany(name?.toString() || '');

    return response.json(job_users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const jobsRepository = new Job_UserRepository();
    const jobsService = new ShowJobUserService(jobsRepository);

    const jobs = await jobsService.execute(id);

    return response.json(jobs);
  }

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

  public async updates(request: Request, response: Response): Promise<Response | undefined> {
    const { id } = request.params;
    try {
      const {
        occupation,
        start_work_time,
        end_work_time,
        period,
        company,
        user_id } = request.body;

      logger.info('end_work_time:' + end_work_time + ' start_work_time:' + start_work_time + ' occupation:' + occupation)
      const history_userRepository = new Job_UserRepository();
      const userRepository = new UserRepository();
      const updateHistory = new UpdateJobUserService(history_userRepository, userRepository);

      const history = await updateHistory.execute({
        id,
        occupation,
        start_work_time,
        end_work_time,
        period,
        company,
        user_id
      });
      return response.json(history);
    } catch (error) {
      logger.error(error)
    }
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