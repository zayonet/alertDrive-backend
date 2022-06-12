import IJob_UserRepository from '../../repositories/Job_User/IJob_UserRepository';
import Job_User from '../../models/Job_User';

class ListAllJob_UserOfUserService {
  private job_UserRepository: IJob_UserRepository;

  constructor(job_UserRepository: IJob_UserRepository) {
    this.job_UserRepository = job_UserRepository;
  }

  public async execute(user_id: string): Promise<Job_User[]> {
    const job_User = await this.job_UserRepository.findAllUserJob_User(user_id);

    return job_User;
  }
}

export default ListAllJob_UserOfUserService;