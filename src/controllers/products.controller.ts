import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  productsService = new ProductsService();

  async getAllProducts(req: Request, res: Response) {
    const products = await this.productsService.getAllProducts();
    res.status(200).json(products);
  }

  async createProducts(req: Request, res: Response) {
    const { amount, name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    if (!amount) return res.status(400).json({ message: '"amount" is required' });
    const { message, code } = await this.productsService.createProducts(req.body);
    if (code) {
      res.status(code).json({ message });
    }
    res.status(201).json(message);
  }
}