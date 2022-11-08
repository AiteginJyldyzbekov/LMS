import React from 'react';
import useStyles from './MainPageContainer.styles';

interface IMainPageContainer {
  children: React.ReactNode;
}

const MainPageContainer: React.FC<IMainPageContainer> = ({
  children,
  ...props
}) => {
  const css = useStyles();
  return (
    <div className={css.container} {...props}>
      {children}
    </div>
  );
};

export default MainPageContainer;
