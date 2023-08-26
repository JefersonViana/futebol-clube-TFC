import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { IUser } from '../interfaces/users/IUser';

export default class LoginController {
  private loginService: UserService;

  constructor() {
    this.loginService = new UserService();
  }

  public async getUser(req: Request, res: Response):Promise<Response> {
    const { email } = req.body.payload;
    const { data } = await this.loginService.getUserByEmail(email);
    const { role } = data as IUser;
    return res.status(200).json({ role });
  }
}
