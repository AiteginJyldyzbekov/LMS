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
    path: '/',
    id: 1,
  },
  {
    title: 'Mentors',
    Icon: SupervisorAccountIcon,
    path: '/mentors',
    id: 0,
  },
  {
    title: 'Students',
    Icon: GroupIcon,
    path: '/students',
    id: 2,
  },
];

export const mentor: SideBarLink[] = [
  {
    title: 'Student Book',
    Icon: BookIcon,
    path: '/studentbook',
    id: 0,
  },
  {
    title: 'Study Plan',
    Icon: LibraryBooksIcon,
    path: '/study-plan',
    id: 1,
  },
  {
    title: 'Home Works',
    Icon: HomeWorkIcon,
    path: '/home-works',
    id: 2,
  },
];

export const student: SideBarLink[] = [
  {
    title: 'Dashboard',
    Icon: GroupsIcon,
    path: '/',
    id: 0,
  },
  {
    title: 'Study Plan',
    Icon: LibraryBooksIcon,
    path: '/study-plan',
    id: 1,
  },
  {
    title: 'Home Works',
    Icon: HomeWorkIcon,
    path: '/home-works',
    id: 2,
  },
];
