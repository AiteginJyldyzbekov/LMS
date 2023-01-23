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
    title: 'Главная',
    alt: 'home',
    path: '/',
  },
  {
    icon: stady,
    title: 'Учеба',
    alt: 'stady',
    path: '/stady',
  },
  {
    icon: reting,
    title: 'Рейтинг',
    alt: 'reting',
    path: '/reting',
  },
  {
    icon: practicum,
    title: 'Практика',
    alt: 'practicum',
    path: '/practicum',
  },
  {
    icon: career,
    title: 'Карьера',
    alt: 'career',
    path: '/career',
  },
  {
    icon: batle,
    title: 'Сраженик',
    alt: 'batle',
    path: '/batle',
  },
];
