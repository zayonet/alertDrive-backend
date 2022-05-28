
import { hash } from 'bcryptjs';
import ICountryRepository from '../../repositories/CountryRepository/ICountryRepository';
import CountryRepository from '../../repositories/CountryRepository/CountryRepository';
import { Country } from './../../models/Country';

interface Request {
  country_name: string;
}

class CreateCountryService {
  private countryRepository: ICountryRepository;

  constructor(countryRepository: CountryRepository) {
    this.countryRepository = countryRepository;
  }

  public async execute({ country_name }: Request): Promise<Country> {


    const country = await this.countryRepository.create({
      country_name,
    });
    return country;
  }
}

export default CreateCountryService;