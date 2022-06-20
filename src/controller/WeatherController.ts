import { Request, Response } from 'express';
import CreateWeatherService from '../services/Weather/CreateWeatherService';
import WeatherRepository from '../repositories/WeatherRepository/WeatherRepository';
import UserRepository from '../repositories/UserRepository';
import DeleteWeatherService from '../services/Weather/DeleteWeatherService';
import logger from '../logs';
import ListAllWeathersOfUserService from '../services/Weather/ListAllWeatherOfUserService';
import ListAllWeathersOfVehicleService from '../services/Weather/ListAllWeatherOfVehicleService';

class WeatherController {

  public async index(request: Request, response: Response): Promise<Response> {
    const weathersRepository = new WeatherRepository();

    const weathers = await weathersRepository.findAll();

    return response.json(weathers);
  }

  public async findAllUserWeather(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const weathersRepository = new WeatherRepository();
    const weathersService = new ListAllWeathersOfUserService(
      weathersRepository,
    );

    const weathers = await weathersService.execute(user_id);

    return response.json(weathers);
  }
  
  public async findAllVehicleWeather(request: Request, response: Response): Promise<Response> {
    const { vehicle_id } = request.params;
    const weathersRepository = new WeatherRepository();
    const weathersService = new ListAllWeathersOfVehicleService(
      weathersRepository,
    );

    const weathers = await weathersService.execute(vehicle_id);

    return response.json(weathers);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
      vehicle_id } = request.body;

    const weatherRepository = new WeatherRepository();
    const userRespository = new UserRepository();
    const createWeather = new CreateWeatherService(weatherRepository);

    const weather = await createWeather.execute({
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
    return response.json(weather);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookRepository = new WeatherRepository();
    const destroyBook = new DeleteWeatherService(bookRepository);

    await destroyBook.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default WeatherController;