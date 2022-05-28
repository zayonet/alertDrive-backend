import { Repository, getRepository, Like } from 'typeorm';
import Vehicle from '../../models/Vehicle';
import IVehicleRepository from '../../repositories/vehicleRepository/IVehicleRepository';
import ICreateVehicleDTO from '../../dtos/ICreateVehicleDTO';
import AppError from '../../errors/AppError';
import User from '../../models/User';
import { Model } from '../../models/Model';

class VehicleRepository implements IVehicleRepository {

  private ormRepository: Repository<Vehicle>;
  private ormRepositoryUser: Repository<User>;
  private ormRepositoryModel: Repository<Model>;

  constructor() {
    this.ormRepositoryUser = getRepository(User);
    this.ormRepository = getRepository(Vehicle);
    this.ormRepositoryModel = getRepository(Model);
  }

  public async findAll(): Promise<Vehicle[]> {
    return this.ormRepository.find();
  }


  public async findById(id: string): Promise<Vehicle | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searcVehicleByName(brand: string): Promise<Vehicle[]> {
    return this.ormRepository.find({
      brand: Like(`%${brand}%`),
    });
  }

  public async create({ brand, model, registration_number, registration_country, engine_cc, year, fuel, horse_power, users }: ICreateVehicleDTO): Promise<Vehicle> {

    const checkUser = await this.ormRepository.findOne({
      where: { registration_number },
    });

    if (checkUser?.registration_number) {
      throw new AppError('Esta matricula já foi utilizado! Tente outro', 422);
    }

    const vehicle = this.ormRepository.create({
      brand,
      model,
      registration_number,
      registration_country,
      engine_cc,
      year,
      fuel,
      horse_power,
      users
    });
    //this.ormRepositoryModel.create({ model, relations: ['vehicle'] });
    /* const users = await this.ormRepositoryUser.findByIds(vehicle.users, { relations: ['users'] });
    for (const user of users) {
      user.vehicles.push(vehicle);
    }
    this.ormRepositoryUser.save(users); */

    await this.ormRepository.save(vehicle);

    return vehicle;
  }

  public async save(vehicle: Vehicle): Promise<Vehicle> {
    return this.ormRepository.save(vehicle);
  }

  public async delete(id: string): Promise<void> {
    const vehicle = this.ormRepository.delete(id);
    if (await vehicle) {
      throw new AppError('Carro excluido', 200);
    }
  }

}

export default VehicleRepository;