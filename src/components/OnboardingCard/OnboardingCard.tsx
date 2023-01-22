import React from 'react';
import { Typography } from '@mui/material';
import { useStyles } from './OnboardingCard.style';

interface IProps {
  title: string;
  information: string;
  img: string;
}

const OnboardingCard: React.FC<IProps> = ({ title, information, img }) => {
  const styles = useStyles();
  return (
    <div
      className={styles.onBoard_card}
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.onBoard_text}>
        <Typography variant="h6">{title}</Typography>
        <Typography>{information}</Typography>
      </div>
    </div>
  );
};

export default OnboardingCard;
