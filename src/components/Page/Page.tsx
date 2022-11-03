import { Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteType } from '../../constants/routes';
import { useAppSelector } from '../../hooks/hook';
import NotFoundPage from '../../pages/404/NotFoundPage';
import SideBar from '../SideBar/SideBar';

interface PropsTypes {
  routes: RouteType[];
}
const Page: React.FC<PropsTypes> = ({ routes }) => {
  const { isAuth } = useAppSelector((state) => state.auth);

  const renderComponent = ({ path, Component }: RouteType) => (
    <Route key={path} path={path} element={<Component />} />
  );
  return (
    <Grid container>
      {isAuth && (
        <Grid item xs={0} lg={2}>
          <SideBar />
        </Grid>
      )}
      <Grid item xs={12} lg={isAuth ? 10 : 12}>
        <Routes>
          {routes.map(renderComponent)}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default Page;
