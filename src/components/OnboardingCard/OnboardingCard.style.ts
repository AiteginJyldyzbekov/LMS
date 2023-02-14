import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  onBoard_card: {
    display: 'inline-block',
    position: 'relative',
    lineHeight: 0,
    width: '400px',
    height: '231px',
    boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '12px',
    padding: '30px',
    '&::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.8,
      borderRadius: '12px',
    },
  },
  onBoard_text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    '& h6': {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '24px',
      lineHeight: '28px',
      color: '#FFFFFF',
      borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
      paddingBottom: '5px',
    },
    '& p': {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '21px',
      color: '#C6C6C6',
      marginTop: '10px',
    },
  },
}));
