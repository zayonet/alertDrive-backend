
import { Repository, getRepository, Like } from 'typeorm';
import Sensor from '../../models/Sensor';
import ISensorRepository from './ISensorRepository';
import ICreateSensorDTO from '../../dtos/ICreateSensorDTO';
import AppError from '../../errors/AppError';

class SensorRepository implements ISensorRepository {

  private ormRepository: Repository<Sensor>;

  constructor() {
    this.ormRepository = getRepository(Sensor);
  }
  searchSensorByName(accelerometerX: string): Promise<Sensor[]> {
    throw new Error('Method not implemented.');
  }

  public async findAll(): Promise<Sensor[]> {
    return this.ormRepository.find();
  }


  public async findById(id: string): Promise<Sensor | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searcUserByName(accelerometerX: string): Promise<Sensor[]> {
    return this.ormRepository.find({
      accelerometerX: Like(`%${accelerometerX
        }%`),
    });
  }

  public async findAllVehicleSensors(vehicle_id: string): Promise<Sensor[]> {
    return this.ormRepository.find({
      where: { vehicle_id },
    });
  }

  public async findAllUserSensors(user_id: string): Promise<Sensor[]> {
    return this.ormRepository.find({
      where: { user_id },
    });
  }

  public async create({
    accelerometerX,
    accelerometerY,
    accelerometerZ,
    gyroscopeX,
    gyroscopeY,
    gyroscopeZ,
    latitude,
    longitude,
    altitude,
    user_id,
    vehicle_id, }: ICreateSensorDTO): Promise<Sensor> {

    const sensor = this.ormRepository.create({
      accelerometerX,
      accelerometerY,
      accelerometerZ,
      gyroscopeX,
      gyroscopeY,
      gyroscopeZ,
      latitude,
      longitude,
      altitude,
      user_id,
      vehicle_id
    });

    await this.ormRepository.save(sensor);

    return sensor;
  }


  public async save(sensor: Sensor): Promise<Sensor> {
    return this.ormRepository.save(sensor);
  }

  public async delete(id: string): Promise<void> {
    const sensor = this.ormRepository.delete(id);
    if (await sensor) {
      throw new AppError('País excluido', 200);
    }
  }

}

export default SensorRepository;