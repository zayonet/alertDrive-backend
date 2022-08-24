import IAutomobileRepository from '../../repositories/AutomobileRepository/IAutomobileRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteAutomobileService from '../Automobile/DeleteUserService';

class DeleteAutomobileService {
  private automobileRepository: IAutomobileRepository;

  constructor(automobileRepository: IAutomobileRepository) {
    this.automobileRepository = automobileRepository;
  }

  public async execute(id: string): Promise<void> {
    const automobile = await this.automobileRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!automobile) {
      throw new AppError('Automóvel não encontrado!', 404);
    }

    await this.automobileRepository.delete(id);
  }
}

export default DeleteAutomobileService;