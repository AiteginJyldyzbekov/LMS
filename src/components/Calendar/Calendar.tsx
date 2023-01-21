import React from 'react';
import { useStyles } from './Calendar.style';

const Calendar = () => {
  const styles = useStyles();
  return <div className={styles.calendar_card}>Calendar</div>;
};

export default Calendar;
