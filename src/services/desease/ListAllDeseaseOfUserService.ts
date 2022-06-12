import IDeseaseRepository from '../../repositories/DeseaseRepository/IDeseaseRepository';
import {Desease} from '../../models/Desease';

class ListAllDeseaseOfUserService {
  private deseaseRepository: IDeseaseRepository;

  constructor(deseaseRepository: IDeseaseRepository) {
    this.deseaseRepository = deseaseRepository;
  }

  public async execute(user_id: string): Promise<Desease[]> {
    const desease = await this.deseaseRepository.findAllUserDesease(user_id);

    return desease;
  }
}

export default ListAllDeseaseOfUserService;