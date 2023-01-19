import React from 'react';
import { Typography } from '@mui/material';
import OnboardingCard from '../OnboardingCard/OnboardingCard';
import { useStyles } from './OnBoarding.style';

const OnBoarding = () => {
  const styles = useStyles();
  return (
    <div className={styles.onBoarding}>
      <Typography variant="h4">Onboarding</Typography>
      <br />
      <div className={styles.wrapper}>
        <OnboardingCard />
        <OnboardingCard />
        <OnboardingCard />
        <OnboardingCard />
      </div>
    </div>
  );
};

export default OnBoarding;
