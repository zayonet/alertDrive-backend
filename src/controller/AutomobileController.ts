import { Request, Response } from 'express';
import CreateAutomobileService from '../services/automobile/CreateAutomobileService';
import AutomobileRepository from '../repositories/AutomobileRepository/AutomobileRepository';
import UserRepository from '../repositories/UserRepository';
import DeleteAutomobileService from '../services/automobile/DeleteAutomobileService';
import logger from '../logs';
import UpdateAutomobileService from '../services/automobile/UpdateAutomobileService';
import FuelRepository from '../repositories/FuelRepository/FuelRepository';
import CreateFuelService from '../services/fuel/CreateFuelService';
import ModelRepository from '../repositories/ModelRepository/ModelRepository';
import CreateModelService from '../services/model/CreateModelService';
import BrandRepository from '../repositories/BrandRepository/BrandRepository';
import CreateBrandService from '../services/brand/CreateBrandService';
import ListAllAutomobilesOfUserService from '../services/automobile/ListAllAutomobileOfUserService';
import ShowAutomobileService from '../services/automobile/ShowAutomobileService';

class AutomobileController {

  public async index(request: Request, response: Response): Promise<Response> {
    const automobilesRepository = new AutomobileRepository();

    const automobiles = await automobilesRepository.findAll();

    return response.json(automobiles);
  }

  public async findAllUserAutomobile(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const automobilesRepository = new AutomobileRepository();
    const automobilesService = new ListAllAutomobilesOfUserService(
      automobilesRepository,
    );

    const automobiles = await automobilesService.execute(user_id);

    return response.json(automobiles);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const automobilesRepository = new AutomobileRepository();
    const countriesService = new ShowAutomobileService(automobilesRepository);

    const countries = await countriesService.execute(id);

    return response.json(countries);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { brand, model, registration_number, registration_country, year, fuel, horse_power, engine_capacity, user_id } = request.body;

    const automobileRespository = new AutomobileRepository();
    const modelRespository = new ModelRepository();
    const fuelRepository = new FuelRepository();
    const brandRepository = new BrandRepository();
    const createAutomobile = new CreateAutomobileService(automobileRespository);
    const createFuel = new CreateFuelService(fuelRepository);
    const createModel = new CreateModelService(modelRespository);
    const createBrand = new CreateBrandService(brandRepository);

    const automobile = await createAutomobile.execute({
      brand,
      model,
      registration_number,
      registration_country,
      engine_capacity,
      year,
      fuel,
      horse_power,
      user_id
    });

    let vehicle_id = automobile.id;
    await createFuel.execute({ fuel, vehicle_id });
    await createModel.execute({ model, vehicle_id });
    await createBrand.execute({ brand, vehicle_id });

    return response.json(automobile);
  }



  public async updates(request: Request, response: Response): Promise<Response | undefined> {
    const { id } = request.params;
    try {
      const { brand, model, registration_number, registration_country, year, fuel, horse_power, engine_capacity, user_id } = request.body;


      const automobileRepository = new AutomobileRepository();
      const updateAutomobile = new UpdateAutomobileService(automobileRepository);

      const automobile = await updateAutomobile.execute({
        id,
        brand,
        model,
        registration_number,
        registration_country,
        engine_capacity,
        year,
        fuel,
        horse_power,
        user_id
      });

      return response.json(automobile);
    } catch (error) {
      logger.error(error)
    }
  }

  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookRepository = new AutomobileRepository();
    const destroyBook = new DeleteAutomobileService(bookRepository);

    await destroyBook.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default AutomobileController;