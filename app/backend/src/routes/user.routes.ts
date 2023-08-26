import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import ValidateLogin from '../middlewares/ValidateFields';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  ValidateLogin.validateFields,
  (req: Request, res: Response) => userController.getUserByEmail(req, res),
);

export default router;
