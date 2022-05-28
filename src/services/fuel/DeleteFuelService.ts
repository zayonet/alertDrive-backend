import IFuelRepository from '../../repositories/FuelRepository/IFuelRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteBody_UserService from '../country/DeleteUserService';

class DeleteFuelService {
  private fuelRepository: IFuelRepository;

  constructor(fuelRepository: IFuelRepository) {
    this.fuelRepository = fuelRepository;
  }

  public async execute(id: string): Promise<void> {
    const fuel = await this.fuelRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!fuel) {
      throw new AppError('Combustivel do carro não encontrada!', 404);
    }

    await this.fuelRepository.delete(id);
  }
}

export default DeleteFuelService;