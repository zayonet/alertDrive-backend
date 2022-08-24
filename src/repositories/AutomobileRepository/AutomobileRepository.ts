import { Repository, getRepository, Like } from 'typeorm';
import Automobile from '../../models/Automobile';
import IAutomobileRepository from '../../repositories/AutomobileRepository/IAutomobileRepository';
import ICreateAutomobileDTO from '../../dtos/ICreateAutomobileDTO';
import AppError from '../../errors/AppError';
import User from '../../models/User';
import { Model } from '../../models/Model';

class AutomobileRepository implements IAutomobileRepository {

  private ormRepository: Repository<Automobile>;
  private ormRepositoryUser: Repository<User>;
  private ormRepositoryModel: Repository<Model>;

  constructor() {
    this.ormRepositoryUser = getRepository(User);
    this.ormRepository = getRepository(Automobile);
    this.ormRepositoryModel = getRepository(Model);
  }

  public async findAll(): Promise<Automobile[]> {
    return this.ormRepository.find();
  }


  public async findById(id: string): Promise<Automobile | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searcAutomobileByName(brand: string): Promise<Automobile[]> {
    return this.ormRepository.find({
      brand: Like(`%${brand}%`),
    });
  }
  public async findAllUserAutomobile(user_id: string): Promise<Automobile[]> {
    return this.ormRepository.find({
      where: { user_id },
    });
  }

  public async create({ brand, model, registration_number, registration_country, engine_capacity, year, fuel, horse_power, user_id }: ICreateAutomobileDTO): Promise<Automobile> {

    /* const checkUser = await this.ormRepository.findOne({
      where: { registration_number },
    });

    if (checkUser?.registration_number) {
      throw new AppError('Esta matricula já foi utilizado! Tente outro', 422);
    } */

    const automobile = this.ormRepository.create({
      brand,
      model,
      registration_number,
      registration_country,
      engine_capacity,
      year,
      fuel,
      horse_power,
      user_id
    });
    //this.ormRepositoryModel.create({ model, relations: ['automobile'] });
    /* const users = await this.ormRepositoryUser.findByIds(automobile.users, { relations: ['users'] });
    for (const user of users) {
      user.automobiles.push(automobile);
    }
    this.ormRepositoryUser.save(users); */

    await this.ormRepository.save(automobile);

    return automobile;
  }

  public async save(automobile: Automobile): Promise<Automobile> {
    return this.ormRepository.save(automobile);
  }

  public async delete(id: string): Promise<void> {
    const automobile = this.ormRepository.delete(id);
    if (await automobile) {
      throw new AppError('Carro excluido', 200);
    }
  }

}

export default AutomobileRepository;