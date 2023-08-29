import { Request, Router, Response } from 'express';
import ClassificationController from '../controllers/ClassficationController';

const classficationController = new ClassificationController();

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => classficationController.getClassifications(req, res),
);

export default router;
