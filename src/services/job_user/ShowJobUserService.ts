import AppError from '../../errors/AppError';
import IJob_UserRepository from '../../repositories/Job_User/IJob_UserRepository';
import Job_UserRepository from '../../repositories/Job_User/Job_UserRepository';
import Job_User from '../../models/Job_User';
import IUserRepository from '../../repositories/IUserRepository'

class ShowJobUserService {
  private job_userRepository: IJob_UserRepository;

  constructor(job_userRepository: IJob_UserRepository) {
    this.job_userRepository = job_userRepository;
  }

  public async execute(id: string): Promise<Job_User | undefined> {
    const body_user = await this.job_userRepository.findById(id);

    if (!body_user) {
      throw new AppError('Job do utilizador não encontrado', 404);
    }

    return body_user;
  }
}

export default ShowJobUserService;