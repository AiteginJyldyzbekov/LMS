import React from 'react';
import useStyles from './StudentPage.style';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StudentPage: React.FC = () => {
    const classes = useStyles();

    const data: { label: string; }[] = [
        {
            label: 'Name'
        },
        {
            label: 'Number'
        },
        {
            label: 'Age'
        },
        {
            label: 'Start Date'
        },
        {
            label: 'Auto Generated Password'
        },
        {
            label: 'Surname'
        },
        {
            label: 'Mail'
        },
        {
            label: 'Price'
        },
    ]
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Student Data</h1>
            <div className={classes.inputsContainer}>
                {
                    data.map((item) => (
                        <TextField className={classes.textField} id="outlined-basic" label={item.label} />
                    ))
                }

                {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    placeholder='Ten'
                    className={classes.select}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select> */}
                <FormControl sx={{ m: 1, width: 300 }}>
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
                <Button className={classes.saveBtn} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="outlined">Save</Button>
            </div>
        </div>
    );
};

export default StudentPage;
