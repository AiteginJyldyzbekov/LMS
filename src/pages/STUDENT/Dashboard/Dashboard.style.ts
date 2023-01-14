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
  scores: {
    gridArea: 'd',
    display: 'flex',
    justifyContent: 'space-between',
  },
  coin: {
    width: '45%',
    background: '#2C2E34 !important',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25) !important',
    borderRadius: '12px !important',
    display: 'flex',
    justifyContent: 'center',
  },
  donut: {
    width: '45%',
    background: '#2C2E34 !important',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25) !important',
    borderRadius: '12px !important',
    display: 'flex',
    justifyContent: 'center',
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
  },
}));
