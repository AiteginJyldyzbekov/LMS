import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  navigation_container: {},
  navigation: {
    display: 'flex',
    marginLeft: '20px',
    alignItems: 'center',
    borderRadius: '7px',
  },
  frame: {
    backgroundColor: '#2C2E34',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '15px',
    letterSpacing: '0.03em',
    color: '#FFFFFF',
    textDecoration: 'none',
    padding: '1% 2% 1% 2%',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    background: 'none',
    border: 'none',
    '&:first-child ': {
      borderTopLeftRadius: '7px',
      borderBottomLeftRadius: '7px',
    },
    '&:last-child ': {
      borderTopRightRadius: '7px',
      borderBottomRightRadius: '7px',
    },
    '@media (max-width: 1500px)': {
      padding: '0.8% 2% 0.8% 2%',
    },
  },
  active: {
    background: '#6B9AFF',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '15px',
    letterSpacing: '0.03em',
    color: '#FFFFFF',
    height: '100%',
    padding: '1% 2% 1% 2%',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    border: 'none',
    '@media (max-width: 1500px)': {
      padding: '0.8% 2% 0.8% 2%',
    },
  },
  course: {
    margin: '20px 32px 0 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
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
    // border:'1px solid red'
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
    display: 'none',
    width: '18%',
    height: '29px',
    background: '#41464A',
    borderRadius: '7px',
    textAlign: 'center',
    padding: '0.5% 0 0 4%',
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
    display: 'none',
    height: '20px',
    width: '100%',
    borderRadius: '32px',
    backgroundColor: '#222429',
    marginTop: '5%',
    '@media (max-width: 1500px)': {
      marginTop: '3%',
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
    fontSize: '12px',
    lineHeight: '14px',
    color: '#FFFFFF',
    margin: '0.5% 0 0 10%',
  },
}));
