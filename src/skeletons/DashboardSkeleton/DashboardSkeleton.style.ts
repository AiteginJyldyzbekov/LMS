import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'grid',
    gridTemplateAreas: '"g c p " "s c p" "d c p" "o o o"',
    gridTemplateRows: '1fr 0.8fr 0.8fr 2fr',
    gridTemplateColumns: '0.7fr 1fr 0.5fr',
    padding: '20px',
    gap: '20px',
    columnGap: '30px',
  },
}));
