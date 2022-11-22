import { AxiosResponse } from 'axios';
import { AllStudentsType } from '../../types/index.dto';
import { http } from '../http';

class AllStudentsService {
  async getAll() {
    const responce: AxiosResponse<[AllStudentsType]> = await http.get(
      'students'
    );
    return responce.data;
  }
}

export default AllStudentsService;
