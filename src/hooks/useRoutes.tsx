import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
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
  const auth = true;
  const { data } = useAppSelector((state) => state.auth);
  const role = data?.role; // 'mentor' | 'student' | 'admin'

  const renderComponent = ({ path, Component }: RouteType) => (
    <Route key={path} path={path} element={<Component />} />
  );
  const renderContainerRout = (routes: RouteType[]) => (
    <>
      {auth && <h2>Navbar</h2>}
      <Routes>
        {routes.map(renderComponent)}
        <Route path="*" element="404 PAGE" />
      </Routes>
    </>
  );

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
