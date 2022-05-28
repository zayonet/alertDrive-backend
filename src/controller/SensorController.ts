import { Request, Response } from 'express';
import CreateSensorService from '../services/sensor/CreateSensorService';
import SensorRepository from '../repositories/SensorRepository/SensorRepository';
import logger from '../logs';

class SensorController {

  public async index(request: Request, response: Response): Promise<Response> {
    const sensoresRepository = new SensorRepository();

    const sensores = await sensoresRepository.findAll();

    return response.json(sensores);
  }

  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const sensoresRepository = new SensorRepository();
    const sensoresService = new ShowSensorService(sensoresRepository);
  
    const sensores = await sensoresService.execute(id);
  
    return response.json(sensores);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { accelerometerX,
      accelerometerY,
      accelerometerZ,
      gyroscopeX,
      gyroscopeY,
      gyroscopeZ,
      latitude,
      longitude,
      altitude,
      user_id,
      vehicle_id } = request.body;

    const sensorRespository = new SensorRepository();
    const createSensor = new CreateSensorService(sensorRespository);

    const sensor = await createSensor.execute({
      accelerometerX,
      accelerometerY,
      accelerometerZ,
      gyroscopeX,
      gyroscopeY,
      gyroscopeZ,
      latitude,
      longitude,
      altitude,
      user_id,
      vehicle_id
    });

    return response.json(sensor);
  }


  /* public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookRepository = new SensorRepository();
    const destroyBook = new DeleteSensorService(bookRepository);

    await destroyBook.execute(id);

    return response.status(204).send(); //204 - no content
  } */
}

export default SensorController;