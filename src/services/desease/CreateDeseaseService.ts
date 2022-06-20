
import { hash } from 'bcryptjs';
import IDeseaseRepository from '../../repositories/DeseaseRepository/IDeseaseRepository';
import DeseaseRepository from '../../repositories/DeseaseRepository/DeseaseRepository';
import { Desease } from '../../models/Desease';

interface Request {
  desease_name: string;
  desease_type: string;
  description: string;
  user_id: string;
  body_user_id: string;
}

class CreateDeseaseService {
  private deseaseRepository: IDeseaseRepository;

  constructor(deseaseRepository: DeseaseRepository) {
    this.deseaseRepository = deseaseRepository;
  }

  public async execute({ desease_name, desease_type, description,
    user_id,
    body_user_id }: Request): Promise<Desease> {


    const desease = await this.deseaseRepository.create({
      desease_name,
      desease_type,
      description,
      user_id,
      body_user_id
    });
    return desease;
  }
}

export default CreateDeseaseService;