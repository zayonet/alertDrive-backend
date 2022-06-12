import { Request, Response } from 'express';
import CreateActivityService from '../services/activity/CreateActivityService';
import ActivityRepository from '../repositories/ActivityRepository/ActivityRepository';
import DeleteActivityService from '../services/activity/DeleteActivityService';
import logger from '../logs';
import ListAllActivityOfUserService from '../services/activity/ListAllActivitiesOfUserService';

class ActivityController {

  public async index(request: Request, response: Response): Promise<Response> {
    const activitiesRepository = new ActivityRepository();

    const activities = await activitiesRepository.findAll();

    return response.json(activities);
  }

  public async findAllUserActivity(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const activitiesRepository = new ActivityRepository();
    const activitiesService = new ListAllActivityOfUserService(
      activitiesRepository,
    );

    const activities = await activitiesService.execute(user_id);

    return response.json(activities);
  }

  /* public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const activitiesRepository = new ActivityRepository();
    const activitiesService = new ShowActivitieservice(activitiesRepository);
  
    const activities = await activitiesService.execute(id);
  
    return response.json(activities);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { whitch_food_ate,
      whitch_food_drank,
      smoked,
      description,
      user_id } = request.body;

    const activityRespository = new ActivityRepository();
    const createActivity = new CreateActivityService(activityRespository);

    const activity = await createActivity.execute({
      whitch_food_ate,
      whitch_food_drank,
      smoked,
      description,
      user_id,
    });

    return response.json(activity);
  }


  public async search(request: Request, response: Response): Promise<Response> {
    const { whitch_food_ate, whitch_food_drank, smoked } = request.query;
    const activityRepository = new ActivityRepository();

    const activitys = await activityRepository.searchActivityByName(whitch_food_ate?.toString() || '', whitch_food_drank?.toString() || '', smoked?.toString() || '');

    return response.json(activitys);
  }


  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const activityRepository = new ActivityRepository();
    const destroyActivity = new DeleteActivityService(activityRepository);

    await destroyActivity.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default ActivityController;