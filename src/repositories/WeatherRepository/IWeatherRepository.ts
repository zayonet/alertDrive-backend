import Weather from '../../models/Weather';
import ICreateWeatherDTO from '../../dtos/ICreateWeatherDTO';

export default interface IWeatherRepository {
  findAll(): Promise<Weather[]>;
  findById(id: string): Promise<Weather | undefined>;
  searcWeatherByCurrentSpeed(current_speed: string): Promise<Weather[]>;
  findAllUserWeather(user_id: string): Promise<Weather[]>;
  findAllVehicleWeather(vehicle_id: string): Promise<Weather[]>;
  create(createWeatherDTO: ICreateWeatherDTO): Promise<Weather>;
  save(Weather: Weather): Promise<Weather>;
  delete(id: string): Promise<void>;
}