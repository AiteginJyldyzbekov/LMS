import React from 'react';
import { Typography } from '@mui/material';
import OnboardingCard from '../OnboardingCard/OnboardingCard';
import { useStyles } from './OnBoarding.style';
import Slider from 'react-slick';
import Arrow from '../../../public/images/onBoardingSlider/Arrow.svg';
import SecondArrow from '../../../public/images/onBoardingSlider/SecondArrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        right: '60px',
        top: '-45px',
        width: '40px',
        height: '40px',
        background: '#D9D9D999',
        borderRadius: '34px',
        backgroundImage: `url(${Arrow})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        left: '89%',
        top: '-45px',
        width: '40px',
        height: '40px',
        background: '#D9D9D999',
        borderRadius: '34px',
        backgroundImage: `url(${SecondArrow})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      onClick={onClick}
    />
  );
}

const OnBoarding = () => {
  const styles = useStyles();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.onBoarding}>
      <Typography variant="h4">Onboarding</Typography>
      <br />
      <Slider className={styles.wrapper} {...settings}>
        <OnboardingCard />
        <OnboardingCard />
        <OnboardingCard />
        <OnboardingCard />
      </Slider>
    </div>
  );
};

export default OnBoarding;
