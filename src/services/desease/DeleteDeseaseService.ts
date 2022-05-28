import IDeseaseRepository from '../../repositories/DeseaseRepository/ICountryRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteDeseaseService from './DeleteDeseaseService';

class DeleteDeseaseService {
  private deseaseRepository: IDeseaseRepository;

  constructor(deseaseRepository: IDeseaseRepository) {
    this.deseaseRepository = deseaseRepository;
  }

  public async execute(id: string): Promise<void> {
    const desease = await this.deseaseRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!desease) {
      throw new AppError('País não encontrado!', 404);
    }

    await this.deseaseRepository.delete(id);
  }
}

export default DeleteDeseaseService;