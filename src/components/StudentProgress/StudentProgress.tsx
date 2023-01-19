import React from 'react';
import { IStack } from '../../types/types';
import { useStyles } from './StudentProgress.style';

interface IStackProgress {
  stack: IStack[];
}

const StudentProgress: React.FC<IStackProgress> = ({ stack }) => {
  // TODO: remove log and map the stack array to display the progress
  console.log(stack);
  const styles = useStyles();
  return <div className={styles.progress_card}>StudentProgress</div>;
};

export default StudentProgress;
