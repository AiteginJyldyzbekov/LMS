import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from './NotFoundPage.styles';
import notFoundImage from '../../assests/404.svg';

const NotFoundPage: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Grid className={classes.wrapper}>
      <Typography
        variant="inherit"
        align="center"
        fontWeight={600}
        marginBottom="16px"
        className={classes.title}
      >
        {t('404.title')}
      </Typography>
      <p className={classes.description}>{t('404.description')}</p>
      <img src={notFoundImage} alt="not found" className={classes.image} />
      <Link to="/" className={classes.link}>
        <Button variant="contained" size="large">
          {t('404.goHome')}
        </Button>
      </Link>
    </Grid>
  );
};

export default NotFoundPage;
