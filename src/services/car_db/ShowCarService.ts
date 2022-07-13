import AppError from '../../errors/AppError';
import ICarRepository from '../../repositories/CarRepository/ICarRepository';
import CarRepository from '../../repositories/CarRepository/CarRepository';
import Car from '../../models/Car';

class ShowCarService {
  private carRepository: ICarRepository;

  constructor(carRepository: ICarRepository) {
    this.carRepository = carRepository;
  }

  public async execute(id: string): Promise<Car | undefined> {
    const car = await this.carRepository.findById(id);

    if (!car) {
      throw new AppError('Carro do utilizador não encontrado', 404);
    }

    return car;
  }
}

export default ShowCarService;