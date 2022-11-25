import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import useStyles from "./Studentsdashboard.style";

const StudentsDashboard: React.FC = () => {
    const css = useStyles();
    return (
        <Grid container sx={{ padding: '0 15px', height: '102vh' }} spacing={2}>
            <Grid
                item
                xs={8}
                sx={{ boxShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2)" }}
                direction='column'
                alignItems="center"
            >
                <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '80%', margin: '0 auto', marginTop: '60px' }}>
                    <Typography sx={{ fontWeight: "600", fontSize: "36px", lineHeight: "44px" }}>
                        Hello User!!!
                    </Typography>
                    <NotificationsNoneIcon sx={{ width: '34px ', height: "34px", cursor: 'pointer' }} />
                </Grid>
                <Grid sx={{ width: '80%', margin: '0 auto', marginTop: '7%', display: 'flex', flexWrap: 'wrap' }}>
                    <Grid item xs={4}>
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '24px',
                            lineHeight: '29px'
                        }}>Your Courses</Typography>
                        <Box sx={{ width: '186px', height: '130px', background: 'orange', borderRadius: '13px', margin: "15px 0" }}></Box>
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '20px'
                        }}
                        >FrontEnd</Typography>
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '11px',
                            lineHeight: '13px'
                        }}>24 lessons left</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={4}
                sx={{ padding: 0 }}
                direction="column"
                alignItems="center"
            >
                <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '80%', margin: '0 auto', marginTop: '65px', gap:"25px" }}>
                    <Grid item container direction="row" justifyContent="space-between" sx={{width:'100%'}}>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '29px',
                        }}>
                            Profile
                        </Typography>
                        <BorderColorIcon sx={{ cursor: 'pointer' }} />
                    </Grid>
                    <Grid>
                        <h1 className={css.test}>Lorem, ipsum.</h1>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default StudentsDashboard;