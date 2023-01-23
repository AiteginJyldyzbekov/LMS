import { NavBar } from '../types/types';
import home from '../../public/images/navbarStudent/home.svg';
import stady from '../../public/images/navbarStudent/stady.svg';
import reting from '../../public/images/navbarStudent/reting.svg';
import practicum from '../../public/images/navbarStudent/practicum.svg';
import career from '../../public/images/navbarStudent/career.svg';
import batle from '../../public/images/navbarStudent/batle.svg';

export const MenuStudents: NavBar[] = [
  {
    icon: home,
    title: 'NavbarStudent.main',
    alt: 'NavbarStudent.main',
    path: '/',
  },
  {
    icon: stady,
    title: 'NavbarStudent.stady',
    alt: 'NavbarStudent.stady',
    path: '/stady',
  },
  {
    icon: reting,
    title: 'NavbarStudent.reting',
    alt: 'NavbarStudent.reting',
    path: '/reting',
  },
  {
    icon: practicum,
    title: 'NavbarStudent.practicum',
    alt: 'NavbarStudent.practicum',
    path: '/practicum',
  },
  {
    icon: career,
    title: 'NavbarStudent.career',
    alt: 'NavbarStudent.career',
    path: '/career',
  },
  {
    icon: batle,
    title: 'NavbarStudent.batle',
    alt: 'NavbarStudent.batle',
    path: '/batle',
  },
];
