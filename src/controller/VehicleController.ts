import { Request, Response } from 'express';
import CreateVehicleService from '../services/vehicle/CreateVehicleService';
import VehicleRepository from '../repositories/vehicleRepository/VehicleRepository';
import UserRepository from '../repositories/UserRepository';
import DeleteVehicleService from '../services/vehicle/DeleteVehicleService';
import logger from '../logs';
import UpdateVehicleService from '../services/vehicle/UpdateVehicleService';
import FuelRepository from '../repositories/FuelRepository/FuelRepository';
import CreateFuelService from '../services/fuel/CreateFuelService';
import ModelRepository from '../repositories/ModelRepository/ModelRepository';
import CreateModelService from '../services/model/CreateModelService';
import BrandRepository from '../repositories/BrandRepository/BrandRepository';
import CreateBrandService from '../services/brand/CreateBrandService';

class VehicleController {

  public async index(request: Request, response: Response): Promise<Response> {
    const vehiclesRepository = new VehicleRepository();

    const vehicles = await vehiclesRepository.findAll();

    return response.json(vehicles);
  }

  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const vehiclesRepository = new VehicleRepository();
    const countriesService = new ShowVehicleService(vehiclesRepository);
  
    const countries = await countriesService.execute(id);
  
    return response.json(countries);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { brand, model, registration_number, registration_country, year, fuel, horse_power, engine_cc, users } = request.body;

    const vehicleRespository = new VehicleRepository();
    const modelRespository = new ModelRepository();
    const fuelRepository = new FuelRepository();
    const brandRepository = new BrandRepository();
    const createVehicle = new CreateVehicleService(vehicleRespository);
    const createFuel = new CreateFuelService(fuelRepository);
    const createModel = new CreateModelService(modelRespository);
    const createBrand = new CreateBrandService(brandRepository);

    const vehicle = await createVehicle.execute({
      brand,
      model,
      registration_number,
      registration_country,
      engine_cc,
      year,
      fuel,
      horse_power,
      users
    });

    let vehicle_id = vehicle.id;
    await createFuel.execute({ fuel, vehicle_id });
    await createModel.execute({ model, vehicle_id });
    await createBrand.execute({ brand, vehicle_id });

    return response.json(vehicle);
  }



  public async updates(request: Request, response: Response): Promise<Response | undefined> {
    const { id } = request.params;
    try {
      const { brand, model, registration_number, registration_country, year, fuel, horse_power, engine_cc } = request.body;


      const vehicleRepository = new VehicleRepository();
      const updateVehicle = new UpdateVehicleService(vehicleRepository);

      const vehicle = await updateVehicle.execute({
        id,
        brand,
        model,
        registration_number,
        registration_country,
        engine_cc,
        year,
        fuel,
        horse_power
      });

      return response.json(vehicle);
    } catch (error) {
      logger.error(error)
    }
  }

  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookRepository = new VehicleRepository();
    const destroyBook = new DeleteVehicleService(bookRepository);

    await destroyBook.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default VehicleController;