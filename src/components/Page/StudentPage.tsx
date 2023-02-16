import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteType } from '../../constants/routes';
import NotFoundPage from '../../pages/404/NotFoundPage';
import useStyles from './StudentPage.styles';
import Navbar from '../NavbarStudent/Navbar';

interface PropsTypes {
  routes: RouteType[];
}
const StudentPage: React.FC<PropsTypes> = ({ routes }) => {
  const styles = useStyles();
  const renderComponent = ({ path, Component }: RouteType) => (
    <Route key={path} path={path} element={<Component />} />
  );
  useEffect(() => {
    document.body.classList.add(styles.bg);
  }, []);
  return (
    <div className={styles.wrapper}>
      <Grid container>
        <Grid item width="7.313rem">
          <Navbar />
        </Grid>
        <Grid item width="calc(100% - 7.313rem)">
          <Routes>
            {routes.map(renderComponent)}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentPage;
