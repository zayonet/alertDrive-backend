import ISensorRepository from '../../repositories/SensorRepository/ISensorRepository';
import Sensors from '../../models/Sensor';

class ListAllSensorsOfVehicleService {
  private sensorsRepository: ISensorRepository;

  constructor(sensorsRepository: ISensorRepository) {
    this.sensorsRepository = sensorsRepository;
  }

  public async execute(vehicle_id: string): Promise<Sensors[]> {
    const sensors = await this.sensorsRepository.findAllVehicleSensors(vehicle_id);

    return sensors;
  }
}

export default ListAllSensorsOfVehicleService;