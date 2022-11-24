import { AxiosResponse } from 'axios';
import { StudentType } from '../../types/index.dto';
import { http } from '../http';

class StudentService {
  async getAll() {
    const responce: AxiosResponse<[StudentType]> = await http.get('students');
    return responce.data;
  }
}

export default StudentService;
