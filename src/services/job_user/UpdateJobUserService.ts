import AppError from '../../errors/AppError';
import IJob_UserRepository from '../../repositories/Job_User/IJob_UserRepository';
import Job_UserRepository from '../../repositories/Job_User/Job_UserRepository';
import Job_User from '../../models/Job_User';
import IUserRepository from '../../repositories/IUserRepository'


interface IRequest {
  id: string;
  occupation: string;
  start_work_time: string;
  end_work_time: string;
  period: string;
  company: string;
  user_id: string;
}

class UpdateJobUserService {
  private job_UserRepository: IJob_UserRepository;
  private userRepository: IUserRepository;

  constructor(job_UserRepository: IJob_UserRepository, userRepository: IUserRepository) {
    this.job_UserRepository = job_UserRepository;
    this.userRepository = userRepository;
  }

  public async execute({
    id,
    occupation,
    start_work_time,
    end_work_time,
    period,
    company,
    user_id
  }: IRequest): Promise<Job_User> {
    const job_User = await this.job_UserRepository.findById(id);

    if (!job_User) {
      throw new AppError('Emprego do utilizador não encontrado', 404);
    }

    const verifyUser = await this.userRepository.findById(user_id);

    if (!verifyUser) {
      throw new AppError('Id do utilizador não encontrado', 404);
    }

    job_User.occupation = occupation;
    job_User.start_work_time = start_work_time;
    job_User.end_work_time = end_work_time;
    job_User.period = period;
    job_User.company = company;
    job_User.user_id = verifyUser.id;

    await this.job_UserRepository.save(job_User);

    return job_User;
  }
}

export default UpdateJobUserService;