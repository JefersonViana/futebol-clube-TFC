import { Request, Response } from 'express';
import ClassificationService from '../services/ClassificationService';

export default class ClassificationController {
  private classificationService: ClassificationService;

  constructor() {
    this.classificationService = new ClassificationService();
  }

  public async getClassifications(req: Request, res: Response):Promise<Response> {
    const url = req.baseUrl.includes('home');
    const { data } = await this.classificationService.getClassifications(url);
    return res.status(200).json(data);
  }
}
