import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './PageContainer.styles';

interface PageContainerProps {
  children: React.ReactNode | string;
  name: string;
  puth: string;
  btnText?: string;
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
        <Typography variant="h5">{name}</Typography>
        <Link to={puth} style={{ textDecoration: 'none' }}>
          {btnText &&
            <Button variant="contained" size="large">
              {btnText}
            </Button>
          }
        </Link>
      </div>
      <div className={classes.content_wrapper}>{children}</div>
    </div>
  );
};

export default PageContainer;
