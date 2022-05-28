import { Repository, getRepository, Like } from 'typeorm';
import { Model } from '../../models/Model';
import IModelRepository from '../ModelRepository/IModelRepository';
import ICreateModelDTO from '../../dtos/ICreateModelDTO';
import AppError from '../../errors/AppError';
import Vehicle from '../../models/Vehicle';

class ModelRepository implements IModelRepository {
  static findOneOrFail(id: any, arg1: { relations: string[]; }) {
    throw new Error('Method not implemented.');
  }

  private ormRepository: Repository<Model>;
  private ormRepositoryVehicle: Repository<Vehicle>;

  constructor() {
    this.ormRepositoryVehicle = getRepository(Vehicle);
    this.ormRepository = getRepository(Model);
  }

  public async findAll(): Promise<Model[]> {
    return this.ormRepository.find();
  }

  public async findByVehicleId(id: string): Promise<Vehicle | undefined> {
    return this.ormRepositoryVehicle.findOne({
      where: { id },
    });
  }

  public async findById(id: string): Promise<Model | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searcModelByName(model: string): Promise<Model[]> {
    return this.ormRepository.find({
      model: Like(`%${model}%`),
    });
  }

  public async create({ model, vehicle_id }: ICreateModelDTO): Promise<Model> {

    const checkUser = await this.ormRepository.findOne({
      where: { vehicle_id },
    });

    if (checkUser?.vehicle_id) {
      throw new AppError('Esta matricula já foi utilizado! Tente outro', 422);
    }

    const save = this.ormRepository.create({ model, vehicle_id });
    /* const users = await this.ormRepositoryUser.findByIds(model.users, { relations: ['users'] });
    for (const user of users) {
      user.models.push(model);
    }
    this.ormRepositoryUser.save(users); */

    await this.ormRepository.save(save);

    return save;
  }

  public async save(model: Model): Promise<Model> {
    return this.ormRepository.save(model);
  }

  public async delete(id: string): Promise<void> {
    const model = this.ormRepository.delete(id);
    if (await model) {
      throw new AppError('Modelo do veiculo excluido', 200);
    }
  }

}

export default ModelRepository;