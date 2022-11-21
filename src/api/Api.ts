import GroupService from './services/group.service';
import AllStudentsService from './services/allStudents.service';

const Api = {
  group: new GroupService(),
  allStudents: new AllStudentsService(),
};

export default Api;
