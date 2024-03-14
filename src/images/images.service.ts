import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';

@Injectable()
export class ImagesService {
  constructor(private apiService: ApiService) {}

  async getImage(name: string): Promise<string> {
    const apiKey = 'icdeMV2oXzfgw35g0Hk0nlnqDN1BkGNFSu1PmsX8voenETBfPySlAdcg';
    const url = `https://api.pexels.com/v1/search?query=${name}&per_page=1`;

    const result = await this.apiService.fetchData(url, apiKey);

    return result.photos[0].src.large;
  }
}
