import { Activity } from '../../models/Activity';
import ICreateActivityDTO from '../../dtos/ICreateActivityDTO';

export default interface IActivityRepository {
  findAll(): Promise<Activity[]>;
  findById(id: string): Promise<Activity | undefined>;
  searchActivityByName(whitch_food_ate: string, whitch_food_drank: string, smoked: string): Promise<Activity[]>;
  create(createBody_UserDTO: ICreateActivityDTO): Promise<Activity>;
  save(activity: Activity): Promise<Activity>;
  delete(id: string): Promise<void>;
}