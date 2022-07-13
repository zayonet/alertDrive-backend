import { Request, Response } from 'express';
import CarRepository from '../repositories/CarRepository/CarRepository';
import ShowCarService from '../services/car_db/ShowCarService';


class CarController {
  public async index(request: Request, response: Response): Promise<Response> {
    const carRepository = new CarRepository();

    const cars = await carRepository.findAll();

    return response.json(cars);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const carsRepository = new CarRepository();
    const carsService = new ShowCarService(carsRepository);

    const car = await carsService.execute(id);

    return response.json(car);
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const { make } = request.query;
    const carsRepository = new CarRepository();

    const cars = await carsRepository.findAllByMakeorModelorGenerationOrSeriesOrYear(
      make?.toString() || '');

    return response.json(cars);
  }
}

export default CarController;