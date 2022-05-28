import { Country } from './../../models/Country';
import ICreateCountryDTO from '../../dtos/ICreateCountryDTO';

export default interface ICountryRepository {
  findAll(): Promise<Country[]>;
  findById(id: string): Promise<Country | undefined>;
  searchCountryByName(country_name: string): Promise<Country[]>;
  create(createCountryDTO: ICreateCountryDTO): Promise<Country>;
  save(country: Country): Promise<Country>;
  delete(id: string): Promise<void>;
}