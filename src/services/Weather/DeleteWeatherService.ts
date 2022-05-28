import IWeatherRepository from '../../repositories/WeatherRepository/IWeatherRepository';
import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/UserRepository';
//import ListAllBooksOfUserService from './ListAllBooksOfUserService';
//import DeleteBody_UserService from '../country/DeleteUserService';

class DeleteWeatherService {
  private weatherRepository: IWeatherRepository;

  constructor(weatherRepository: IWeatherRepository) {
    this.weatherRepository = weatherRepository;
  }

  public async execute(id: string): Promise<void> {
    const weather = await this.weatherRepository.findById(id);
    //const bookRepository = new BooksRepository();
    //const booksService = new ListAllBooksOfUserService(bookRepository);
    //const destroyUser = new DeleteUserService(bookRepository);

    /* const books = await booksService.execute(id);
    books.map(book => {
      destroyBook.execute(book.id);
    }) */

    if (!weather) {
      throw new AppError('Informações do clima não encontrada!', 404);
    }

    await this.weatherRepository.delete(id);
  }
}

export default DeleteWeatherService;