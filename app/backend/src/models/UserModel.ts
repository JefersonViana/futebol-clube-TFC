import SequelizeUser from '../database/models/SequelizeUser';
import { IUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findByEmail(email: string): Promise<IUser | null> {
    const dbData = await this.model.findOne({
      where: { email },
    });
    return dbData;
  }
}
