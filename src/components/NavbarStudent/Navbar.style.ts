import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  navbar_students: {
    borderRight: '1px solid #616161',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '12%',
    textAlign: 'center',
    paddingTop: '15%',
    border: '1px solid green',
    '@media (max-width: 1500px)': {
      height: '13%',
    },
    '@media (max-width: 1300px)': {
      paddingTop: '20%',
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
    border: '1px solid red',
    '@media (max-width: 1500px)': {
      height: '57%',
    },
  },
  path: {
    width: '60%',
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    paddingTop: '3%',
    backgroundColor: 'transparent',
    '@media (max-width: 1500px)': {
      height: '15%',
      width: '58%',
      padding: '0',
    },
    '@media (max-width: 1300px)': {
      height: '13%',
      width: '60%',
    },
  },
  icon: {
    width: '50%',
    paddingTop: '10%',
    filter:
      'invert(56%) sepia(0%) saturate(10%) hue-rotate(219deg) brightness(97%) contrast(91%)',
    '@media (max-width: 1500px)': {
      width: '40%',
      paddingTop: '8%',
    },
  },
  icon_activ: {
    width: '50%',
    paddingTop: '10%',
    filter:
      'invert(100%) sepia(1%) saturate(7498%) hue-rotate(58deg) brightness(116%) contrast(101%)',
    '@media (max-width: 1500px)': {
      width: '40%',
      paddingTop: '8%',
    },
  },
  title: {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#898989',
    paddingTop: '10%',
    '@media (max-width: 1500px)': {
      fontSize: '12px',
    },
  },
  title_activ: {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#fff',
    paddingTop: '10%',
    '@media (max-width: 1500px)': {
      fontSize: '12px',
    },
  },
  active: {
    width: '60%',
    height: '15%',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #BD4E1B 0%, #FD04EC 100%)',
    '@media (max-width: 1500px)': {
      height: '16%',
      width: '60%',
    },
    '@media (max-width: 1300px)': {
      height: '13%',
      width: '60%',
    },
  },
}));
