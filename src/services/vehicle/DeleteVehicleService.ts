import IVehicleRepository from '../../repositories/vehicleRepository/IVehicleRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteVehicleService from '../Vehicle/DeleteUserService';

class DeleteVehicleService {
  private vehicleRepository: IVehicleRepository;

  constructor(vehicleRepository: IVehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  public async execute(id: string): Promise<void> {
    const vehicle = await this.vehicleRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!vehicle) {
      throw new AppError('Veículo não encontrado!', 404);
    }

    await this.vehicleRepository.delete(id);
  }
}

export default DeleteVehicleService;