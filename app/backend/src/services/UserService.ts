import { IUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';
import UserModel from '../models/UserModel';
import { ServiceResponse } from './ServiceResponse';

export default class UserService {
  private userModel: IUserModel;

  constructor(user: IUserModel = new UserModel()) {
    this.userModel = user;
  }

  public async getUserByEmail(email: string): Promise<ServiceResponse<IUser>> {
    const getUser = await this.userModel.findByEmail(email);
    if (!getUser) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    return { status: 'SUCCESSFUL', data: getUser };
  }
}
