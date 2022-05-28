import IVehicleRepository from '../../repositories/vehicleRepository/IVehicleRepository';
import Vehicle from '../../models/Vehicle';

class ListAllVehicleOfUserService {
  private vehiclesRepository: IVehicleRepository;

  constructor(vehiclesRepository: IVehicleRepository) {
    this.vehiclesRepository = vehiclesRepository;
  }

  public async execute(): Promise<Vehicle[]> {
    const vehicles = await this.vehiclesRepository.findAll();

    return vehicles;
  }
}

export default ListAllVehicleOfUserService;