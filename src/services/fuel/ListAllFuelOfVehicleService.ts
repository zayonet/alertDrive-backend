import IFuelRepository from '../../repositories/FuelRepository/IFuelRepository';
import {Fuel} from '../../models/Fuel';

class ListAllFuelOfVehicleService {
  private fuelRepository: IFuelRepository;

  constructor(fuelRepository: IFuelRepository) {
    this.fuelRepository = fuelRepository;
  }

  public async execute(vehicle_id: string): Promise<Fuel[]> {
    const fuel = await this.fuelRepository.findAllVehicleFuels(vehicle_id);

    return fuel;
  }
}

export default ListAllFuelOfVehicleService;