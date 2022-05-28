
import { hash } from 'bcryptjs';
import IActivityRepository from '../../repositories/ActivityRepository/IActivityRepository';
import ActivityRepository from '../../repositories/ActivityRepository/ActivityRepository';
import { Activity } from '../../models/Activity';

interface Request {
  whitch_food_ate: string;
  whitch_food_drank: string;
  smoked: string;
  description: string;
  user_id: string;
}

class CreateActivityService {
  private activityRepository: IActivityRepository;

  constructor(activityRepository: ActivityRepository) {
    this.activityRepository = activityRepository;
  }

  public async execute({
    whitch_food_ate,
    whitch_food_drank,
    smoked,
    description,
    user_id }: Request): Promise<Activity> {


    const activity = await this.activityRepository.create({
      whitch_food_ate,
      whitch_food_drank,
      smoked,
      description,
      user_id,
    });
    return activity;
  }
}

export default CreateActivityService;