
import { Repository, getRepository, Like } from 'typeorm';
import { Desease } from '../../models/Desease';
import IDeseaseRepository from './IDeseaseRepository';
import ICreateDeseaseDTO from '../../dtos/ICreateDeseaseDTO';
import AppError from '../../errors/AppError';

class DeseaseRepository implements IDeseaseRepository {

  private ormRepository: Repository<Desease>;

  constructor() {
    this.ormRepository = getRepository(Desease);
  }

  public async findAll(): Promise<Desease[]> {
    return this.ormRepository.find();
  }


  /* public async findById(id: string): Promise<Desease | undefined> {
    return this.ormRepository.findOne(id, {
      relations: ['user'],
    });
  } */
  public async findById(id: string): Promise<Desease | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }
  /* public async findByIdBody(id: string): Promise<Desease | undefined> {
    return this.ormRepository.findOne(id, {
      relations: ['body_user'],
    });
  } */


  public async searchDeseaseByName(desease_name: string): Promise<Desease[]> {
    return this.ormRepository.find({
      desease_name: Like(`%${desease_name
        }%`)
    });
  }

  findAllUserDesease(user_id: string): Promise<Desease[]> {
    return this.ormRepository.find({
      where: { user_id },
    });
  }

  public async create({ desease_name, desease_type, description, user_id, body_user_id
  }: ICreateDeseaseDTO): Promise<Desease> {

    const desease = this.ormRepository.create({
      desease_name, desease_type, description, user_id, body_user_id
    });
    const checkUser = await this.ormRepository.findOne({
      where: { user_id },
    });

    if (checkUser?.user_id) {
      throw new AppError('Este utilizador já existe! Tente outro', 422);
    }

    await this.ormRepository.save(desease);

    return desease;
  }


  public async save(desease: Desease): Promise<Desease> {
    return this.ormRepository.save(desease);
  }

  public async delete(id: string): Promise<void> {
    const desease = this.ormRepository.delete(id);
    if (await desease) {
      throw new AppError('Doença excluido', 200);
    }
  }

}

export default DeseaseRepository;