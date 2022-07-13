import AppError from '../../errors/AppError';
import IActivityRepository from '../../repositories/ActivityRepository/IActivityRepository';
import ActivityRepository from '../../repositories/ActivityRepository/ActivityRepository';
import { Activity } from '../../models/Activity';
import IUserRepository from '../../repositories/IUserRepository'


interface IRequest {
  id: string;
  whitch_food_ate: string;
  whitch_food_drank: string;
  smoked: string;
  description: string;
  user_id: string;
}

class UpdateActivityService {
  private activityRepository: IActivityRepository;
  private userRepository: IUserRepository;

  constructor(activityRepository: IActivityRepository, userRepository: IUserRepository) {
    this.activityRepository = activityRepository;
    this.userRepository = userRepository;
  }

  public async execute({
    id,
    whitch_food_ate,
    whitch_food_drank,
    smoked,
    description,
    user_id
  }: IRequest): Promise<Activity> {
    const activity = await this.activityRepository.findById(id);

    if (!activity) {
      throw new AppError('Actividade do utilizador não encontrado', 404);
    }

    const verifyUser = await this.userRepository.findById(user_id);

    if (!verifyUser) {
      throw new AppError('Id do utilizador não encontrado', 404);
    }

    activity.whitch_food_ate = whitch_food_ate;
    activity.whitch_food_drank = whitch_food_drank;
    activity.smoked = smoked;
    activity.description = description;
    activity.user_id = verifyUser.id;

    await this.activityRepository.save(activity);

    return activity;
  }
}

export default UpdateActivityService;