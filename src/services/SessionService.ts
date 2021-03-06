import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';
import User from '../models/User';
import AppError from '../errors/AppError';
import Cryptr from 'cryptr';
import base64 from 'base-64';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

interface IUser {
  password?: string;
}


class SessionService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Credenciais inválidas', 401);
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new AppError('Credenciais inválidas', 401);
    }

    if (!user.active) {
      throw new AppError('Usuário inativo', 401);
    }

    const token = sign({}, process.env.APP_SECRET as string, {
      expiresIn: '1d',
    });

    /* var decodedData = base64.decode('$2a$08$GZjVQWjPRkcdhy8mOdReAeqQrLVsew6GOavy4O4PGhS4GJsDRxxBO');
    console.log(decodedData); */

    const deleteUserPwd: IUser = { password: user.password };
    delete deleteUserPwd.password;


    /* const cryptr = new Cryptr('$2a$08$GZjVQWjPRkcdhy8mOdReAeqQrLVsew6GOavy4O4PGhS4GJsDRxxBO');

    const decryptedString = cryptr.decrypt('$2a$08$GZjVQWjPRkcdhy8mOdReAeqQrLVsew6GOavy4O4PGhS4GJsDRxxBO');
    console.log(decryptedString); */

    return {
      token,
      user,
    };
  }
}

export default SessionService;