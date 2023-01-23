import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  navbar_students: {
    borderRight: '1px solid #616161',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    paddingTop: '20px',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '25px',
    height: '70%',
  },
  path: {
    width: '65px',
    height: '65px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
    padding: '10% 2%',
    margin: '20px 0 0 0',
  },
  icon: {
    filter:
      'invert(56%) sepia(0%) saturate(10%) hue-rotate(219deg) brightness(97%) contrast(91%)',
  },
  icon_activ: {
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
    width: '65px',
    height: '65px',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    padding: '10% 2%',
    margin: '20px 0 0 0',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #BD4E1B 0%, #FD04EC 100%)',
  },
}));
