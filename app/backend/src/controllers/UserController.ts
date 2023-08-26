import { compareSync } from 'bcryptjs';
import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import generateToken from '../utils/generateToken';

export default class TeamController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async getUserByEmail(req: Request, res: Response) {
    const { email, password } = req.body;
    const { status, data } = await this.userService.getUserByEmail(email);
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    if (!compareSync(password, data.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const { id, username, role, email: useEmail, password: usePassword } = data;
    const token = generateToken({ id, username, role, email: useEmail, password: usePassword });
    return res.status(mapStatusHTTP(status)).json({ token });
  }
}
