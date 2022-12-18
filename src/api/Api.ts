import GroupService from './services/group.service';
import StudentService from './services/allStudents.service';
import MentorService from './services/mentors.service';
import DirectionService from './services/direction.service';

const Api = {
  group: new GroupService(),
  student: new StudentService(),
  mentor: new MentorService(),
  direction: new DirectionService()
};

export default Api;
