import AppError from '../../errors/AppError';
import IBody_UserRepository from '../../repositories/Body_UserRepository/IBody_UserRepository';
import Body_User from '../../models/Body_User';

class ShowBody_userService {
  private bode_userRepository: IBody_UserRepository;

  constructor(bode_userRepository: IBody_UserRepository) {
    this.bode_userRepository = bode_userRepository;
  }

  public async execute(id: string): Promise<Body_User | undefined> {
    const body_user = await this.bode_userRepository.findById(id);

    if (!body_user) {
      throw new AppError('Body user não encontrado', 404);
    }

    return body_user;
  }
}

export default ShowBody_userService;