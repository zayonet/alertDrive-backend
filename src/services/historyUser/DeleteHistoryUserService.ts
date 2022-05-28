import IHistoryUserRepository from '../../repositories/HistoryUserRepository/IHistoryUserRepository';
import AppError from '../../errors/AppError';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteDeseaseService from './DeleteDeseaseService';

class DeleteHistoryUserService {
  private historyUserRepository: IHistoryUserRepository;

  constructor(historyUserRepository: IHistoryUserRepository) {
    this.historyUserRepository = historyUserRepository;
  }

  public async execute(id: string): Promise<void> {
    const historyUser = await this.historyUserRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!historyUser) {
      throw new AppError('Histórico do Utilizador não encontrado!', 404);
    }

    await this.historyUserRepository.delete(id);
  }
}

export default DeleteHistoryUserService;