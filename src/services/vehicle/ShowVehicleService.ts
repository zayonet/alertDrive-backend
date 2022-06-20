import AppError from '../../errors/AppError';
import IVehicleRepository from '../../repositories/vehicleRepository/IVehicleRepository';
import Vehicle from '../../models/Vehicle';

class ShowVehicleService {
  private vehicleRepository: IVehicleRepository;

  constructor(vehicleRepository: IVehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  public async execute(id: string): Promise<Vehicle | undefined> {
    const vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      throw new AppError('Veículo não encontrado', 404);
    }

    return vehicle;
  }
}

export default ShowVehicleService;