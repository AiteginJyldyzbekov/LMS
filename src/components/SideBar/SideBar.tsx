import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './SideBar.styles';
import { useAppSelector } from '../../hooks/hook';
// import mentors from '../../../public/images/sideBar/mentors.png'
// import group from '../../../public/images/sideBar/group.png'
import avatar from '../../../public/images/sideBar/avatar.jpg'
// import students from '../../../public/images/sideBar/students.png'
import burger from '../../../public/images/sideBar/burger.png'
import arrow from '../../../public/images/sideBar/arrow.png'
import { useState } from 'react';
import { admin } from '../../constants/sideBar'
import { mentor } from '../../constants/sideBar'
import { student } from '../../constants/sideBar'

const SideBar: React.FC = () => {
    const classes = useStyles();
    const { data } = useAppSelector((state) => state.auth);
    const role = data?.role; // 'mentor' | 'student' | 'admin'
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={classes.container}>
            <Grid sx={{
                width: '100%',
                heigth: '100vh'
            }}>
                {
                    role === 'mentor' ? (
                        <div>
                            <div className={isActive ? classes.inactive_burger_container : classes.burger_container} onClick={() => setIsActive(!isActive)}>
                                <img src={isActive ? arrow : burger} alt='burger' className={classes.burger} />
                            </div>
                            <div className={isActive ? classes.active_wrapper : classes.wrapper}>
                                <div className={classes.content_wrapper}>
                                    <div className={classes.name_block}>
                                        <div className={classes.avatar_container}>
                                            <img src={avatar} alt='mentors-logo' className={classes.avatar} />
                                        </div>
                                        <p className={classes.name}>Jaydon Frankie</p>
                                    </div>
                                </div>
                                <div className={classes.content_wrapper}>
                                    {
                                        mentor.map((item) => (
                                            <div className={classes.card_content}>
                                                <div className={classes.icon_container}>
                                                    <img src={item.img} alt='mentors-logo' className={classes.icons} />
                                                </div>
                                                <p>{item.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : role === 'student' ? (
                        <div>
                            <div className={isActive ? classes.inactive_burger_container : classes.burger_container} onClick={() => setIsActive(!isActive)}>
                                <img src={isActive ? arrow : burger} alt='burger' className={classes.burger} />
                            </div>
                            <div className={isActive ? classes.active_wrapper : classes.wrapper}>
                                <div className={classes.content_wrapper}>
                                    <div className={classes.name_block}>
                                        <div className={classes.avatar_container}>
                                            <img src={avatar} alt='mentors-logo' className={classes.avatar} />
                                        </div>
                                        <p className={classes.name}>Jaydon Frankie</p>
                                    </div>
                                </div>
                                <div className={classes.content_wrapper}>
                                    {
                                        student.map((item) => (
                                            <div className={classes.card_content}>
                                                <div className={classes.icon_container}>
                                                    <img src={item.img} alt='mentors-logo' className={classes.icons} />
                                                </div>
                                                <p>{item.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : role === 'admin' ? (
                        <div>
                            <div className={isActive ? classes.inactive_burger_container : classes.burger_container}>
                                <img src={isActive ? arrow : burger} alt='burger' className={classes.burger} onClick={() => setIsActive(!isActive)} />
                            </div>
                            <div className={isActive ? classes.active_wrapper : classes.wrapper}>
                                <div className={classes.content_wrapper}>
                                    <div className={classes.name_block}>
                                        <div className={classes.avatar_container}>
                                            <img src={avatar} alt='avatar' className={classes.avatar} />
                                        </div>
                                        <p className={classes.name}>Jaydon Frankie</p>
                                    </div>
                                </div>
                                <div className={classes.content_wrapper}>
                                    {
                                        admin.map((item) => (
                                            <div className={classes.card_content}>
                                                <div className={classes.icon_container}>
                                                    <img src={item.img} alt='mentors-logo' className={classes.icons} />
                                                </div>
                                                <p>{item.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : ''
                }
            </Grid>
        </div>
    )
};

export default SideBar;
