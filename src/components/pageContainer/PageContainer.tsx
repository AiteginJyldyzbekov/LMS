import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './PageContainer.styles';

interface PageContainerProps {
  children: React.ReactNode;
  name: string;
  puth: string;
  btnText: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  name,
  puth,
  btnText,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>{name}</h3>
        <Link to={puth} style={{ textDecoration: 'none' }}>
          <Button variant="contained" className={classes.btn}>
            <span className={classes.btnText}>{btnText}</span>
          </Button>
        </Link>
      </div>
      <div className={classes.content_wrapper}>{children}</div>
    </div>
  );
};

export default PageContainer;
