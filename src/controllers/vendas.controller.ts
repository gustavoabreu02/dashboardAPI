import { Request, Response } from 'express';
/* import OrderService from '../services/vendas.service'; */
import VendasService from '../services/vendas.service';

export default class VendasController {
  vendasService = new VendasService();

  async getVendasSup(req: Request, res: Response) {
    const vendas = await this.vendasService.getVendasSup(req.body);
    res.status(200).json(vendas);
  }

  async getVendasRCA(req: Request, res: Response) {
    const vendasRCA = await this.vendasService.getVendasRCA(req.body);
    res.status(200).json(vendasRCA);
  }  

/*   async ordersCreate(req: Request, res: Response) {
    const { message, code } = await this.ordersService.ordersCreate(req.body);
    if (code) return res.status(code).json({ message });
    res.status(201).json(message);
  } */
}