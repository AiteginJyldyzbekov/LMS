import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        background: '#C8C8C8',
        borderRadius: '10px',
        height: '80px',
        width: '80px',
        marginTop: '25px'

    }
}));

export default useStyles;
