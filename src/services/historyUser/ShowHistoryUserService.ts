import AppError from '../../errors/AppError';
import IHistory_UserRepository from '../../repositories/HistoryUserRepository/IHistoryUserRepository';
import { History_User } from '../../models/History_User';

class ShowHistory_UserService {
  private history_userRepository: IHistory_UserRepository;

  constructor(history_userRepository: IHistory_UserRepository) {
    this.history_userRepository = history_userRepository;
  }

  public async execute(id: string): Promise<History_User | undefined> {
    const history_user = await this.history_userRepository.findById(id);

    if (!history_user) {
      throw new AppError('Doença não encontrado', 404);
    }

    return history_user;
  }
}

export default ShowHistory_UserService;