import IBrandRepository from '../../repositories/BrandRepository/IBrandRepository';
import {Brand} from '../../models/Brand';

class ListAllBrandOfVehicleService {
  private brandRepository: IBrandRepository;

  constructor(brandRepository: IBrandRepository) {
    this.brandRepository = brandRepository;
  }

  public async execute(vehicle_id: string): Promise<Brand[]> {
    const brand = await this.brandRepository.findAllVehicleBrands(vehicle_id);

    return brand;
  }
}

export default ListAllBrandOfVehicleService;