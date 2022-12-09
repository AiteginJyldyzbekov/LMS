import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DirectionsIcon from '@mui/icons-material/Directions';
import { SideBarLink } from '../types/types';

export const admin: SideBarLink[] = [
  {
    title: 'SideBar.Groups',
    Icon: GroupsIcon,
    path: '/',
    id: 1,
  },
  {
    title: 'SideBar.Mentors',
    Icon: SupervisorAccountIcon,
    path: '/mentors',
    id: 0,
  },
  {
    title: 'SideBar.Students',
    Icon: GroupIcon,
    path: '/students',
    id: 2,
  },
  {
    title: 'SideBar.Direction',
    Icon: DirectionsIcon,
    path: '/direction',
    id: 3,
  },
];

export const mentor: SideBarLink[] = [
  {
    title: 'SideBar.Student_book',
    Icon: BookIcon,
    path: '/studentbook',
    id: 0,
  },
  {
    title: 'SideBar.Study_plan',
    Icon: LibraryBooksIcon,
    path: '/study-plan',
    id: 1,
  },
  {
    title: 'SideBar.Home_works',
    Icon: HomeWorkIcon,
    path: '/home-works',
    id: 2,
  },
];

export const student: SideBarLink[] = [
  {
    title: 'SideBar.Dashboard',
    Icon: GroupsIcon,
    path: '/',
    id: 0,
  },
  {
    title: 'SideBar.Study_plan',
    Icon: LibraryBooksIcon,
    path: '/study-plan',
    id: 1,
  },
  {
    title: 'SideBar.Home_works',
    Icon: HomeWorkIcon,
    path: '/home-works',
    id: 2,
  },
];
