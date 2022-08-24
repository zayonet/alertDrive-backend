import Automobile from '../../models/Automobile';
import ICreateAutomobileDTO from '../../dtos/ICreateAutomobileDTO';

export default interface IAutomobileRepository {
  findAll(): Promise<Automobile[]>;
  findById(id: string): Promise<Automobile | undefined>;
  searcAutomobileByName(name: string): Promise<Automobile[]>;
  findAllUserAutomobile(user_id: string): Promise<Automobile[]>;
  create(createAutomobileDTO: ICreateAutomobileDTO): Promise<Automobile>;
  save(automobile: Automobile): Promise<Automobile>;
  delete(id: string): Promise<void>;
}