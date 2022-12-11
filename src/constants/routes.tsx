import React from 'react';
import LoginPage from '../pages/loginpage/Loginpage';
import CreateGroupPage from '../pages/ADMIN/group/CreateGroupPage';
import CreateMentor from '../pages/ADMIN/mentor/CreateMentorPage';
import GroupsPage from '../pages/ADMIN/group/GroupsPage';
import AdminMentorsPage from '../pages/ADMIN/mentor/MentorsPageAdmin';
import GroupPageAdmin from '../pages/ADMIN/group/GroupDetailPage';
import AllStudentssupPageAdmin from '../pages/ADMIN/student/AllStudentsPageAdmin';
import GroupsPageMentor from '../pages/MENTOR/groupsPageMentor/GroupsPageMentor';
import HomeWorks from '../pages/MENTOR/homeWorksMentor/HomeWorksMentor';
import StudyPlanMentor from '../pages/MENTOR/studyPlanMentor/StudyPlanMentor';
import CreateStudentPage from '../pages/ADMIN/student/CreateStudentPage';
import StudyPlanStudent from '../pages/STUDENT/studyPlanStudent/StudyPlanStudnet';
import HomeWorksStudent from '../pages/STUDENT/homeWorksStudent/HomeWorksStudent';
import ComingSoon from '../pages/ComingSoon';
import DirectionPage from '../pages/directionPageForAdmin/DirectionPage';
import StudentsDashboard from '../pages/STUDENT/studentsDashboard/StudentsDashboard';
import CreateDurationPage from '../pages/ADMIN/duration/CreateDurationPage';

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
    Component: CreateGroupPage,
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
    Component: AllStudentssupPageAdmin,
  },
  {
    title: 'Student detail page',
    path: '/student/:id',
    Component: ComingSoon,
  },
  {
    title: 'Direction page',
    path: '/direction',
    Component: DirectionPage,
  },
  {
    title: 'Create Duration page',
    path: '/duration/create',
    Component: CreateDurationPage,
  },
];

export const mentorRoutes: RouteType[] = [
  {
    title: 'Student Book Page',
    path: '/',
    Component: GroupsPageMentor,
  },
  {
    title: 'Home works Page',
    path: '/home-works',
    Component: HomeWorks,
  },
  {
    title: 'Study plan Page',
    path: '/study-plan',
    Component: StudyPlanMentor,
  },
  {
    title: 'Student Book Detail Page',
    path: '/studentbook/:id',
    Component: ComingSoon,
  },
];

export const studentRoutes: RouteType[] = [
  {
    title: 'Home Page',
    path: '/',
    Component: StudentsDashboard,
  },
  {
    title: 'Study Plan Page',
    path: '/study-plan',
    Component: StudyPlanStudent,
  },
  {
    title: 'Home Works Page',
    path: '/home-works',
    Component: HomeWorksStudent,
  },
];

export const notAuthRoutes: RouteType[] = [
  {
    title: 'Login Page',
    path: '/',
    Component: LoginPage,
  },
];
