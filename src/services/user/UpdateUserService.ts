import AppError from '../../errors/AppError';
import IUserRepository from '../../repositories/IUserRepository';
import User from '../../models/User';
import { hash } from 'bcryptjs';

interface IRequest {
  id: string;
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

class UpdateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({
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
  }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(id);
    const passwordHash = await hash(password, 8);

    if (!user) {
      throw new AppError('Não foi encontrado este utilizador no sistema', 404);
    }

    if (email !== user.email) {
      const verifyEmail = this.userRepository.findByEmail(email);

      if (await verifyEmail) {
        throw new AppError('Este email já foi utilizado! Tente outro', 422);
      }
    }

    user.name = name;
    user.nif = nif;
    user.email = email;
    user.password = passwordHash;
    user.birthday = birthday;
    user.gender = gender;
    user.phone = phone;
    user.photo = photo;
    user.street = street;
    user.house_number = house_number;
    user.post_code = post_code;
    user.city = city;
    user.country_id = country_id;
    user.aboutme = aboutme;

    await this.userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;