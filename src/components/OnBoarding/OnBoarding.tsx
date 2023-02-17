import React from 'react';
import { Typography } from '@mui/material';
import Slider from 'react-slick';
import OnboardingCard from '../OnboardingCard/OnboardingCard';
import { useStyles } from './OnBoarding.style';
import Arrow from '../../../public/images/onBoardingSlider/Arrow.svg';
import SecondArrow from '../../../public/images/onBoardingSlider/SecondArrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderCards } from '../../constants/SliderCards';

const SampleNextArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        right: '0px',
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
    >
      {' '}
    </button>
  );
};

const SamplePrevArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        left: '92%',
        right: '20px',
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
    >
      {' '}
    </button>
  );
};

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
        {SliderCards.map((item) => (
          <OnboardingCard key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default OnBoarding;
