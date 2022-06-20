import IBody_UserRepository from '../../repositories/Body_UserRepository/IBody_UserRepository';
import Body_User from '../../models/Body_User';

class ListAllBody_UserOfUserService {
  private body_UserRepository: IBody_UserRepository;

  constructor(body_UserRepository: IBody_UserRepository) {
    this.body_UserRepository = body_UserRepository;
  }

  public async execute(user_id: string): Promise<Body_User[]> {
    const body_User = await this.body_UserRepository.findAllUserBody_User(user_id);

    return body_User;
  }
}

export default ListAllBody_UserOfUserService;