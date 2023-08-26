import { Request, Router, Response } from 'express';
import LoginController from '../controllers/LoginController';
import ValidateToken from '../middlewares/ValidateToken';

const loginController = new LoginController();

const router = Router();

router.get(
  '/',
  ValidateToken.validateToken,
  (req: Request, res: Response) => loginController.getUser(req, res),
);

export default router;
