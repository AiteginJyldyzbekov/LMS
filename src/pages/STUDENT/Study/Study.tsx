import React, { FC } from 'react';
import { useStyles } from './Study.style';
import StudentHeader from '../../../components/studentHeader/studentHeader';
import RoutesStudy from '../../../components/StudentStudy/Routes/RoutesStudy';

const Study: FC = () => {
  // let arr = [1,1,1,1,1];

  // const render = useMemo(() => (
  //   <h1>test</h1>
  // ), [arr])


  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <StudentHeader />
      <RoutesStudy />
    </div>
  );
};

export default Study;
