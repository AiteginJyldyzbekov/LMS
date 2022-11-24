import GroupService from './services/group.service';
import MentorService from './services/mentors.service';
import StudentService from './services/allStudents.service';

const Api = {
  group: new GroupService(),
  student: new StudentService(),
  mentor: new MentorService(),
};

export default Api;
