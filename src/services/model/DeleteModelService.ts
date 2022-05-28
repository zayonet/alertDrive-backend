import IModelRepository from '../../repositories/ModelRepository/IModelRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteBody_UserService from '../country/DeleteUserService';

class DeleteModelService {
  private modelRepository: IModelRepository;

  constructor(modelRepository: IModelRepository) {
    this.modelRepository = modelRepository;
  }

  public async execute(id: string): Promise<void> {
    const model = await this.modelRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!model) {
      throw new AppError('Modelo do veiculo não encontrada!', 404);
    }

    await this.modelRepository.delete(id);
  }
}

export default DeleteModelService;