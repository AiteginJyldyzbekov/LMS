import React, { useMemo } from 'react';
import { IStack } from '../../types/types';
import { useStyles } from './StudentProgress.style';

interface IStackProgress {
  stack: IStack[];
}

const StudentProgress: React.FC<IStackProgress> = ({ stack }) => {
  const styles = useStyles();
  const renderStack = useMemo(
    () =>
      stack.map((item) => (
        <div
          className={styles.stack}
          key={`${item.techName}_${item.completedPercent}`}
        >
          <span>{item.techName}</span>
          <div className={styles.progress_item}>
            <div
              className={styles.progress}
              style={{ width: `${(item.completedPercent / 100) * 100}%` }}
            >
              <p style={{ margin: 'auto' }}>{item.completedPercent}%</p>
            </div>
          </div>
        </div>
      )),
    []
  );
  return <div className={styles.progress_card}>{renderStack}</div>;
};

export default StudentProgress;
