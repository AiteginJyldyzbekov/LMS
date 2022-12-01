import { AxiosResponse } from 'axios';
import { GroupType } from '../../types/index.dto';
import { http } from '../http';

class GroupService {
  async getAll() {
    const responce: AxiosResponse<GroupType[]> = await http.get('groups');
    return responce.data;
  }

  async get(id: number | string) {
    const responce: AxiosResponse<GroupType> = await http.get(`groups/${id}`);
    return responce.data;
  }
}

export default GroupService;
