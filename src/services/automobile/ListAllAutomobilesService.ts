import IAutomobileRepository from '../../repositories/AutomobileRepository/IAutomobileRepository';
import Automobile from '../../models/Automobile';

class ListAllAutomobileOfUserService {
  private automobilesRepository: IAutomobileRepository;

  constructor(automobilesRepository: IAutomobileRepository) {
    this.automobilesRepository = automobilesRepository;
  }

  public async execute(): Promise<Automobile[]> {
    const automobiles = await this.automobilesRepository.findAll();

    return automobiles;
  }
}

export default ListAllAutomobileOfUserService;