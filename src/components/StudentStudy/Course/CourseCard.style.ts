import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  routs: {
    all: 'unset',
    width: '32%',
    backgroundColor: '#2C2E34',
    borderRadius: '12px',
    marginBottom: '26px',
  },
  inside: {
    margin: '7%',
    '@media (max-width: 1500px)': {
      margin: '3%',
    },
  },
  title_image: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '2%',
    height: '10vh',
    '@media (max-width: 1500px)': {
      height: 'fit-content',
    },
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '50px',
    lineHeight: '47px',
    '@media (max-width: 1500px)': {
      fontSize: '40px',
    },
    '@media (max-width: 1400px)': {
      fontSize: '35px',
    },
  },
  white_back: {
    width: '28%',
    height: '90%',
    backgroundColor: '#E9E9E9',
    borderRadius: '10px',
    textAlign: 'center',
    paddingTop: '2%',
    '@media (max-width: 1400px)': {
      height: '70%',
      width: '26%',
    },
  },
  icon: {
    width: '65%',
  },
  paragraf: {
    height: '21vh',
    paddingTop: '2%',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 1400px)': {
      height: '25vh',
    },
  },
  description: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '131%',
    color: '#C6C6C6',
    '@media (max-width: 1500px)': {
      fontSize: '16px',
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  info_container: {
    display: 'flex',
  },
  lessons: {
    width: '20%',
    height: '29px',
    background: '#41464A',
    borderRadius: '7px',
    textAlign: 'center',
    paddingTop: '0.5%',
    '@media (max-width: 1500px)': {
      height: '21px',
    },
  },
  level: {
    width: '18%',
    height: '29px',
    background: '#41464A',
    borderRadius: '7px',
    textAlign: 'center',
    '@media (max-width: 1500px)': {
      height: '21px',
    },
  },
  coin: {
    margin: '0 11px 0 11px',
    display: 'flex',
    width: '20%',
    height: '29px',
    background: '#41464A',
    borderRadius: '7px',
    paddingTop: '0.5%',
    '@media (max-width: 1500px)': {
      height: '21px',
    },
  },
  coin_image: {
    height: '90%',
    margin: '1px 3px 0 3px',
  },
  info_title: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '162%',
    color: '#C6C6C6',
    '@media (max-width: 1500px)': {
      fontSize: '13px',
    },
  },
  progress: {
    display: 'flex',
    height: '30px',
    width: '100%',
    borderRadius: '32px',
    backgroundColor: '#222429',
    marginTop: '5%',
    '@media (max-width: 1500px)': {
      marginTop: '3%',
      height: '20px',
    },
  },
  progress_procent: {
    height: '100%',
    width: '35%',
    borderRadius: '32px',
    background: 'linear-gradient(90deg, #B55700 0%, #FF00F5 100%)',
  },
  procent: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '14px',
    color: '#FFFFFF',
    margin: '2% 0 0 10%',
    '@media (max-width: 1500px)': {
      fontSize: '12px',
      margin: '0.5% 0 0 10%',
    },
  },
}));
