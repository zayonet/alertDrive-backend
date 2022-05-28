
import { hash } from 'bcryptjs';
import IJob_UserRepository from '../../repositories/Job_User/IJob_UserRepository';
import Job_UserRepository from '../../repositories/Job_User/Job_UserRepository';
import Job_User from '../../models/Job_User';

interface Request {
  occupation: string;
  start_work_time: string;
  end_work_time: string;
  period: string;
  company: string;
  user_id: string;
}

class CreateJob_UserService {
  private job_userRepository: IJob_UserRepository;

  constructor(job_userRepository: Job_UserRepository) {
    this.job_userRepository = job_userRepository;
  }

  public async execute({ occupation,
    start_work_time,
    end_work_time,
    period,
    company,
    user_id }: Request): Promise<Job_User> {


    const job_user = await this.job_userRepository.create({
      occupation,
      start_work_time,
      end_work_time,
      period,
      company,
      user_id
    });
    return job_user;
  }
}

export default CreateJob_UserService;