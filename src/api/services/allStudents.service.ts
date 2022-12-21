import { AxiosResponse } from 'axios';
import { StudentType } from '../../types/index.dto';
import { http } from '../http';

class StudentService {
  async getAll() {
    const responce: AxiosResponse<[StudentType]> = await http.get('students');
    return responce.data;
  }

  async createStudent(data: StudentType) {
    const responce: AxiosResponse<StudentType> = await http.post(
      'students',
      data
    );
    return responce;
  }
}

export default StudentService;
