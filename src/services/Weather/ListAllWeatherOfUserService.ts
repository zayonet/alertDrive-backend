import IWeatherRepository from '../../repositories/WeatherRepository/IWeatherRepository';
import Weather from '../../models/Weather';

class ListAllWeathersOfUserService {
  private weathersRepository: IWeatherRepository;

  constructor(weathersRepository: IWeatherRepository) {
    this.weathersRepository = weathersRepository;
  }

  public async execute(user_id: string): Promise<Weather[]> {
    const weathers = await this.weathersRepository.findAllUserWeather(user_id);

    return weathers;
  }
}

export default ListAllWeathersOfUserService;