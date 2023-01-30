import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  navbar_students: {
    borderRight: '1px solid #616161',
    height: '100vh',
    width: '117px',
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
  },
  logotype: {
    width: '28%',
  },
  navbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '58%',
    '@media (max-width: 1500px)': {
      height: '68%',
    },
  },
  path: {
    width: '60px',
    height: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
  },
  active: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    background: 'linear-gradient(135deg, #BD4E1B 0%, #FD04EC 100%)',
    boxShadow: '0px 0px 4px #B9208C',
  },
  icon: {
    width: '40%',
    paddingTop: '8px',
    filter:
      'invert(56%) sepia(0%) saturate(10%) hue-rotate(219deg) brightness(97%) contrast(91%)',
  },
  icon_activ: {
    width: '40%',
    paddingTop: '8px',
    filter:
      'invert(100%) sepia(1%) saturate(7498%) hue-rotate(58deg) brightness(116%) contrast(101%)',
  },
  title: {
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#898989',
    paddingTop: '7px',
  },
  title_activ: {
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#fff',
    paddingTop: '7px',
  },
}));
