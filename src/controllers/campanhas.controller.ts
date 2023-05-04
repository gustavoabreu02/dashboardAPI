import { Request, Response } from 'express';
import fs from 'fs';
import CampanhasService from '../services/campanha.service';

export default class CampanhasController {
  campanhasService = new CampanhasService();

  async createCampanhas(req: Request, res: Response) {
    const { file } = req;

    const { name, sup } = req.headers; 
    
    if (!file) {
      res.status(400).send('Nenhum arquivo foi enviado!');
      return;
    }
  
    const filePath = `${file.path}.xlsx`;

    console.log({ name, sup, file: filePath });
    
    const campanhaCreated = await this.campanhasService.createCampanhas(
      { name, sup, file: filePath },
    );
  
    fs.rename(file.path, filePath, (err) => {
      if (err) {
        throw err;
      }
      res.status(201).json(campanhaCreated);
    });
  }
}