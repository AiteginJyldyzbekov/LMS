import GroupService from './services/group.service';
import StudentService from './services/allStudents.service';

const Api = {
  group: new GroupService(),
  student: new StudentService(),
};

export default Api;
