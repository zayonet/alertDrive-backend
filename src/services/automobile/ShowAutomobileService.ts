import AppError from '../../errors/AppError';
import IAutomobileRepository from '../../repositories/AutomobileRepository/IAutomobileRepository';
import Automobile from '../../models/Automobile';

class ShowAutomobileService {
  private automobileRepository: IAutomobileRepository;

  constructor(automobileRepository: IAutomobileRepository) {
    this.automobileRepository = automobileRepository;
  }

  public async execute(id: string): Promise<Automobile | undefined> {
    const automobile = await this.automobileRepository.findById(id);

    if (!automobile) {
      throw new AppError('Veículo não encontrado', 404);
    }

    return automobile;
  }
}

export default ShowAutomobileService;