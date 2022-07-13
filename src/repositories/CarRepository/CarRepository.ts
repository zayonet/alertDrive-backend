import { Repository, getRepository, Like } from 'typeorm';
import ICarRepository from './ICarRepository';
import ICreateCarDTO from '../../dtos/ICreateCarDTO';
import Car from '../../models/Car';

class CarRepository implements ICarRepository {

  private ormRepository: Repository<Car>;

  constructor() {
    this.ormRepository = getRepository(Car);
  }

  public async findAll(): Promise<Car[]> {
    return this.ormRepository.find();
  }


  public async findAllOfUser(user_id: string): Promise<Car[]> {
    return this.ormRepository.find({
      where: { user_id },
    });
  }

  public async findAllByMakeorModelorGenerationOrSeriesOrYear(car: string): Promise<Car[]> {
    return this.ormRepository.find({
      model: Like(`%${car}%`),
      generation: Like(`%${car}%`),
      series: Like(`%${car}%`),
      year_from: Like(`%${car}%`),
      make: Like(`%${car}%`),
      year_to: Like(`%${car}%`)
    })
  }

  public async findById(id: string): Promise<Car | undefined> {
    return this.ormRepository.findOne(id);
  }
}

export default CarRepository;