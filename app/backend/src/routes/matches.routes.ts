import { Request, Router, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import ValidateToken from '../middlewares/ValidateToken';

const matchesController = new MatchesController();

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => matchesController.getMatchesFiltered(req, res),
);

router.patch(
  '/:id/finish',
  ValidateToken.validateToken,
  (req: Request, res: Response) => matchesController.update(req, res),
);

router.patch(
  '/:id',
  ValidateToken.validateToken,
  (req: Request, res: Response) => matchesController.updateMatchInProgress(req, res),
);

router.post(
  '/',
  ValidateToken.validateToken,
  (req: Request, res: Response) => matchesController.insert(req, res),
);

export default router;
