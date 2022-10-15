import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import {
  adminRoutes,
  mentorRoutes,
  notAuthRoutes,
  RouteType,
  studentRoutes,
} from '../constants/routes';
import { UserRole } from '../types/types';

const useRoutes = (): ReactNode => {
  // TODO: implement with redux auth role state
  const role = 'admin'; // 'mentor' | 'student' | 'admin'
  const auth = false;

  const renderComponent = ({ path, Component }: RouteType) => (
    <Route path={path} element={<Component />} />
  );

  const renderAdminRoutes = () => adminRoutes.map(renderComponent);
  const renderMentorRoutes = () => mentorRoutes.map(renderComponent);
  const renderStudentRoutes = () => studentRoutes.map(renderComponent);
  const renderNotAuthRoutes = () => notAuthRoutes.map(renderComponent);

  if (!auth) return renderNotAuthRoutes();
  if (role === UserRole.admin) return renderAdminRoutes();
  if (role === UserRole.mentor) return renderMentorRoutes();
  return renderStudentRoutes();
};

export default useRoutes;
