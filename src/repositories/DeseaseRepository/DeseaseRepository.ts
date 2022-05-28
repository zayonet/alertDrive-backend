
import { Repository, getRepository, Like } from 'typeorm';
import { Desease } from '../../models/Desease';
import IDeseaseRepository from '../DeseaseRepository/ICountryRepository';
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


  public async findById(id: string): Promise<Desease | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searchDeseaseByName(desease_name: string): Promise<Desease[]> {
    return this.ormRepository.find({
      desease_name: Like(`%${desease_name
        }%`)
    });
  }

  public async create({ desease_name, desease_type, description, user_id, body_user_id
  }: ICreateDeseaseDTO): Promise<Desease> {

    const desease = this.ormRepository.create({
      desease_name, desease_type, description, user_id, body_user_id
    });

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