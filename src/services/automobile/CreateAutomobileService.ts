
import { hash } from 'bcryptjs';
import IAutomobileRepository from '../../repositories/AutomobileRepository/IAutomobileRepository';
import AutomobileRepository from '../../repositories/AutomobileRepository/AutomobileRepository';
import Automobile from '../../models/Automobile';
import IFuelRepository from '../../repositories/FuelRepository/IFuelRepository';
import FuelRepository from '../../repositories/FuelRepository/FuelRepository';
import { Fuel } from '../../models/Fuel';

interface Request {
  brand: string;
  model: string;
  registration_number: string;
  registration_country: string;
  engine_capacity: string;
  year: string;
  fuel: string;
  horse_power: string;
  user_id: string;
}
class CreateAutomobileService {
  private automobileRepository: IAutomobileRepository;
  private fuelRepository: IFuelRepository;

  constructor(automobileRepository: AutomobileRepository) {
    this.automobileRepository = automobileRepository;
  }

  public async execute({
    brand,
    model,
    registration_number,
    registration_country,
    engine_capacity,
    year,
    fuel,
    horse_power, user_id }: Request): Promise<Automobile> {

    const automobile = await this.automobileRepository.create({
      brand,
      model,
      registration_number,
      registration_country,
      engine_capacity,
      year,
      fuel,
      horse_power,
      user_id
    });
    //let vehicle_id = vehicle.id;
    //const fuels = await this.fuelRepository.create({ fuel, vehicle_id });

    /* const vehicleRepository = new VehicleRepository();
    const vehiclesService = new ListAllVehiclesService(vehicleRepository);

    let getVehicleId = null;
    const vehicles = await vehiclesService.execute();
    vehicles.map(vehicle => {
      if (vehicle.id === vehicle_id)
        getVehicleId = vehicle.id;
    }) */
    //console.log(vehicle_id);

    return automobile;
  }
}

export default CreateAutomobileService;