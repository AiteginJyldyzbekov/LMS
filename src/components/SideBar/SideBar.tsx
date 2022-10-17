import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './SideBar.styles';
import { useAppSelector } from '../../hooks/hook';

const SideBar: React.FC = () => {
    const classes = useStyles();
    const { data } = useAppSelector((state) => state.auth);
    const role = data?.role; // 'mentor' | 'student' | 'admin'
    return (
        <div style={{ width: '50%', height: '100vh', background: '#ECECEC' }}>
            <Grid sx={{
                width: '100%',
                heigth: '100vh'
            }}>
                {
                    role === 'mentor' ? (
                        <div className={classes.wrapper}>
                            <div className={classes.icons}></div>
                            <p>Student Book</p>
                            <div className={classes.icons}></div>
                            <p>Study Plan</p>
                            <div className={classes.icons}></div>
                            <p>Home Works</p>
                        </div>
                    ) : role === 'student' ? (
                        <div className={classes.wrapper}>
                            <div className={classes.icons}></div>
                            <p>STUDENT</p>
                            <div className={classes.icons}></div>
                            <p>Groups</p>
                            <div className={classes.icons}></div>
                            <p>Students</p>
                        </div>
                    ) : role === 'admin' ? (
                        <div className={classes.wrapper}>
                            <div className={classes.icons}>
                                <img src='../../public/images/sideBar/mentors.png' alt='logo' />
                            </div>
                            <p>Mentors</p>
                            <div className={classes.icons}></div>
                            <p>Groups</p>
                            <div className={classes.icons}></div>
                            <p>Students</p>
                        </div>
                    ) : ''
                }
            </Grid>
        </div>
    )
};

export default SideBar;
