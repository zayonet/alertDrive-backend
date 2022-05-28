import IBody_UserRepository from '../../repositories/Body_UserRepository/IBody_UserRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';

class DeleteBody_UserService {
  private body_userRepository: IBody_UserRepository;

  constructor(body_userRepository: IBody_UserRepository) {
    this.body_userRepository = body_userRepository;
  }

  public async execute(id: string): Promise<void> {
    const body_user = await this.body_userRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!body_user) {
      throw new AppError('Informações sobre o corpo do utilizador não encontrada!', 404);
    }

    await this.body_userRepository.delete(id);
  }
}

export default DeleteBody_UserService;