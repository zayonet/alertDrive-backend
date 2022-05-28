
import { Repository, getRepository, Like } from 'typeorm';
import { Activity } from '../../models/Activity';
import IActivityRepository from '../ActivityRepository/IActivityRepository';
import ICreateActivityDTO from '../../dtos/ICreateActivityDTO';
import AppError from '../../errors/AppError';

class ActivityRepository implements IActivityRepository {

  private ormRepository: Repository<Activity>;

  constructor() {
    this.ormRepository = getRepository(Activity);
  }
  searchBody_UserByName(whitch_food_ate: string, whitch_food_drank: string, smoked: string): Promise<Activity[]> {
    throw new Error('Method not implemented.');
  }

  public async findAll(): Promise<Activity[]> {
    return this.ormRepository.find();
  }


  public async findById(id: string): Promise<Activity | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async searchActivityByName(whitch_food_ate: string, whitch_food_drank: string, smoked: string): Promise<Activity[]> {
    return this.ormRepository.find({
      whitch_food_ate: Like(`%${whitch_food_ate
        }%`),
      whitch_food_drank: Like(`%${whitch_food_drank
        }%`),
      smoked: Like(`%${smoked
        }%`),
    });
  }

  public async create({ whitch_food_ate: string,
    whitch_food_drank,
    smoked,
    description,
    user_id }: ICreateActivityDTO): Promise<Activity> {


    const activity = this.ormRepository.create({
      whitch_food_ate: string,
      whitch_food_drank,
      smoked,
      description,
      user_id
    });

    await this.ormRepository.save(activity);

    return activity;
  }


  public async save(activity: Activity): Promise<Activity> {
    return this.ormRepository.save(activity);
  }

  public async delete(id: string): Promise<void> {
    const activity = this.ormRepository.delete(id);
    if (await activity) {
      throw new AppError('Informações actividade do utilizador excluido', 200);
    }
  }

}

export default ActivityRepository;