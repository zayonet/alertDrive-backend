import AppError from '../../errors/AppError';
import IDeseaseRepository from '../../repositories/DeseaseRepository/IDeseaseRepository';
import DeseaseRepository from '../../repositories/DeseaseRepository/DeseaseRepository';
import { Desease } from '../../models/Desease';
import IUserRepository from '../../repositories/IUserRepository';
import IBody_UserRepository from '../../repositories/Body_UserRepository/IBody_UserRepository';


interface IRequest {
  id: string;
  desease_name: string;
  desease_type: string;
  description: string;
  user_id: string;
  body_user_id: string;
}

class UpdateDeseaseService {
  private deseaseRepository: IDeseaseRepository;
  private userRepository: IUserRepository;
  private body_userRepository: IBody_UserRepository;

  constructor(deseaseRepository: IDeseaseRepository, userRepository: IUserRepository, body_userRepository: IBody_UserRepository) {
    this.deseaseRepository = deseaseRepository;
    this.userRepository = userRepository;
    this.body_userRepository = body_userRepository;
  }

  public async execute({
    id,
    desease_name,
    desease_type,
    description,
    user_id,
    body_user_id,
  }: IRequest): Promise<Desease> {
    const desease = await this.deseaseRepository.findById(id);

    if (!desease) {
      throw new AppError('Doença do utilizador não encontrado', 404);
    }

    const verifyUser = await this.userRepository.findById(user_id);

    if (!verifyUser) {
      throw new AppError('Id do utilizador não encontrado', 404);
    }
    const verifyBodyUse = await this.body_userRepository.findById(body_user_id);

    if (!verifyBodyUse) {
      throw new AppError('id do Corpo do Utilizador não encontrado', 404);
    }

    desease.desease_name = desease_name;
    desease.desease_type = desease_type;
    desease.description = description;
    desease.body_user_id = body_user_id;
    desease.user_id = verifyUser.id;

    await this.deseaseRepository.save(desease);

    return desease;
  }
}

export default UpdateDeseaseService;