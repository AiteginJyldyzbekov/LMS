import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  navbar_students: {
    borderRight: '1px solid #616161',
    height: '100vh',
    width: '7.313rem',
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
  },
  path: {
    width: '60px',
    height: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
    marginBottom: 27,
    padding: '10px 0 8px 0',
  },
  active: {
    borderRadius: '12px',
    backgroundColor: 'transparent',
    background: 'linear-gradient(135deg, #BD4E1B 0%, #FD04EC 100%)',
    boxShadow: '0px 0px 4px #B9208C',
  },
  icon: {
    height: '22px',
    filter:
      'invert(56%) sepia(0%) saturate(10%) hue-rotate(219deg) brightness(97%) contrast(91%)',
  },
  icon_activ: {
    height: '22px',
    filter:
      'invert(100%) sepia(1%) saturate(7498%) hue-rotate(58deg) brightness(116%) contrast(101%)',
  },
  title: {
    fontWeight: '300',
    fontSize: '12px',
    color: '#898989',
  },
  title_activ: {
    fontWeight: '300',
    fontSize: '12px',
    color: '#fff',
  },
}));
