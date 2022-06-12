import IVehicleRepository from '../../repositories/vehicleRepository/IVehicleRepository';
import Vehicle from '../../models/Vehicle';

class ListAllVehiclesOfUserService {
  private vehiclesRepository: IVehicleRepository;

  constructor(vehiclesRepository: IVehicleRepository) {
    this.vehiclesRepository = vehiclesRepository;
  }

  public async execute(user_id: string): Promise<Vehicle[]> {
    const vehicles = await this.vehiclesRepository.findAllUserVehicle(user_id);

    return vehicles;
  }
}

export default ListAllVehiclesOfUserService;