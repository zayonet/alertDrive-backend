import { Repository, getRepository, Like } from 'typeorm';
import Weather from '../../models/Weather';
import IWeatherRepository from '../../repositories/WeatherRepository/IWeatherRepository';
import ICreateWeatherDTO from '../../dtos/ICreateWeatherDTO';
import AppError from '../../errors/AppError';
import User from '../../models/User';

class WeatherRepository implements IWeatherRepository {

  private ormRepository: Repository<Weather>;
  private ormRepositoryUser: Repository<User>;

  constructor() {
    this.ormRepositoryUser = getRepository(User);
    this.ormRepository = getRepository(Weather);
  }

  public async findAll(): Promise<Weather[]> {
    return this.ormRepository.find();
  }


  public async findById(id: string): Promise<Weather | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searcWeatherByCurrentSpeed(current_speed: string): Promise<Weather[]> {
    return this.ormRepository.find({
      current_speed: Like(`%${current_speed
        }%`),
    });
  }

  public async create({ road_type, current_speed, free_flow_speed, data_confidence, weather_description, temperature, pressure, humidity, visibility, wind_speed, wind_direction, cloudiness, user_id, vehicle_id }: ICreateWeatherDTO): Promise<Weather> {


    const weather = this.ormRepository.create({
      road_type,
      current_speed,
      free_flow_speed,
      data_confidence,
      weather_description,
      temperature,
      pressure,
      humidity,
      visibility,
      wind_speed,
      wind_direction,
      cloudiness,
      user_id,
      vehicle_id
    });

    await this.ormRepository.save(weather);

    return weather;
  }

  public async save(weather: Weather): Promise<Weather> {
    return this.ormRepository.save(weather);
  }

  public async delete(id: string): Promise<void> {
    const weather = this.ormRepository.delete(id);
    if (await weather) {
      throw new AppError('Clima excluido', 200);
    }
  }

}

export default WeatherRepository;