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
    height: '16%',
    textAlign: 'center',
    paddingTop: '30%',
  },
  navbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64%',
  },
  path: {
    width: '60%',
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10%',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
  },
  icon: {
    width: '50%',
    filter:
      'invert(56%) sepia(0%) saturate(10%) hue-rotate(219deg) brightness(97%) contrast(91%)',
  },
  icon_activ: {
    width: '50%',
    filter:
      'invert(100%) sepia(1%) saturate(7498%) hue-rotate(58deg) brightness(116%) contrast(101%)',
  },
  title: {
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#898989',
  },
  title_activ: {
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#fff',
  },
  active: {
    width: '60%',
    height: '15%',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #BD4E1B 0%, #FD04EC 100%)',
  },
}));
