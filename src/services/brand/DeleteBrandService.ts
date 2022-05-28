import IBrandRepository from '../../repositories/BrandRepository/IBrandRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteBody_UserService from '../country/DeleteUserService';

class DeleteBrandService {
  private brandRepository: IBrandRepository;

  constructor(brandRepository: IBrandRepository) {
    this.brandRepository = brandRepository;
  }

  public async execute(id: string): Promise<void> {
    const brand = await this.brandRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!brand) {
      throw new AppError('Marca do Veiculo não encontrada!', 404);
    }

    await this.brandRepository.delete(id);
  }
}

export default DeleteBrandService;