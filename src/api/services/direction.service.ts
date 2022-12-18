import { AxiosResponse } from "axios";
import { DirectionType, GroupType } from "../../types/index.dto";
import { http } from "../http";

class DirectionService {
    async getAll() {
        const responce: AxiosResponse<DirectionType[]> = await http.get('direction');
        return responce.data;
    }
    async get(id: number | string) {
        const responce: AxiosResponse<DirectionType> = await http.get(`direction/${id}`);
        return responce.data;
    }
}

export default DirectionService;