import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  progress_card: {
    display: 'flex',
    alignItems: 'center',
    background: '#2C2E34',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '12px',
    padding: '10px',
    gridArea: 's',
  },
  progress_card_right: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
