import GroupService from './services/group.service';
import MentorService from './services/mentors.service';

const Api = {
  group: new GroupService(),
  mentor: new MentorService(),
};

export default Api;
