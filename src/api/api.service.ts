import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApiService {
  async fetchData(url: string, authorization: string): Promise<any> {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: authorization,
        },
      });

      return response.data;
    } catch (error) {
      // Handle error
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
}
