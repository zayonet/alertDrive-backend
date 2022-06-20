import { Request, Response } from 'express';
import CreateFuelService from '../services/fuel/CreateFuelService';
import FuelRepository from '../repositories/FuelRepository/FuelRepository';
import DeleteFuelService from '../services/fuel/DeleteFuelService';
import logger from '../logs';
import ListAllFuelOfVehicleService from '../services/fuel/ListAllFuelOfVehicleService';

class FuelController {

  public async index(request: Request, response: Response): Promise<Response> {
    const fuelsRepository = new FuelRepository();

    const fuels = await fuelsRepository.findAll();

    return response.json(fuels);
  }

  public async findAllVehicleFuels(request: Request, response: Response): Promise<Response> {
    const { vehicle_id } = request.params;
    const fuelssRepository = new FuelRepository();
    const fuelssService = new ListAllFuelOfVehicleService(
      fuelssRepository,
    );

    const fuelss = await fuelssService.execute(vehicle_id);

    return response.json(fuelss);
  }

  
  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const fuelsRepository = new FuelRepository();
    const fuelsService = new ShowFuelService(fuelsRepository);
  
    const fuels = await fuelsService.execute(id);
  
    return response.json(fuels);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { fuel, vehicle_id } = request.body;

    const fuelRespository = new FuelRepository();
    const createFuel = new CreateFuelService(fuelRespository);

    const combustivel = await createFuel.execute({ fuel, vehicle_id });

    return response.json(combustivel);
  }


  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const fuelRepository = new FuelRepository();

    const combustivel = await fuelRepository.searcFuelByName(name?.toString() || '');

    return response.json(combustivel);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const fuelRepository = new FuelRepository();
    const destroyFuel = new DeleteFuelService(fuelRepository);

    await destroyFuel.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default FuelController;