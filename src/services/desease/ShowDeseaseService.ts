import AppError from '../../errors/AppError';
import IDeseaseRepository from '../../repositories/DeseaseRepository/IDeseaseRepository';
import { Desease } from '../../models/Desease';

class ShowDeseaseService {
  private deseaseRepository: IDeseaseRepository;

  constructor(deseaseRepository: IDeseaseRepository) {
    this.deseaseRepository = deseaseRepository;
  }

  public async execute(id: string): Promise<Desease | undefined> {
    const desease = await this.deseaseRepository.findById(id);

    if (!desease) {
      throw new AppError('Doença não encontrado', 404);
    }

    return desease;
  }
}

export default ShowDeseaseService;