import Body_User from '../../models/Body_User';
import ICreateBody_UserDTO from '../../dtos/ICreateBody_UserDTO';

export default interface IBody_UserRepository {
  findAll(): Promise<Body_User[]>;
  findById(id: string): Promise<Body_User | undefined>;
  searchBody_UserByName(Body_User_heights: string, Body_User_weigh: string, Body_User_blood: string): Promise<Body_User[]>;
  create(createBody_UserDTO: ICreateBody_UserDTO): Promise<Body_User>;
  save(body_user: Body_User): Promise<Body_User>;
  delete(id: string): Promise<void>;
}