import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/loginpage/Loginpage';

export interface RouteType {
  title: string;
  path: string;
  Component: React.FC;
}

export const adminRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/login',
    Component: LoginPage,
  },
];

export const mentorRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: HomePage,
  },
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
    title: 'LoginPage',
    path: '/',
    Component: LoginPage,
  },
];
