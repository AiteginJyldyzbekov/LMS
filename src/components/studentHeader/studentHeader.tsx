import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from './studentHeader.style';
import notification from '../../../public/images/StudentHeader/Notification.svg';
import vector from '../../../public/images/StudentHeader/Vector.svg';
import restangle from '../../../public/images/StudentHeader/Rectangle.svg';

const StudentHeader: React.FC = () => {
  const css = useStyles();
  const { t } = useTranslation();
  return (
    <div className={css.header__container}>
      <input
        className={css.input}
        placeholder={t('HeaderStudent.placeholder')}
        type="text"
      />
      <div className={css.discount}>
        <p title={t('HeaderStudent.title')}>{t('HeaderStudent.title')}</p>
      </div>
      <div className={css.input__wrapper}>
        <Link className={css.back__links} to="/helpPage">
          <img src={vector} alt="help_image" />
        </Link>
        <Link className={css.back__links} to="/NotificationPage">
          <img src={notification} alt="notification_image" />
        </Link>
        <Link to="/profilePage">
          <img src={restangle} alt="avatar_image" />
        </Link>
      </div>
    </div>
  );
};

export default StudentHeader;
