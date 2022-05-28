

import { hash } from 'bcryptjs';
import IBrandRepository from '../../repositories/BrandRepository/IBrandRepository';
import BrandRepository from '../../repositories/BrandRepository/BrandRepository';
import { Brand } from '../../models/Brand';
import VehicleRepository from '../../repositories/vehicleRepository/VehicleRepository';
import ListAllVehiclesService from '../vehicle/ListAllVihiclesService';

interface Request {
  brand: string;
  vehicle_id: string;
}

class CreateBrandService {
  private brandRepository: IBrandRepository;

  constructor(brandRepository: BrandRepository) {
    this.brandRepository = brandRepository;
  }

  public async execute({ brand, vehicle_id, }: Request): Promise<Brand> {

    const combustivel = await this.brandRepository.create({
      brand,
      vehicle_id,
    });
    return combustivel;
  }
}

export default CreateBrandService;