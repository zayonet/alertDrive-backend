import IHistory_UserRepository from '../../repositories/HistoryUserRepository/IHistoryUserRepository';
import {History_User} from '../../models/History_User';

class ListAllHistory_UserOfUserService {
  private history_UserRepository: IHistory_UserRepository;

  constructor(history_UserRepository: IHistory_UserRepository) {
    this.history_UserRepository = history_UserRepository;
  }

  public async execute(user_id: string): Promise<History_User[]> {
    const history_User = await this.history_UserRepository.findAllUserHistory_User(user_id);

    return history_User;
  }
}

export default ListAllHistory_UserOfUserService;