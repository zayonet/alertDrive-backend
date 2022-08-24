import AppError from '../../errors/AppError';
import IAutomobileRepository from '../../repositories/AutomobileRepository/IAutomobileRepository';
import Automobile from '../../models/Automobile';
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
  engine_capacity: string;
  user_id: string;
}

class UpdateAutomobileService {
  private automobileRepository: IAutomobileRepository;
  private userRepository: IUserRepository;

  constructor(automobileRepository: IAutomobileRepository) {
    this.automobileRepository = automobileRepository;
  }

  public async execute({ id, brand, model, registration_number, registration_country, year, fuel, horse_power, engine_capacity
  }: IRequest): Promise<Automobile> {
    const automobile = await this.automobileRepository.findById(id);

    if (!automobile) {
      throw new AppError('Veículo não encontrado', 404);
    }

    /* const verifyUser = await this.userRepository.findById(user_id);

    if (!verifyUser) {
      throw new AppError('Id do utilizador não encontrado', 404);
    } */


    automobile.brand = brand;
    automobile.model = model
    automobile.registration_number = registration_number;
    automobile.registration_country = registration_country;
    automobile.year = year;
    automobile.fuel = fuel;
    automobile.horse_power = horse_power;
    automobile.engine_capacity = engine_capacity;

    await this.automobileRepository.save(automobile);

    return automobile;
  }
}

export default UpdateAutomobileService;