import { Request, Response } from 'express';
import ClassificationService from '../services/ClassificationService';

export default class ClassificationController {
  private classificationService: ClassificationService;

  constructor() {
    this.classificationService = new ClassificationService();
  }

  public async getClassifications(_req: Request, res: Response):Promise<Response> {
    const { data } = await this.classificationService.getClassifications();
    return res.status(200).json(data);
  }
}
