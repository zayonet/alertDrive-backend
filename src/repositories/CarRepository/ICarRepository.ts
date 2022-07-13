import ICreateBookDTO from '../../dtos/ICreateCarDTO';
import Car from '../../models/Car';

export default interface ICarRepository {
  findAll(): Promise<Car[]>;
  findAllOfUser(user_id: string): Promise<Car[]>;
  findById(id: string): Promise<Car | undefined>;
  findAllByMakeorModelorGenerationOrSeriesOrYear(car: string): Promise<Car[]>;
  /* create(createBook: ICreateBookDTO): Promise<Book>;
  save(book: Book): Promise<Book>;
  delete(id: string): Promise<void>; */
}