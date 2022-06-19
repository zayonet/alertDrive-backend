import AppError from '../../errors/AppError';
import IJob_UserRepository from '../../repositories/Job_User/IJob_UserRepository';
import Job_User from '../../models/Job_User';

class ShowJob_UserService {
  private job_userRepository: IJob_UserRepository;

  constructor(job_userRepository: IJob_UserRepository) {
    this.job_userRepository = job_userRepository;
  }

  public async execute(id: string): Promise<Job_User | undefined> {
    const job_user = await this.job_userRepository.findById(id);

    if (!job_user) {
      throw new AppError('Doença não encontrado', 404);
    }

    return job_user;
  }
}

export default ShowJob_UserService;