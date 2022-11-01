import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from './SideBar.styles';
import avatar from '../../../public/images/sideBar/avatar.jpg';
import burger from '../../../public/images/sideBar/burger.png';
import { SideBarLink } from '../../types/types';

interface SideBarProps {
  role: SideBarLink[];
}

const RoleCard: React.FC<SideBarProps> = ({ role }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={classes.container}>
      <div
        className={classes.burger_container}
        onClick={() => setIsActive(!isActive)}
        onKeyDown={() => setIsActive(!isActive)}
        role="presentation"
      >
        <img src={burger} alt="burger" className={classes.modal_icons} />
      </div>
      <div className={isActive ? classes.active_wrapper : classes.wrapper}>
        <div className={classes.arrow_container}>
          <WestIcon
            className={classes.modal_icons}
            onClick={() => setIsActive(!isActive)}
            onKeyDown={() => setIsActive(!isActive)}
          />
        </div>
        <div className={classes.content_wrapper}>
          <div className={classes.name_block}>
            <div className={classes.avatar_container}>
              <img src={avatar} alt="avatar" className={classes.avatar} />
            </div>
            <p className={classes.name}>{t('SideBar.name')}</p>
          </div>
        </div>
        <div className={classes.content_wrapper}>
          {role.map(({ title, Icon, puth, id }) => (
            <Link to={puth} className={classes.card_content} key={id}>
              <div className={classes.icon_container}>
                <Icon className={classes.icons} />
              </div>
              <p>{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
