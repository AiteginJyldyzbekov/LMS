import React from 'react';
import useStyles from './StudentPage.style';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { inputsData } from '../../constants/StudentPage';

const StudentPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Student Data</h1>
            <div className={classes.inputsContainer}>
                {
                    inputsData.map((item) => (
                        <TextField sx={{ width: '40%' }} id="outlined-basic" label={item.placeholder} />
                    ))
                }
                <FormControl sx={{ m: 1, width: '35%' }}>
                    <InputLabel id="demo-multiple-name-label">Status</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                    >
                        <MenuItem>
                            Admin
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.btnsContainer}>
                <Button
                    variant="outlined"
                    sx={{
                        width: '15%',
                        minHeight: '50px',
                        marginRight: '5%',
                        '@media(max-width: 425px)': {
                            fontSize: '12px',
                        },
                    }}
                >Save</Button>
                <Button
                    variant="outlined"
                    startIcon={<DeleteIcon sx={{
                        '@media(max-width: 580px)': {
                            width: '12px',
                        },
                    }} />}
                    sx={{
                        width: '15%',
                        minHeight: '50px',
                        gap: '0',
                        '@media(max-width: 580px)': {
                            fontSize: '12px',
                        },
                    }}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default StudentPage;
