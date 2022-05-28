import IActivityRepository from '../../repositories/ActivityRepository/IActivityRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';

class DeleteActivityService {
  private activityRepository: IActivityRepository;

  constructor(activityRepository: IActivityRepository) {
    this.activityRepository = activityRepository;
  }

  public async execute(id: string): Promise<void> {
    const activity = await this.activityRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!activity) {
      throw new AppError('Informações sobre o corpo do utilizador não encontrada!', 404);
    }

    await this.activityRepository.delete(id);
  }
}

export default DeleteActivityService;