import { Router } from 'express';
import teamRouter from './team.routes';
import userRouter from './user.routes';
import loginRouter from './login.routes';
import matchesRouter from './matches.routes';
import classificationRouter from './classification.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/matches', matchesRouter);
router.use('/login', userRouter);
router.use('/login/role', loginRouter);
router.use('/leaderboard/home', classificationRouter);
router.use('/leaderboard/away', classificationRouter);
router.use('/leaderboard', classificationRouter);

export default router;
