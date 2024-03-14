import { ApiService } from 'src/api/api.service';
export declare class ImagesService {
    private apiService;
    constructor(apiService: ApiService);
    getImage(name: string): Promise<string>;
}
