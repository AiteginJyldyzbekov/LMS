import GroupService from './services/group.service';
import StudentService from './services/allStudents.service';
import MentorService from './services/mentors.service';

const Api = {
  group: new GroupService(),
  student: new StudentService(),
  mentor: new MentorService(),
};

export default Api;
