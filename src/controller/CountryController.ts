import { Request, Response } from 'express';
import CreateCountryService from '../services/country/CreateCountryService';
import CountryRepository from '../repositories/CountryRepository/CountryRepository';
import DeleteCountryService from '../services/country/DeleteCountryService';
import logger from '../logs';

class CountryController {

  public async index(request: Request, response: Response): Promise<Response> {
    const countriesRepository = new CountryRepository();

    const countries = await countriesRepository.findAll();

    return response.json(countries);
  }

  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const countriesRepository = new CountryRepository();
    const countriesService = new ShowCountryService(countriesRepository);
  
    const countries = await countriesService.execute(id);
  
    return response.json(countries);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { country_name } = request.body;

    const countryRespository = new CountryRepository();
    const createCountry = new CreateCountryService(countryRespository);

    const country = await createCountry.execute({ country_name });

    return response.json(country);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookRepository = new CountryRepository();
    const destroyBook = new DeleteCountryService(bookRepository);

    await destroyBook.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default CountryController;