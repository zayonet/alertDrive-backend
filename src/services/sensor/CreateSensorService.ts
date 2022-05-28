
import { hash } from 'bcryptjs';
import ISensorRepository from '../../repositories/SensorRepository/ISensorRepository';
import SensorRepository from '../../repositories/SensorRepository/SensorRepository';
import Sensor from '../../models/Sensor';

interface Request {
  accelerometerX: string;
  accelerometerY: string;
  accelerometerZ: string;
  gyroscopeX: string;
  gyroscopeY: string;
  gyroscopeZ: string;
  latitude: string;
  longitude: string;
  altitude: string;
  user_id: string;
  vehicle_id: string;
}

class CreateSensorService {
  private sensorRepository: ISensorRepository;

  constructor(sensorRepository: SensorRepository) {
    this.sensorRepository = sensorRepository;
  }

  public async execute({
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
    vehicle_id }: Request): Promise<Sensor> {


    const sensor = await this.sensorRepository.create({
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
      vehicle_id,
    });
    return sensor;
  }
}

export default CreateSensorService;