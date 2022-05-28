import { Brand } from '../../models/Brand';
import ICreateBrandDTO from '../../dtos/ICreateBrandDTO';

export default interface IBrandRepository {
  findAll(): Promise<Brand[]>;
  findById(id: string): Promise<Brand | undefined>;
  searchBrandByName(brand: string): Promise<Brand[]>;
  create(createBrandDTO: ICreateBrandDTO): Promise<Brand>;
  save(brand: Brand): Promise<Brand>;
  delete(id: string): Promise<void>;
}