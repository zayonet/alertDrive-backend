
import { Repository, getRepository, Like } from 'typeorm';
import { Country } from './../../models/Country';
import ICountryRepository from '../CountryRepository/ICountryRepository';
import ICreateCountryDTO from '../../dtos/ICreateCountryDTO';
import AppError from '../../errors/AppError';

class CountryRepository implements ICountryRepository {

  private ormRepository: Repository<Country>;

  constructor() {
    this.ormRepository = getRepository(Country);
  }
  

  public async findAll(): Promise<Country[]> {
    return this.ormRepository.find();
  }


  public async findById(id: string): Promise<Country | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searchCountryByName(country_name: string): Promise<Country[]> {
    return this.ormRepository.find({
      country_name: Like(`%${country_name
        }%`),
    });
  }

  public async create({ countrycode, country_name, phoneCode }: ICreateCountryDTO): Promise<Country> {

    const checkCountry = await this.ormRepository.findOne({
      where: { country_name },
    });

    if (checkCountry?.country_name) {
      throw new AppError('Este país já foi registado! Tente outro', 422);
    }

    const country = this.ormRepository.create({
      countrycode,
      country_name,
      phoneCode
    });

    await this.ormRepository.save(country);

    return country;
  }


  public async save(country: Country): Promise<Country> {
    return this.ormRepository.save(country);
  }

  public async delete(id: string): Promise<void> {
    const country = this.ormRepository.delete(id);
    if (await country) {
      throw new AppError('País excluido', 200);
    }
  }

}

export default CountryRepository;