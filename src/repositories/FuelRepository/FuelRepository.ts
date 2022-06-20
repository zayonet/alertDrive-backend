import { Repository, getRepository, Like } from 'typeorm';
import { Fuel } from '../../models/Fuel';
import IFuelRepository from '../FuelRepository/IFuelRepository';
import ICreateFuelDTO from '../../dtos/ICreateFuelDTO';
import AppError from '../../errors/AppError';
import Vehicle from '../../models/Vehicle';

class FuelRepository implements IFuelRepository {
  static findOneOrFail(id: any, arg1: { relations: string[]; }) {
    throw new Error('Method not implemented.');
  }

  private ormRepository: Repository<Fuel>;
  private ormRepositoryVehicle: Repository<Vehicle>;

  constructor() {
    this.ormRepositoryVehicle = getRepository(Vehicle);
    this.ormRepository = getRepository(Fuel);
  }

  public async findAll(): Promise<Fuel[]> {
    return this.ormRepository.find();
  }

  public async findByVehicleId(id: string): Promise<Vehicle | undefined> {
    return this.ormRepositoryVehicle.findOne({
      where: { id },
    });
  }

  public async findById(id: string): Promise<Fuel | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  findAllVehicleFuels(vehicle_id: string): Promise<Fuel[]> {
    return this.ormRepository.find({
      where: { vehicle_id },
    });
  }

  public async searcFuelByName(fuel: string): Promise<Fuel[]> {
    return this.ormRepository.find({
      fuel: Like(`%${fuel}%`),
    });
  }

  public async create({ fuel, vehicle_id }: ICreateFuelDTO): Promise<Fuel> {

    const checkUser = await this.ormRepository.findOne({
      where: { vehicle_id },
    });

    if (checkUser?.vehicle_id) {
      throw new AppError('Esta veiculo já foi utilizado! Tente outro', 422);
    }

    const save = this.ormRepository.create({ fuel, vehicle_id });
    /* const users = await this.ormRepositoryUser.findByIds(model.users, { relations: ['users'] });
    for (const user of users) {
      user.models.push(model);
    }
    this.ormRepositoryUser.save(users); */

    await this.ormRepository.save(save);

    return save;
  }

  public async save(fuel: Fuel): Promise<Fuel> {
    return this.ormRepository.save(fuel);
  }

  public async delete(id: string): Promise<void> {
    const fuel = this.ormRepository.delete(id);
    if (await fuel) {
      throw new AppError('Combustivel do veiculo excluido', 200);
    }
  }

}

export default FuelRepository;