import GroupService from './services/group.service';
import MentorsService from './services/mentors.service';

const Api = {
  group: new GroupService(),
  mentors: new MentorsService(),
};

export default Api;
