import AppError from '../../errors/AppError';
import IBody_UserRepository from '../../repositories/Body_UserRepository/IBody_UserRepository';
import Body_UserRepository from '../../repositories/Body_UserRepository/Body_UserRepository';
import Body_User from '../../models/Body_User';
import IUserRepository from '../../repositories/IUserRepository'

interface IRequest {
  id: string;
  heights: string;
  weigh: string;
  blood_type: string;
  body_pressure_min: string;
  body_pressure_max: string;
  glicemia: string;
  user_id: string;
}

class UpdateBody_UserService {
  private body_UserRepository: IBody_UserRepository;
  private userRepository: IUserRepository;

  constructor(body_UserRepository: IBody_UserRepository, userRepository: IUserRepository) {
    this.body_UserRepository = body_UserRepository;
    this.userRepository = userRepository;
  }

  public async execute({
    id,
    heights,
    weigh,
    blood_type,
    body_pressure_min,
    body_pressure_max,
    glicemia,
    user_id
  }: IRequest): Promise<Body_User> {   
    const body_User = await this.body_UserRepository.findById(id);

    if (!body_User) {
      throw new AppError('Corpo do utilizador não encontrado', 404);
    }

    const verifyUser = await this.userRepository.findById(user_id);

    if (!verifyUser) {
      throw new AppError('Id do utilizador não encontrado', 404);
    }

    body_User.heights = heights;
    body_User.weigh = weigh;
    body_User.blood_type = blood_type;
    body_User.body_pressure_min = body_pressure_min,
    body_User.body_pressure_max = body_pressure_max;
    body_User.glicemia = glicemia;
    body_User.user_id = verifyUser.id;

    await this.body_UserRepository.save(body_User);

    return body_User;
  }
}

export default UpdateBody_UserService;