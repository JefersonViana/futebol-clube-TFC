import { SignOptions, sign } from 'jsonwebtoken';
import { IUser } from '../interfaces/users/IUser';

const config: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = 'projectTrybeSoccerClub';

export default function generateToken(user: IUser): string {
  const token = sign(user, secret, config);
  return token;
}
