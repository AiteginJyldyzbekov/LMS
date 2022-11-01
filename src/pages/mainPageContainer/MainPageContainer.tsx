import React from 'react';
import useStyles from './MainPageContainer.styles';

interface IMainPageContainer {
  children: React.ReactNode;
}

const MainPageContainer: React.FC<IMainPageContainer> = ({ children }) => {
  const css = useStyles();
  return (
    <div className={css.container}>
      <div className={css.content_wrapper}>{children}</div>
    </div>
  );
};

export default MainPageContainer;
