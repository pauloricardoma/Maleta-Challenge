import HttpClient from '../utils/HttpClient';

class ObrasService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:8888');
  }

  async listObras() {
    return this.httpClient.get('/api/listarObras/obras');
  }
}

export default new ObrasService();
