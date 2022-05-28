
import { hash } from 'bcryptjs';
import IVehicleRepository from '../../repositories/vehicleRepository/IVehicleRepository';
import VehicleRepository from '../../repositories/vehicleRepository/VehicleRepository';
import Vehicle from '../../models/Vehicle';
import IFuelRepository from '../../repositories/FuelRepository/IFuelRepository';
import FuelRepository from '../../repositories/FuelRepository/FuelRepository';
import { Fuel } from '../../models/Fuel';

interface Request {
  brand: string;
  model: string;
  registration_number: string;
  registration_country: string;
  engine_cc: string;
  year: string;
  fuel: string;
  horse_power: string;
  users: string;
}
interface Request { fuel: string; vehicle_id: string; }
class CreateVehicleService {
  private vehicleRepository: IVehicleRepository;
  private fuelRepository: IFuelRepository;

  constructor(vehicleRepository: VehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  public async execute({
    brand,
    model,
    registration_number,
    registration_country,
    engine_cc,
    year,
    fuel,
    horse_power, users }: Request): Promise<Vehicle> {

    const vehicle = await this.vehicleRepository.create({
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

    return vehicle;
  }
}

export default CreateVehicleService;