import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

const secret = 'projectTrybeSoccerClub';

class ValidateToken {
  static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    try {
      const payload = verify(authorization.replace('Bearer ', ''), secret);
      req.body.payload = payload;
      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}

export default ValidateToken;
