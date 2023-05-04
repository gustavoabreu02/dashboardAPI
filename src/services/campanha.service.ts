import { ICampanha } from '../interfaces';
import CampanhasModel from '../models/companhas.model';

export default class CampanhasService {
  campanhasModel = new CampanhasModel();

  async createCampanhas(campanha: ICampanha) {
    const campanhaCreated = await this.campanhasModel.createCampanhas(campanha);

    return campanhaCreated;
  }
}