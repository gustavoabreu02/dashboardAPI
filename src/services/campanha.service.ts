import { ICampanha, ICampanhaFile, ICampanhaSup } from '../interfaces';
import CampanhasModel from '../models/companhas.model';

export default class CampanhasService {
  campanhasModel = new CampanhasModel();

  async createCampanhas(campanha: ICampanha) {
    const campanhaCreated = await this.campanhasModel.createCampanhas(campanha);

    return campanhaCreated;
  }

  async getCampanhasSup(sup: ICampanhaSup): Promise<ICampanha[]> {
    const campanhas = await this.campanhasModel.getCampanhasSup(sup);
    return campanhas;
  }

  async getAllCampanhas(): Promise<ICampanha[]> {
    const allCampanhas = await this.campanhasModel.getAllCampanhas();
    return allCampanhas;
  }

  async removeCampanha(file: ICampanhaFile) {
    const removeCampanha = await this.campanhasModel.removeCampanha(file);
    return removeCampanha;
  }
}