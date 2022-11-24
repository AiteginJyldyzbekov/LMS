import { AxiosResponse } from 'axios';
import { MentorsType } from '../../types/index.dto';

import { http } from '../http';

class MentorsService {
  async getAll() {
    const responce: AxiosResponse<[MentorsType]> = await http.get('students');
    return responce.data;
  }
}

export default MentorsService;
