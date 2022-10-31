import React from 'react';
import useStyles from './MainPageContainer.styles';

interface MainPageContainer {
  children: React.ReactNode;
}

const MainPageContainer: React.FC<MainPageContainer> = ({ children }) => {
  const css = useStyles();
  return (
    <div className={css.container}>
      <div className={css.content_wrapper}>{children}</div>
    </div>
  );
};

export default MainPageContainer;
