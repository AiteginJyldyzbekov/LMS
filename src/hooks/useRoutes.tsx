import React, { ReactNode } from 'react';
import Page from '../components/Page/Page';
import {
  adminRoutes,
  mentorRoutes,
  notAuthRoutes,
  RouteType,
  studentRoutes,
} from '../constants/routes';
import { UserRole } from '../types/types';
import { useAppSelector } from './hook';

const useRoutes = (): ReactNode => {
  const { data, isAuth } = useAppSelector((state) => state.auth);
  const role = data?.role; // 'mentor' | 'student' | 'admin'

  const renderContainerRout = (routes: RouteType[]) => <Page routes={routes} />;

  if (!isAuth) return renderContainerRout(notAuthRoutes);
  if (role) {
    if (role === UserRole.admin) return renderContainerRout(adminRoutes);
    if (role === UserRole.mentor) return renderContainerRout(mentorRoutes);
    if (role === UserRole.student) return renderContainerRout(studentRoutes);
  }
  return renderContainerRout(notAuthRoutes);
};

export default useRoutes;
