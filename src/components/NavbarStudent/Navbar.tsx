import React from 'react';
import logo from "../../../public/images/navbarStudent/logo.svg";
import { Link, useLocation } from 'react-router-dom';
import { MenuStudents } from '../../constants/NavbarStudent';
import { useStyles } from './Navbar.style';

const Navbar: React.FC = () => {
  const styles = useStyles();
  const location = useLocation();

  const renderActive = (path: string) => {
    if (location.pathname === path) {
      return " " + styles.active
    }
    return ""
  }

  return (
    <div className={styles.navbar_students}>
      <div className={styles.logo}><img src={logo} alt="logotype" /></div>
      <div className={styles.navbar}>
        {MenuStudents.map(({ title, icon, alt, path }) => (
          <Link className={styles.path + renderActive(path)} to={path} >
            <img className={location.pathname === path ? styles.icon_activ : styles.icon} src={icon} alt={alt} />
            <h5 className={location.pathname === path ? styles.title_activ : styles.title}>{title}</h5>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar