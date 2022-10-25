import { Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteType } from '../../constants/routes';
import NotFoundPage from '../../pages/404/NotFoundPage';
import SideBar from '../SideBar/SideBar';

interface PropsTypes {
  routes: RouteType[];
}
const Page: React.FC<PropsTypes> = ({ routes }) => {
  const auth = false;

  const renderComponent = ({ path, Component }: RouteType) => (
    <Route key={path} path={path} element={<Component />} />
  );
  return (
    <Grid container>
      {auth && (
        <Grid item xs={2}>
          <SideBar />
        </Grid>
      )}
      <Grid item xs={auth ? 10 : 12}>
        <Routes>
          {routes.map(renderComponent)}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default Page;
