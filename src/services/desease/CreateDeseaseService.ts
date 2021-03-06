
import { hash } from 'bcryptjs';
import AppError from '../../errors/AppError';
import IDeseaseRepository from '../../repositories/DeseaseRepository/IDeseaseRepository';
import DeseaseRepository from '../../repositories/DeseaseRepository/DeseaseRepository';
import { Desease } from '../../models/Desease';
import IUserRepository from '../../repositories/IUserRepository';
import IBody_UserRepository from '../../repositories/Body_UserRepository/IBody_UserRepository';

interface Request {
  desease_name: string;
  desease_type: string;
  description: string;
  user_id: string;
  body_user_id: string;
}

class CreateDeseaseService {
  private deseaseRepository: IDeseaseRepository;
  private userRepository: IUserRepository;
  private body_userRepository: IBody_UserRepository;

  constructor(deseaseRepository: DeseaseRepository, userRepository: IUserRepository, body_userRepository: IBody_UserRepository) {
    this.deseaseRepository = deseaseRepository;
    this.userRepository = userRepository;
    this.body_userRepository = body_userRepository;
  }

  public async execute({ desease_name, desease_type, description,
    user_id, body_user_id }: Request): Promise<Desease> {

    const verifyUser = await this.userRepository.findById(user_id);
    console.log(verifyUser)
    if (!verifyUser) {
      throw new AppError('Id do utilizador não encontrado', 404);
    }
    const verifyBodyUse = await this.body_userRepository.findById(body_user_id);

    if (!verifyBodyUse) {
      throw new AppError('id do Corpo do Utilizador não encontrado', 404);
    }

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