import IActivityRepository from '../../repositories/ActivityRepository/IActivityRepository';
import {Activity} from '../../models/Activity';

class ListAllActivityOfUserService {
  private activityRepository: IActivityRepository;

  constructor(activityRepository: IActivityRepository) {
    this.activityRepository = activityRepository;
  }

  public async execute(user_id: string): Promise<Activity[]> {
    const activity = await this.activityRepository.findAllUserActivity(user_id);

    return activity;
  }
}

export default ListAllActivityOfUserService;