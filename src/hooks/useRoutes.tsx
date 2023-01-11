import React, { ReactNode } from 'react';
import Page from '../components/Page/Page';
import StudentPage from '../components/Page/StudentPage';
import {
  adminRoutes,
  mentorRoutes,
  notAuthRoutes,
  studentRoutes,
} from '../constants/routes';
import { UserRole } from '../types/types';
import { useAppSelector } from './hook';

const useRoutes = (): ReactNode => {
  const { data, isAuth } = useAppSelector((state) => state.auth);
  const role = data?.role; // 'mentor' | 'student' | 'admin'

  if (!isAuth) return <Page routes={notAuthRoutes} />;
  if (role) {
    if (role === UserRole.admin) return <Page routes={adminRoutes} />;
    if (role === UserRole.mentor) return <Page routes={mentorRoutes} />;
    if (role === UserRole.student)
      return <StudentPage routes={studentRoutes} />;
  }
  return <Page routes={notAuthRoutes} />;
};

export default useRoutes;
