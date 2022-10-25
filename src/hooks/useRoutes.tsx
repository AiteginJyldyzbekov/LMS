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
  // TODO: implement with redux auth role state
  const auth = false;
  const { data } = useAppSelector((state) => state.auth);
  const role = data?.role; // 'mentor' | 'student' | 'admin'

  const renderContainerRout = (routes: RouteType[]) => <Page routes={routes} />;

  const renderAdminRoutes = () => renderContainerRout(adminRoutes);
  const renderMentorRoutes = () => renderContainerRout(mentorRoutes);
  const renderStudentRoutes = () => renderContainerRout(studentRoutes);
  const renderNotAuthRoutes = () => renderContainerRout(notAuthRoutes);

  if (!auth) return renderNotAuthRoutes();
  if (role) {
    if (role === UserRole.admin) return renderAdminRoutes();
    if (role === UserRole.mentor) return renderMentorRoutes();
    return renderStudentRoutes();
  }
  return renderNotAuthRoutes();
};

export default useRoutes;
