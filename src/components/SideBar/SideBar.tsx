import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/hook';
import { admin, student, mentor } from '../../constants/sideBar';
import RoleCard from './RoleCards';

const SideBar: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useAppSelector((state) => state.auth);
  const role: string = data?.role || '';

  if (role === t('SideBar.Admin')) {
    return <RoleCard role={admin} />;
  }
  if (role === t('SideBar.Mentor')) {
    return <RoleCard role={mentor} />;
  }
  return <RoleCard role={student} />;
};

export default SideBar;
