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
      background: 'transparent',
      backgroundImage: 'linear-gradient(to left, #11de93, #0e7ad6)',
      opacity: 0.8,
      borderRadius: '12px',
    },
  },
  onBoard_text: {
    margin: 'auto',
    verticalAlign: 'center',
  },
}));
