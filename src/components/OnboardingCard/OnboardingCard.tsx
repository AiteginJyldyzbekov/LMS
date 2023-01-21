import React from 'react';
import { Typography } from '@mui/material';
import { useStyles } from './OnboardingCard.style';

const OnboardingCard = () => {
  const styles = useStyles();
  return (
    <div className={styles.onBoard_card}>
      <div className={styles.onBoard_text}>
        <Typography variant="h6">Добро пожаловать в Onboarding</Typography>
        <Typography>Добро пожаловать в Onboarding</Typography>
      </div>
    </div>
  );
};

export default OnboardingCard;
