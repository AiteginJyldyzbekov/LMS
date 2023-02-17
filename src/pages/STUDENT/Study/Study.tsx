import React, { FC } from 'react';
import StudentHeader from '../../../components/studentHeader/studentHeader';
import RoutesStudy from '../../../components/StudentStudy/Routes/RoutesStudy';
import { useStyles } from './Study.style';

const Study: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <StudentHeader />
      <RoutesStudy />
    </div>
  );
};

export default Study;
