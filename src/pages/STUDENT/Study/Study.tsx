import React, { FC } from 'react';
import StudentHeader from '../../../components/studentHeader/studentHeader';
import RoutesStudy from '../../../components/StudentStudy/Routes/RoutesStudy';

const Study: FC = () => {
  return (
    <div>
      <StudentHeader />
      <RoutesStudy />
    </div>
  );
};

export default Study;
