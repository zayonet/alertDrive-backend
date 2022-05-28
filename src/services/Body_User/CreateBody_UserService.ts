
import { hash } from 'bcryptjs';
import IBody_UserRepository from '../../repositories/Body_UserRepository/IBody_UserRepository';
import Body_UserRepository from '../../repositories/Body_UserRepository/Body_UserRepository';
import Body_User from '../../models/Body_User';

interface Request {
  heights: string;
  weigh: string;
  blood_type: string;
  body_pressure_min: string;
  body_pressure_max: string;
  glicemia: string;
  user_id: string;
}

class CreateBody_UserService {
  private body_userRepository: IBody_UserRepository;

  constructor(body_userRepository: Body_UserRepository) {
    this.body_userRepository = body_userRepository;
  }

  public async execute({
    heights,
    weigh,
    blood_type,
    body_pressure_min,
    body_pressure_max,
    glicemia,
    user_id }: Request): Promise<Body_User> {


    const body_user = await this.body_userRepository.create({
      heights,
      weigh,
      blood_type,
      body_pressure_min,
      body_pressure_max,
      glicemia,
      user_id,
    });
    return body_user;
  }
}

export default CreateBody_UserService;