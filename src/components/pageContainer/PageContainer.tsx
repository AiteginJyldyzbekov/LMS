import React from 'react';
import useStyles from './PageContainer.styles';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ViewPageProps {
    children: React.ReactNode,
    name: string,
    puth: string,
    btn_text: string,
}

const ViewPage: React.FC<ViewPageProps> = ({ children, name, puth, btn_text }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h3>{name}</h3>
                <Link to={puth} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" className={classes.btn}>
                        <span className={classes.btn_text}>{btn_text}</span>
                    </Button>
                </Link>
            </div>
            <div className={classes.content_wrapper}>{children}</div>
        </div>
    );
};

export default ViewPage;
