import IAutomobileRepository from '../../repositories/AutomobileRepository/IAutomobileRepository';
import Automobile from '../../models/Automobile';

class ListAllAutomobilesOfUserService {
  private automobilesRepository: IAutomobileRepository;

  constructor(automobilesRepository: IAutomobileRepository) {
    this.automobilesRepository = automobilesRepository;
  }

  public async execute(user_id: string): Promise<Automobile[]> {
    const automobiles = await this.automobilesRepository.findAllUserAutomobile(user_id);

    return automobiles;
  }
}

export default ListAllAutomobilesOfUserService;