import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  navbar_students: {
    borderRight: '1px solid #616161',
    height: '100vh',
    width: '7%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
  },
  logo: {
    width: '100%',
    height: '12%',
    textAlign: 'center',
    paddingTop: '15%',
    '@media (max-width: 1500px)': {
      height: '14%',
      paddingTop: '18%',
    },
  },
  logotype: {
    width: '28%',
    '@media (max-width: 1500px)': {
      width: '25%',
    },
  },
  navbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '58%',
    '@media (max-width: 1500px)': {
      height: '66%',
    },
    '@media (max-width: 1300px)': {
      height: '60%',
    },
  },
  path: {
    width: '59%',
    height: '13%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
    '@media (max-width: 1500px)': {
      width: '68%',
      height: '14%',
    },
    '@media (max-width: 1300px)': {
      width: '70%',
      height: '13%',
    },
  },
  active: {
    width: '59%',
    height: '13%',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    background: 'linear-gradient(135deg, #BD4E1B 0%, #FD04EC 100%)',
    boxShadow: '0px 0px 4px #B9208C',
    '@media (max-width: 1500px)': {
      width: '68%',
      height: '14%',
    },
    '@media (max-width: 1300px)': {
      width: '70%',
      height: '13%',
    },
  },
  icon: {
    width: '40%',
    paddingTop: '16%',
    filter:
      'invert(56%) sepia(0%) saturate(10%) hue-rotate(219deg) brightness(97%) contrast(91%)',
    '@media (max-width: 1500px)': {
      width: '36%',
      paddingTop: '12%',
    },
    '@media (max-width: 1300px)': {
      paddingTop: '15%',
    },
  },
  icon_activ: {
    width: '40%',
    paddingTop: '16%',
    filter:
      'invert(100%) sepia(1%) saturate(7498%) hue-rotate(58deg) brightness(116%) contrast(101%)',
    '@media (max-width: 1500px)': {
      width: '36%',
      paddingTop: '12%',
    },
    '@media (max-width: 1300px)': {
      paddingTop: '15%',
    },
  },
  title: {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#898989',
    paddingTop: '13%',
    '@media (max-width: 1500px)': {
      fontSize: '12px',
    },
  },
  title_activ: {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#fff',
    paddingTop: '13%',
    '@media (max-width: 1500px)': {
      fontSize: '12px',
    },
  },
}));
