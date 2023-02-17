import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'grid',
    gridTemplateAreas: '"g c p " "s c p" "d c p" "o o o"',
    gridTemplateColumns: '0.7fr 0.7fr 0.5fr',
    gap: '20px',
    columnGap: '30px',
    '@media (max-width:1360px)': {
      gridTemplateRows: '120px 120px 100px',
    },
  },
  scores: {
    gridArea: 'd',
    display: 'flex',
    justifyContent: 'space-between',
    '& img': {
      '@media (min-width:1720px)': {
        width: '40px',
      },
      '@media (min-width:1820px)': {
        width: '45px',
      },
    },
  },
  score: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    color: '#A7A7A7',
    gap: '10px',
    '@media (min-width:1720px)': {
      fontSize: '18px',
    },
    '@media (min-width:1820px)': {
      fontSize: '20px',
    },
  },
  container: {
    width: '95%',
    margin: '0 auto',
  },
}));
