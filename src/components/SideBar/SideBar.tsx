import React from 'react';
import { useAppSelector } from '../../hooks/hook';
import { admin, student, mentor } from '../../constants/sideBar';
import RoleCard from './RoleCards';
import { UserRole } from '../../types/types';

const SideBar: React.FC = () => {
  const { data } = useAppSelector((state) => state.auth);
  const role: string = data?.role || '';

  if (role === UserRole.admin) {
    return <RoleCard role={admin} />;
  }
  if (role === UserRole.mentor) {
    return <RoleCard role={mentor} />;
  }
  return <RoleCard role={student} />;
};

export default SideBar;
