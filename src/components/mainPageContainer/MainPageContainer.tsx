import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import useStyles from './MainPageContainer.styles';

interface IMainPageContainer {
  children: React.ReactNode;
  isGoBack?: boolean;
}

const MainPageContainer: React.FC<IMainPageContainer> = ({
  children,
  isGoBack,
  ...props
}) => {
  const css = useStyles();
  const navigate = useNavigate();
  return (
    <div className={css.container} {...props}>
      {isGoBack && (
        <Button onClick={() => navigate(-1)} size="medium">
          <ArrowBackIcon />
          Go back
        </Button>
      )}
      {children}
    </div>
  );
};

export default MainPageContainer;
