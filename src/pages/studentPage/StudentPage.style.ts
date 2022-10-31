import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '100%',
    },
    inputsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        gap: '20px',
    },
    textField: {
        width: '40%',
    },
    title: {
        width: '20%',
        margin: '30px auto',
        fontWeight: '500',
    },
    select: {
        width: '30%',
    },
    btnsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
    },
    saveBtn: {
        marginRight: '50px'
    }
}));

export default useStyles;
