import React from 'react';
import { IStack } from '../../types/types';
import { useStyles } from './StudentProgress.style';

interface IStackProgress {
  stack: IStack[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StudentProgress: React.FC<IStackProgress> = ({ stack }) => {
  console.log(stack);
  // TODO: map the stack array to display the progress
  const styles = useStyles();
  return <div className={styles.progress_card}>StudentProgress</div>;
};

export default StudentProgress;
