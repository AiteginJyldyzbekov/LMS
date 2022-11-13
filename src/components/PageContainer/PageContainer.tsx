import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyles from './PageContainer.styles';

interface PageContainerProps {
  children: React.ReactNode | string;
  name: string;
  puth: string;
  btnText?: string;
  isGoBack?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  name,
  puth,
  btnText,
  isGoBack = false,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      {isGoBack && (
        <Button onClick={() => navigate(-1)} size="medium">
          <ArrowBackIcon />
          Go back
        </Button>
      )}
      <div className={classes.wrapper}>
        <Typography variant="h5">{name}</Typography>
        <Link to={puth} style={{ textDecoration: 'none' }}>
          {btnText && (
            <Button variant="contained" size="large">
              {btnText}
            </Button>
          )}
        </Link>
      </div>
      <div className={classes.content_wrapper}>{children}</div>
    </div>
  );
};

export default PageContainer;
