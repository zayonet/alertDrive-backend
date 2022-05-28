import ICountryRepository from '../../repositories/CountryRepository/ICountryRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteCountryService from '../country/DeleteUserService';

class DeleteCountryService {
  private countryRepository: ICountryRepository;

  constructor(CountryRepository: ICountryRepository) {
    this.countryRepository = CountryRepository;
  }

  public async execute(id: string): Promise<void> {
    const country = await this.countryRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!country) {
      throw new AppError('País não encontrado!', 404);
    }

    await this.countryRepository.delete(id);
  }
}

export default DeleteCountryService;