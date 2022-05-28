import IJob_UserRepository from '../../repositories/Job_User/IJob_UserRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteBody_UserService from '../country/DeleteUserService';

class DeleteJob_UserService {
  private job_userRepository: IJob_UserRepository;

  constructor(job_userRepository: IJob_UserRepository) {
    this.job_userRepository = job_userRepository;
  }

  public async execute(id: string): Promise<void> {
    const job_user = await this.job_userRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!job_user) {
      throw new AppError('Informações profissionais do utilizador não encontrada!', 404);
    }

    await this.job_userRepository.delete(id);
  }
}

export default DeleteJob_UserService;