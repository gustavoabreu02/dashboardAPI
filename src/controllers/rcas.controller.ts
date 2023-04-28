import { Request, Response } from 'express';
import RcasService from '../services/rcas.service';

export default class RcasController {
  rcasService = new RcasService();

  async getRcaCodigo(req: Request, res: Response) {
    const rcas = await this.rcasService.getRcaCodigo(req.body);
    res.status(200).json(rcas);
  }

/*   async createProducts(req: Request, res: Response) {
    const { amount, name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    if (!amount) return res.status(400).json({ message: '"amount" is required' });
    const { message, code } = await this.productsService.createProducts(req.body);
    if (code) {
      res.status(code).json({ message });
    }
    res.status(201).json(message);
  } */
}