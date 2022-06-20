
import { Repository, getRepository, Like } from 'typeorm';
import { History_User } from '../../models/History_User';
import IHistory_UserRepository from './IHistoryUserRepository';
import ICreateHistory_UserDTO from '../../dtos/ICreateHistory_UserDTO';
import AppError from '../../errors/AppError';

class History_UserRepository implements IHistory_UserRepository {

  private ormRepository: Repository<History_User>;

  constructor() {
    this.ormRepository = getRepository(History_User);
  }

  public async findAll(): Promise<History_User[]> {
    return this.ormRepository.find();
  }


  public async findById(id: string): Promise<History_User | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searchHistory_UserByName(accident_before: string): Promise<History_User[]> {
    return this.ormRepository.find({
      accident_before: Like(`%${accident_before}%`)
    });
  }

  findAllUserHistory_User(user_id: string): Promise<History_User[]> {
    return this.ormRepository.find({
      where: { user_id },
    });
  }

  
  public async create({ accident_before, is_taking_medicine_now, is_sick_now, user_id, description
  }: ICreateHistory_UserDTO): Promise<History_User> {
    const checkUser = await this.ormRepository.findOne({
      where: { user_id },
    });

    if (checkUser?.user_id) {
      throw new AppError('Id do Utilizador já foi utilizado! Tente outro', 422);
    }

    const history = this.ormRepository.create({
      accident_before, is_taking_medicine_now, is_sick_now, user_id, description
    });

    await this.ormRepository.save(history);

    return history;
  }


  public async save(history: History_User): Promise<History_User> {
    return this.ormRepository.save(history);
  }

  public async delete(id: string): Promise<void> {
    const history = this.ormRepository.delete(id);
    if (await history) {
      throw new AppError('historia excluido', 200);
    }
  }

}

export default History_UserRepository;