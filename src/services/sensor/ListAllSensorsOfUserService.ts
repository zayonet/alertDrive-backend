import ISensorRepository from '../../repositories/SensorRepository/ISensorRepository';
import Sensors from '../../models/Sensor';

class ListAllSensorsOfUserService {
  private sensorsRepository: ISensorRepository;

  constructor(sensorsRepository: ISensorRepository) {
    this.sensorsRepository = sensorsRepository;
  }
  
  public async execute(user_id: string): Promise<Sensors[]> {
    const sensors = await this.sensorsRepository.findAllUserSensors(user_id);

    return sensors;
  }
}

export default ListAllSensorsOfUserService;