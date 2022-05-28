import { Desease } from '../../models/Desease';
import ICreateDeseaseDTO from '../../dtos/ICreateDeseaseDTO';

export default interface IDeseaseRepository {
  findAll(): Promise<Desease[]>;
  findById(id: string): Promise<Desease | undefined>;
  searchDeseaseByName(desease_name: string): Promise<Desease[]>;
  create(createDeseaseDTO: ICreateDeseaseDTO): Promise<Desease>;
  save(desease: Desease): Promise<Desease>;
  delete(id: string): Promise<void>;
}