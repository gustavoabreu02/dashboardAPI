import { Request, Response } from 'express';
import CampanhasService from '../services/campanha.service';

export default class CampanhasController {
  campanhasService = new CampanhasService();

  async createCampanhas(req: Request, res: Response) {
    const campanhaCreated = await this.campanhasService.createCampanhas(req.file);
    res.status(201).json(campanhaCreated);
  }
}