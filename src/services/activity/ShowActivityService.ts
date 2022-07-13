import AppError from '../../errors/AppError';
import IActivityRepository from '../../repositories/ActivityRepository/IActivityRepository';
import ActivityRepository from '../../repositories/ActivityRepository/ActivityRepository';
import { Activity } from '../../models/Activity';

class ShowActivityService {
  private activityRepository: IActivityRepository;

  constructor(activityRepository: IActivityRepository) {
    this.activityRepository = activityRepository;
  }

  public async execute(id: string): Promise<Activity | undefined> {
    const activity = await this.activityRepository.findById(id);

    if (!activity) {
      throw new AppError('Actividade do utilizador não encontrado', 404);
    }

    return activity;
  }
}

export default ShowActivityService;