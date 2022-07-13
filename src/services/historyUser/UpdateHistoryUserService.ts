import AppError from '../../errors/AppError';
import IHistory_UserRepository from '../../repositories/HistoryUserRepository/IHistoryUserRepository';
import History_UserRepository from '../../repositories/HistoryUserRepository/HistoryUserRepository';
import { History_User } from '../../models/History_User';
import IUserRepository from '../../repositories/IUserRepository'


interface IRequest {
  id: string;
  accident_before: string;
  is_taking_medicine_now: string;
  is_sick_now: string;
  user_id: string;
  description: string;
}

class UpdateHistory_UserService {
  private history_UserRepository: IHistory_UserRepository;
  private userRepository: IUserRepository;

  constructor(history_UserRepository: IHistory_UserRepository, userRepository: IUserRepository) {
    this.history_UserRepository = history_UserRepository;
    this.userRepository = userRepository;
  }

  public async execute({
    id,
    accident_before,
    is_taking_medicine_now,
    is_sick_now,
    description,
    user_id
  }: IRequest): Promise<History_User> {
    const history_User = await this.history_UserRepository.findById(id);

    if (!history_User) {
      throw new AppError('Historia do utilizador não encontrado', 404);
    }

    const verifyUser = await this.userRepository.findById(user_id);

    if (!verifyUser) {
      throw new AppError('Id do utilizador não encontrado', 404);
    }

    history_User.accident_before = accident_before;
    history_User.is_taking_medicine_now = is_taking_medicine_now;
    history_User.is_sick_now = is_sick_now;
    history_User.description = description;
    history_User.user_id = verifyUser.id;

    await this.history_UserRepository.save(history_User);

    return history_User;
  }
}

export default UpdateHistory_UserService;