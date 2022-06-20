
import { hash } from 'bcryptjs';
import ICountryRepository from '../../repositories/CountryRepository/ICountryRepository';
import CountryRepository from '../../repositories/CountryRepository/CountryRepository';
import { Country } from './../../models/Country';

interface Request {
  countrycode: string;
  country_name: string;
  phoneCode: number;
}

class CreateCountryService {
  private countryRepository: ICountryRepository;

  constructor(countryRepository: CountryRepository) {
    this.countryRepository = countryRepository;
  }

  public async execute({ countrycode, country_name, phoneCode }: Request): Promise<Country> {


    const country = await this.countryRepository.create({
      countrycode, country_name, phoneCode
    });
    return country;
  }
}

export default CreateCountryService;