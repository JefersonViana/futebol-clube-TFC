import { Request, Response } from 'express';
import ClassificationService from '../services/ClassificationService';

export default class ClassificationController {
  private classificationService: ClassificationService;

  constructor() {
    this.classificationService = new ClassificationService();
  }

  public async getClassifications(req: Request, res: Response):Promise<Response> {
    const url = req.baseUrl.split('/');
    const { data } = await this.classificationService
      .getClassifications(url[2] === undefined ? 'leaderboard' : url[2]);
    return res.status(200).json(data);
  }
}
