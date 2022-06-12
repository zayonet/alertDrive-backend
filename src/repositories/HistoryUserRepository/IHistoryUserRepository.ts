import { History_User } from '../../models/History_User';
import ICreateHistory_UserDTO from '../../dtos/ICreateHistory_UserDTO';

export default interface IHistory_UserRepository {
  findAll(): Promise<History_User[]>;
  findById(id: string): Promise<History_User | undefined>;
  findAllUserHistory_User(user_id: string): Promise<History_User[]>;
  searchHistory_UserByName(accident_before: string): Promise<History_User[]>;
  create(createHistory_UserDTO: ICreateHistory_UserDTO): Promise<History_User>;
  save(accident_before: History_User): Promise<History_User>;
  delete(id: string): Promise<void>;
}