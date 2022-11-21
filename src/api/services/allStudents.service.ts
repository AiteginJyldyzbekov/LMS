import { AxiosResponse } from 'axios';
import { GroupType } from '../../types/index.dto';
import { http } from '../http';

class AllStudentsService {
  async getAll() {
    const responce: AxiosResponse<GroupType[]> = await http.get('students');
    return responce.data;
  }
}

export default AllStudentsService;
