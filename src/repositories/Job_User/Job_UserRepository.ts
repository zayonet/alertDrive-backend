
import { Repository, getRepository, Like } from 'typeorm';
import Job_User from '../../models/Job_User';
import IJob_UserRepository from './IJob_UserRepository';
import ICreateJob_UserDTO from '../../dtos/ICreateJob_UserDTO';
import AppError from '../../errors/AppError';

class Job_UserRepository implements IJob_UserRepository {

  private ormRepository: Repository<Job_User>;

  constructor() {
    this.ormRepository = getRepository(Job_User);
  }

  public async findAll(): Promise<Job_User[]> {
    return this.ormRepository.find();
  }


  public async findById(id: string): Promise<Job_User | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }
  public async findAllUserJob_User(user_id: string): Promise<Job_User[]> {
    return this.ormRepository.find({
      where: { user_id }
    });
  }

  public async searchJob_UserByCompany(job_user_occupation: string): Promise<Job_User[]> {
    return this.ormRepository.find({
      occupation: Like(`%${job_user_occupation
        }%`)
    });
  }

  public async create({ occupation,
    start_work_time,
    end_work_time,
    period,
    company,
    user_id }: ICreateJob_UserDTO): Promise<Job_User> {

    const checkUser = await this.ormRepository.findOne({
      where: { user_id },
    });

    if (checkUser?.user_id) {
      throw new AppError('Você já registou a informação profissional! Delete ou atualize', 422);
    }

    const job_User = this.ormRepository.create({
      occupation,
      start_work_time,
      end_work_time,
      period,
      company,
      user_id
    });

    await this.ormRepository.save(job_User);

    return job_User;
  }


  public async save(job_User: Job_User): Promise<Job_User> {
    return this.ormRepository.save(job_User);
  }

  public async delete(id: string): Promise<void> {
    const job_user = this.ormRepository.delete(id);
    if (await job_user) {
      throw new AppError('Informações profissionais do utilizador excluido', 200);
    }
  }

}

export default Job_UserRepository;