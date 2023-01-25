import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../../public/images/navbarStudent/logo.svg';
import { MenuStudents } from '../../constants/NavbarStudent';
import { useStyles } from './Navbar.style';

const Navbar: React.FC = () => {
  const styles = useStyles();
  const location = useLocation();
  const { t } = useTranslation();

  const renderActive = (path: string) => {
    if (location.pathname === path) {
      return ` ${styles.active}`;
    }
    return '';
  };

  return (
    <div className={styles.navbar_students}>
      <div className={styles.logo}>
        <img src={logo} alt="logotype" />
      </div>
      <div className={styles.navbar}>
        {MenuStudents.map(({ title, icon, alt, path }, index) => (
          <Link className={styles.path + renderActive(path)} to={path}>
            <img
              className={
                location.pathname === path ? styles.icon_activ : styles.icon
              }
              src={icon}
              alt={t(alt)}
            />
            <h5
              id={index === 0 ? "firstTitle" : ''}
              className={
                location.pathname === path ? styles.title_activ : styles.title
              }
            >
              {t(title)}
            </h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
