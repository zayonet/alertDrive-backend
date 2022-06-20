
import { Repository, getRepository, Like } from 'typeorm';
import Body_User from '../../models/Body_User';
import IBody_UserRepository from '../Body_UserRepository/IBody_UserRepository';
import ICreateBody_UserDTO from '../../dtos/ICreateBody_UserDTO';
import AppError from '../../errors/AppError';

class Body_UserRepository implements IBody_UserRepository {

  private ormRepository: Repository<Body_User>;

  constructor() {
    this.ormRepository = getRepository(Body_User);
  }

  public async findAll(): Promise<Body_User[]> {
    return this.ormRepository.find();
  }

  findAllUserBody_User(user_id: string): Promise<Body_User[]> {
    return this.ormRepository.find({
      where: { user_id },
    });
  }

  public async findById(id: string): Promise<Body_User | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searchBody_UserByName(Body_User_heights: string, Body_User_weigh: string, Body_User_blood: string): Promise<Body_User[]> {
    return this.ormRepository.find({
      heights: Like(`%${Body_User_heights
        }%`),
      weigh: Like(`%${Body_User_weigh
        }%`),
      blood_type: Like(`%${Body_User_blood
        }%`),
    });
  }

  public async create({ heights,
    weigh,
    blood_type,
    body_pressure_min,
    body_pressure_max,
    glicemia,
    user_id }: ICreateBody_UserDTO): Promise<Body_User> {


    const body_user = this.ormRepository.create({
      heights,
      weigh,
      blood_type,
      body_pressure_min,
      body_pressure_max,
      glicemia,
      user_id
    });

    await this.ormRepository.save(body_user);

    return body_user;
  }


  public async save(body_user: Body_User): Promise<Body_User> {
    return this.ormRepository.save(body_user);
  }

  public async delete(id: string): Promise<void> {
    const body_user = this.ormRepository.delete(id);
    if (await body_user) {
      throw new AppError('Informações sobre o corpo do utilizador excluido', 200);
    }
  }

}

export default Body_UserRepository;