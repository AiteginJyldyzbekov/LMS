import React, { useState } from 'react';
import { Grid } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import { Link } from 'react-router-dom';
import useStyles from './SideBar.styles';
import { useAppSelector } from '../../hooks/hook';
import avatar from '../../../public/images/sideBar/avatar.jpg';
import burger from '../../../public/images/sideBar/burger.png';

import { admin, mentor, student } from '../../constants/sideBar';

const SideBar: React.FC = () => {
  const classes = useStyles();
  const { data } = useAppSelector((state) => state.auth);
  const role = data?.role;
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={classes.container}>
      <Grid
        sx={{
          width: '100%',
          heigth: '100vh',
        }}
      >
        {role === 'mentor' ? (
          <div className={classes.container}>
            <div
              className={classes.burger_container}
              onClick={() => setIsActive(!isActive)}
            >
              <img src={burger} alt="burger" className={classes.modal_icons} />
            </div>
            <div
              className={isActive ? classes.active_wrapper : classes.wrapper}
            >
              <div className={classes.arrow_container}>
                <WestIcon
                  className={classes.modal_icons}
                  onClick={() => setIsActive(!isActive)}
                />
              </div>
              <div className={classes.content_wrapper}>
                <div className={classes.name_block}>
                  <div className={classes.avatar_container}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                  </div>
                  <p className={classes.name}>Jaydon Frankie</p>
                </div>
              </div>
              <div className={classes.content_wrapper}>
                {mentor.map(({ title, Icon, puth }) => (
                  <Link to={puth} className={classes.card_content}>
                    <div className={classes.icon_container}>
                      <Icon className={classes.icons} />
                    </div>
                    <p>{title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : role === 'student' ? (
          <div className={classes.container}>
            <div
              className={classes.burger_container}
              onClick={() => setIsActive(!isActive)}
            >
              <img src={burger} alt="burger" className={classes.modal_icons} />
            </div>
            <div
              className={isActive ? classes.active_wrapper : classes.wrapper}
            >
              <div className={classes.arrow_container}>
                <WestIcon
                  className={classes.modal_icons}
                  onClick={() => setIsActive(!isActive)}
                />
              </div>
              <div className={classes.content_wrapper}>
                <div className={classes.name_block}>
                  <div className={classes.avatar_container}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                  </div>
                  <p className={classes.name}>Jaydon Frankie</p>
                </div>
              </div>
              <div className={classes.content_wrapper}>
                {student.map(({ title, Icon, puth }) => (
                  <Link to={puth} className={classes.card_content}>
                    <div className={classes.icon_container}>
                      <Icon className={classes.icons} />
                    </div>
                    <p>{title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : role === 'admin' ? (
          <div className={classes.container}>
            <div
              className={classes.burger_container}
              onClick={() => setIsActive(!isActive)}
            >
              <img src={burger} alt="burger" className={classes.modal_icons} />
            </div>
            <div
              className={isActive ? classes.active_wrapper : classes.wrapper}
            >
              <div className={classes.arrow_container}>
                <WestIcon
                  className={classes.modal_icons}
                  onClick={() => setIsActive(!isActive)}
                />
              </div>
              <div className={classes.content_wrapper}>
                <div className={classes.name_block}>
                  <div className={classes.avatar_container}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                  </div>
                  <p className={classes.name}>Jaydon Frankie</p>
                </div>
              </div>
              <div className={classes.content_wrapper}>
                {admin.map(({ title, Icon, puth }) => (
                  <Link to={puth} className={classes.card_content}>
                    <div className={classes.icon_container}>
                      <Icon className={classes.icons} />
                    </div>
                    <p>{title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </Grid>
    </div>
  );
};

export default SideBar;
