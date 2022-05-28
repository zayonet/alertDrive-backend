import { Repository, getRepository, Like } from 'typeorm';
import { Brand } from '../../models/Brand';
import IBrandRepository from '../BrandRepository/IBrandRepository';
import ICreateBrandDTO from '../../dtos/ICreateBrandDTO';
import AppError from '../../errors/AppError';

class BrandRepository implements IBrandRepository {

  private ormRepository: Repository<Brand>;

  constructor() {
    this.ormRepository = getRepository(Brand);
  }

  public async findAll(): Promise<Brand[]> {
    return this.ormRepository.find();
  }

  public async findByBrandId(id: string): Promise<Brand | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async findById(id: string): Promise<Brand | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searchBrandByName(brand: string): Promise<Brand[]> {
    return this.ormRepository.find({
      brand: Like(`%${brand}%`),
    });
  }

  public async create({ brand, vehicle_id }: ICreateBrandDTO): Promise<Brand> {

    const checkUser = await this.ormRepository.findOne({
      where: { vehicle_id },
    });

    if (checkUser?.vehicle_id) {
      throw new AppError('Matricula já foi utilizado! Tente outro', 422);
    }

    const save = this.ormRepository.create({ brand, vehicle_id });


    await this.ormRepository.save(save);

    return save;
  }

  public async save(brand: Brand): Promise<Brand> {
    return this.ormRepository.save(brand);
  }

  public async delete(id: string): Promise<void> {
    const brand = this.ormRepository.delete(id);
    if (await brand) {
      throw new AppError('Marca do veiculo excluido', 200);
    }
  }

}

export default BrandRepository;