import Job_User from '../../models/Job_User';
import ICreateJob_UserDTO from '../../dtos/ICreateJob_UserDTO';

export default interface IJob_UserRepository {
  findAll(): Promise<Job_User[]>;
  findById(id: string): Promise<Job_User | undefined>;
  findAllUserJob_User(user_id: string): Promise<Job_User[]>;
  searchJob_UserByCompany(job_user_occupation: string, Job_User_weigh: string, Job_User_blood: string): Promise<Job_User[]>;
  create(createJob_UserDTO: ICreateJob_UserDTO): Promise<Job_User>;
  save(job_user: Job_User): Promise<Job_User>;
  delete(id: string): Promise<void>;
}