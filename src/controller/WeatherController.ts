import { Request, Response } from 'express';
import CreateWeatherService from '../services/Weather/CreateWeatherService';
import WeatherRepository from '../repositories/WeatherRepository/WeatherRepository';
import UserRepository from '../repositories/UserRepository';
import DeleteWeatherService from '../services/Weather/DeleteWeatherService';
import logger from '../logs';

class WeatherController {

  public async index(request: Request, response: Response): Promise<Response> {
    const weathersRepository = new WeatherRepository();

    const weathers = await weathersRepository.findAll();

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