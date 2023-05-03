import CampanhasModel from '../models/companhas.model';

export default class CampanhasService {
  campanhasModel = new CampanhasModel();

  async createCampanhas(campanha: any) {
    const campanhaCreated = await this.campanhasModel.createCampanhas(campanha);

    return campanhaCreated;
  }
}