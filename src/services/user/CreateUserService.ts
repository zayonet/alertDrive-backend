import { hash } from 'bcryptjs';
import IUserRepository from '../../repositories/IUserRepository';
import UserRepository from '../../repositories/UserRepository';
import User from '../../models/User';

interface Request {
  name: string;
  nif: string;
  email: string;
  password: string;
  birthday: string;
  gender: string;
  phone: string;
  photo: string;
  street: string;
  house_number: string;
  post_code: string;
  city: string;
  country_id: string;
  aboutme: string;
}

class CreateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ name, nif, email, password, birthday, gender, phone, photo, street, house_number, post_code, city, country_id, aboutme }: Request): Promise<User> {
    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      nif,
      email,
      password: passwordHash,
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
    return user;
  }
}

export default CreateUserService;