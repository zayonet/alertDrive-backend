import IWeatherRepository from '../../repositories/WeatherRepository/IWeatherRepository';
import Weather from '../../models/Weather';

class ListAllWeathersOfVehicleService {
  private weathersRepository: IWeatherRepository;

  constructor(weathersRepository: IWeatherRepository) {
    this.weathersRepository = weathersRepository;
  }

  public async execute(vehicle_id: string): Promise<Weather[]> {
    const weathers = await this.weathersRepository.findAllVehicleWeather(vehicle_id);

    return weathers;
  }
}

export default ListAllWeathersOfVehicleService;