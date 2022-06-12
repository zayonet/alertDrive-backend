import { Request, Response } from 'express';
import CreateBrandService from '../services/brand/CreateBrandService';
import BrandRepository from '../repositories/BrandRepository/BrandRepository';
import DeleteBrandService from '../services/brand/DeleteBrandService';
import logger from '../logs';
import ListAllBrandOfUserService from '../services/brand/ListAllBandsOfVehicleService';

class BrandController {

  public async index(request: Request, response: Response): Promise<Response> {
    const brandsRepository = new BrandRepository();

    const brands = await brandsRepository.findAll();

    return response.json(brands);
  }

  public async findAllVehicleBrands(request: Request, response: Response): Promise<Response> {
    const { vehicle_id } = request.params;
    const brandsRepository = new BrandRepository();
    const brandsService = new ListAllBrandOfUserService(
      brandsRepository,
    );

    const brands = await brandsService.execute(vehicle_id);

    return response.json(brands);
  }
  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const brandsRepository = new BrandRepository();
    const brandsService = new ShowBrandService(brandsRepository);
  
    const brands = await brandsService.execute(id);
  
    return response.json(brands);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { brand, vehicle_id } = request.body;

    const brandsRepository = new BrandRepository();
    const createBrand = new CreateBrandService(brandsRepository);

    const brando = await createBrand.execute({ brand, vehicle_id });

    return response.json(brando);
  }


  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const brandsRepository = new BrandRepository();

    const brands = await brandsRepository.searchBrandByName(name?.toString() || '');

    return response.json(brands);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const brandRepository = new BrandRepository();
    const destroyBrand = new DeleteBrandService(brandRepository);

    await destroyBrand.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default BrandController;