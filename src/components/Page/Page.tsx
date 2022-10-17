import { Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteType } from '../../constants/routes';

interface PropsTypes {
  routes: RouteType[];
}
const Page: React.FC<PropsTypes> = ({ routes }) => {
  const auth = true;

  const renderComponent = ({ path, Component }: RouteType) => (
    <Route key={path} path={path} element={<Component />} />
  );
  return (
    <Grid container>
      {auth && (
        <Grid item xs={2}>
          <h2>Navbar Navbar Navbar Navbar Navbar Navbar</h2>
        </Grid>
      )}
      <Grid item xs={auth ? 10 : 12}>
        <Routes>
          {routes.map(renderComponent)}
          <Route path="*" element="404 PAGE" />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default Page;
