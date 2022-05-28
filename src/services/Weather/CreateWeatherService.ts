
import IWeatherRepository from '../../repositories/WeatherRepository/IWeatherRepository';
import WeatherRepository from '../../repositories/WeatherRepository/WeatherRepository';
import Weather from '../../models/Weather';

interface Request {
  road_type: string;
  current_speed: string;
  free_flow_speed: string;
  data_confidence: string;
  weather_description: string;
  temperature: string;
  pressure: string;
  humidity: string;
  visibility: string;
  wind_speed: string;
  wind_direction: string;
  cloudiness: string;
  user_id: string;
  vehicle_id: string;
}

class CreateWeatherService {
  private weatherRepository: IWeatherRepository;

  constructor(weatherRepository: WeatherRepository) {
    this.weatherRepository = weatherRepository;
  }

  public async execute({ road_type, current_speed, free_flow_speed, data_confidence, weather_description, temperature, pressure, humidity, visibility, wind_speed, wind_direction, cloudiness, user_id, vehicle_id
  }: Request): Promise<Weather> {


    const weather = await this.weatherRepository.create({
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
    return weather;
  }
}

export default CreateWeatherService;