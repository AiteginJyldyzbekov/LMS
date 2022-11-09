import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/loginpage/Loginpage';
import GroupPage from '../pages/groupPage/GroupPage';
import CreateMentor from '../pages/createMentorPage/CreateMentor';
import GroupsPage from '../pages/groupsPage/GroupsPage';
import AdminMentorsPage from '../pages/mentorsPageAdmin/AdminMentorsPage';
import GroupPageAdmin from '../pages/adminGroupPage/GroupPageAdmin';
import AllStudentssupAdmin from '../pages/allStudentsPageForSupAdmin/AllStudentssupAdmin';
import GroupsPageMentor from '../pages/groupsPageMentor/GroupsPageMentor';
import HomeWorks from '../pages/homeWorksMentor/HomeWorksMentor';
import CreateStudentPage from '../pages/studentPage/CreateStudentPage';
import StudentBookForMentor from '../pages/studentBookForMentor/StudentBookForMentor';

export interface RouteType {
  title: string;
  path: string;
  Component: React.FC;
}

export const adminRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: GroupsPage,
  },
  {
    title: 'Create Mentor Page',
    path: '/createMentor',
    Component: CreateMentor,
  },
  {
    title: 'Create Group',
    path: '/createGroup',
    Component: GroupPage,
  },
  {
    title: 'Create Group',
    path: '/createStudent',
    Component: CreateStudentPage,
  },
  {
    title: 'Mentors',
    path: '/mentors',
    Component: AdminMentorsPage,
  },
  {
    title: 'Group',
    path: '/group/:id',
    Component: GroupPageAdmin,
  },
  {
    title: 'All Students Page',
    path: '/students',
    Component: AllStudentssupAdmin,
  },
];

export const mentorRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: HomePage,
  },
  {
    title: 'Group Page',
    path: '/group',
    Component: GroupsPageMentor,
  },
  {
    title: 'Home works Page',
    path: '/home-works',
    Component: HomeWorks,
  },
  {
    title: 'Student Book Page',
    path: '/studentbook',
    Component: StudentBookForMentor
  }
];

export const studentRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: HomePage,
  },
];

export const notAuthRoutes: RouteType[] = [
  {
    title: 'Login Page',
    path: '/',
    Component: LoginPage,
  },
];
