import { AxiosResponse } from 'axios';
import { MentorType } from '../../types/index.dto';

import { http } from '../http';

class MentorService {
    async getAll() {
        const responce: AxiosResponse<[MentorType]> = await http.get('mentors');
        return responce.data;
    }
}

export default MentorService;
