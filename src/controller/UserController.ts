import { Request, Response } from 'express';
import CreateUserService from '../services/user/CreateUserService';
import UserRepository from '../repositories/UserRepository';
import EnableUserService from '../services/user/EnableUserService';
import DeleteUserervice from '../services/user/DeleteUserService';
import UpdateUserService from '../services/user/UpdateUserService';
import ShowUserService from '../services/user/ShowUserService';
import logger from '../logs';

interface IUser {
  password?: string;
}

class UserController {

  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UserRepository();

    const users = await usersRepository.findAll();

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userRepository = new UserRepository();
    const userService = new ShowUserService(userRepository);

    const user = await userService.execute(id);

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, nif, email, password, birthday, gender, phone, photo, street, house_number, post_code, city, country_id, aboutme
    } = request.body;

    const userRespository = new UserRepository();
    const createUser = new CreateUserService(userRespository);

    const user = await createUser.execute({
      name,
      nif,
      email,
      password,
      birthday,
      gender,
      phone,
      photo,
      street,
      house_number,
      post_code,
      city,
      country_id,
      aboutme
    });

    const deleteUserPwd: IUser = { password: user.password };
    delete deleteUserPwd.password; //Para nao retornar a senha do usuario 

    return response.json(user);
  }

  public async updates(request: Request, response: Response): Promise<Response | undefined> {
    const { id } = request.params;
    try {
      const { name, nif, email, password, birthday, gender, phone, photo, street, house_number, post_code, city, country_id, aboutme } = request.body;
      console.log(request.body)
      logger.info(' name:' + name + ' email:' + email + ' password:' + password)
      const userRepository = new UserRepository();
      const updateUser = new UpdateUserService(userRepository);

      const user = await updateUser.execute({
        id,
        name,
        nif,
        email,
        password,
        birthday,
        gender,
        phone,
        photo,
        street,
        house_number,
        post_code,
        city,
        country_id,
        aboutme
      });
      const deleteUserPwd: IUser = { password: user.password };
      delete deleteUserPwd.password; //Para nao retornar a senha do usuario 

      return response.json(user);
    } catch (error) {
      logger.error(error)
    }
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const userRepository = new UserRepository();

    const users = await userRepository.searcUserByName(name?.toString() || '');

    return response.json(users);
  }


  public async enable(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const userRespository = new UserRepository();
    const enableUser = new EnableUserService(userRespository);

    const user = await enableUser.execute({
      id,
    });

    const deleteUserPwd: IUser = { password: user.password };
    delete deleteUserPwd.password;

    return response.json(user);
  }

  public async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookRepository = new UserRepository();
    const destroyBook = new DeleteUserervice(bookRepository);

    await destroyBook.execute(id);

    return response.status(204).send(); //204 - no content
  }
}

export default UserController;