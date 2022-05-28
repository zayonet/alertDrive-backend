
import { hash } from 'bcryptjs';
import IHistory_UserRepository from '../../repositories/HistoryUserRepository/IHistoryUserRepository';
import History_UserRepository from '../../repositories/HistoryUserRepository/HistoryUserRepository';
import { History_User } from '../../models/History_User';

interface Request {
  accident_before: string;
  is_taking_medicine_now: string;
  is_sick_now: string;
  user_id: string;
  description: string;
}

class CreateHistory_UserService {
  private historyUserRepository: IHistory_UserRepository;

  constructor(historyUserRepository: History_UserRepository) {
    this.historyUserRepository = historyUserRepository;
  }

  public async execute({ accident_before, is_taking_medicine_now, is_sick_now,
    user_id, description }: Request): Promise<History_User> {


    const historyUser = await this.historyUserRepository.create({
      accident_before,
      is_taking_medicine_now,
      is_sick_now,
      user_id,
      description
    });
    return historyUser;
  }
}

export default CreateHistory_UserService;