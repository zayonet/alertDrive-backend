

import { hash } from 'bcryptjs';
import IFuelRepository from '../../repositories/FuelRepository/IFuelRepository';
import FuelRepository from '../../repositories/FuelRepository/FuelRepository';
import { Fuel } from '../../models/Fuel';
import VehicleRepository from '../../repositories/vehicleRepository/VehicleRepository';
import ListAllVehiclesService from '../../services/vehicle/ListAllVihiclesService';

interface Request {
  fuel: string;
  vehicle_id: string;
}

class CreateFuelService {
  private fuelRepository: IFuelRepository;

  constructor(fuelRepository: FuelRepository) {
    this.fuelRepository = fuelRepository;
  }

  public async execute({ fuel, vehicle_id, }: Request): Promise<Fuel> {
    /* const vehicleRepository = new VehicleRepository();
    const vehiclesService = new ListAllVehiclesService(vehicleRepository);

    let getVehicleId = null;
    const vehicles = await vehiclesService.execute();
    vehicles.map(vehicle => {
      if (vehicle.id === vehicle_id)
        getVehicleId = vehicle.id;
    })
    console.log(getVehicleId); */

    const combustivel = await this.fuelRepository.create({
      fuel,
      vehicle_id,
    });
    return combustivel;
  }
}

export default CreateFuelService;