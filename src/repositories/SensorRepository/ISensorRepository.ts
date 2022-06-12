import Sensor from '../../models/Sensor';
import ICreateSensorDTO from '../../dtos/ICreateSensorDTO';

export default interface ISensorRepository {
  findAll(): Promise<Sensor[]>;
  findById(id: string): Promise<Sensor | undefined>;
  searchSensorByName(accelerometerX: string): Promise<Sensor[]>;
  findAllVehicleSensors(vehicle_id: string): Promise<Sensor[]>;
  findAllUserSensors(user_id: string): Promise<Sensor[]>;
  create(createSensorDTO: ICreateSensorDTO): Promise<Sensor>;
  save(sensor: Sensor): Promise<Sensor>;
  delete(id: string): Promise<void>;
}