import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { SideBarLink } from '../types/types';

export const admin: SideBarLink[] = [
  {
    title: 'Groups',
    Icon: GroupsIcon,
    puth: '/',
    id: 1,
  },
  {
    title: 'Mentors',
    Icon: SupervisorAccountIcon,
    puth: '/mentors',
    id: 0,
  },
  {
    title: 'Students',
    Icon: GroupIcon,
    puth: '/students',
    id: 2,
  },
];

export const mentor: SideBarLink[] = [
  {
    title: 'Student Book',
    Icon: BookIcon,
    puth: '/student-book',
    id: 0,
  },
  {
    title: 'Study Plan',
    Icon: LibraryBooksIcon,
    puth: '/study-plan',
    id: 1,
  },
  {
    title: 'Home Works',
    Icon: HomeWorkIcon,
    puth: '/home-works',
    id: 2,
  },
];

export const student: SideBarLink[] = [
  {
    title: 'Groups',
    Icon: GroupsIcon,
    puth: '/groups',
    id: 0,
  },
  {
    title: 'Study Plan',
    Icon: LibraryBooksIcon,
    puth: '/study-plan',
    id: 1,
  },
  {
    title: 'Home Works',
    Icon: HomeWorkIcon,
    puth: '/home-works',
    id: 2,
  },
];
