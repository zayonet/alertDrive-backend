import AppError from '../../errors/AppError';
import IVehicleRepository from '../../repositories/vehicleRepository/IVehicleRepository';
import Vehicle from '../../models/Vehicle';
import IUserRepository from '../../repositories/IUserRepository';

interface IRequest {
  id: string;
  brand: string;
  model: string;
  registration_number: string;
  registration_country: string;
  year: string;
  fuel: string;
  horse_power: string;
  engine_cc: string;
}

class UpdateVehicleService {
  private vehicleRepository: IVehicleRepository;
  private userRepository: IUserRepository;

  constructor(vehicleRepository: IVehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  public async execute({ id, brand, model, registration_number, registration_country, year, fuel, horse_power, engine_cc
  }: IRequest): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      throw new AppError('Veículo não encontrado', 404);
    }

    /* const verifyUser = await this.userRepository.findById(user_id);

    if (!verifyUser) {
      throw new AppError('Id do utilizador não encontrado', 404);
    } */


    vehicle.brand = brand;
    vehicle.model = model
    vehicle.registration_number = registration_number;
    vehicle.registration_country = registration_country;
    vehicle.year = year;
    vehicle.fuel = fuel;
    vehicle.horse_power = horse_power;
    vehicle.engine_cc = engine_cc;

    await this.vehicleRepository.save(vehicle);

    return vehicle;
  }
}

export default UpdateVehicleService;