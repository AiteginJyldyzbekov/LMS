import React from 'react';
import { Typography } from '@mui/material';
import { useStyles } from './OnboardingCard.style';
import { SliderCard } from '../../types/types';

const OnboardingCard = (props: SliderCard) => {
  const styleProps: any = { back: props.img };
  const styles = useStyles(styleProps);
  return (
    <div
      className={styles.onBoard_card}
      style={{
        background: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.onBoard_text}>
        <Typography variant="h6">{props.title}</Typography>
        <Typography>{props.information}</Typography>
      </div>
    </div>
  );
};

export default OnboardingCard;
