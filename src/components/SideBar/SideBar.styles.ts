import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  wrapper: {
    minWidth: '180px',
    minHeight: '100vh',
    borderRight: '1px dashed rgb(205 221 237)',
    padding: '0 10px',
  },
  active_wrapper: {
    minHeight: '100vh',
    background: 'rgba(145, 158, 171, 0.16)',
  },
  content_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: 'rgba(145, 158, 171, 0.16)',
    borderRadius: '10px',
    height: '50px',
    width: '100%',
    marginTop: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'rgb(33, 43, 54)',
  },
  name: {
    marginLeft: '10px',
    color: 'rgb(33, 43, 54)',
  },
  name_block: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(145, 158, 171, 0.16)',
    width: '100%',
    height: '80px',
    borderRadius: '10px',
    margin: '40px 0px',
    fontWeight: '500',
    padding: '10px',
  },
  icon_container: {
    width: '30%',
  },
  icons: {
    width: '30px',
    height: '30px',
    display: 'inline-block',
    marginLeft: '15px',
  },
  modal_icons: {
    width: '30px',
    height: '30px',
  },
  avatar_container: {
    width: '20%',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '100px',
  },
  burger_container: {
    display: 'none',
  },
  arrow_container: {
    display: 'none',
  },
  '@media (max-width: 1200px)': {
    container: {
      position: 'absolute',
    },
    wrapper: {
      position: 'fixed',
      top: '0',
      left: '-100%',
      transition: '850ms',
    },
    active_wrapper: {
      position: 'fixed',
      top: '0',
      left: '0',
      transition: '700ms',
      padding: '0 10px',
    },
    burger_container: {
      width: '60px',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow_container: {
      width: '100%',
      background: '#F4F4F4',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modal_icons: {
      width: '25px',
      height: '25px',
      marginTop: '15px',
      marginRight: '15px',
    },
  },
}));

export default useStyles;
