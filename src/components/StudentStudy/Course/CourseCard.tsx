import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './CourseCard.style';
import { Course } from '../../../types/types';

const CourseCard: React.FC<Course> = ({
  path,
  courseName,
  iconCss,
  description,
  progress,
  lessons,
  iconCoin,
  coins,
  level,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  return (
    <Link className={styles.routs} to={path}>
      <div className={styles.inside}>
        <div className={styles.title_image}>
          <h2 className={styles.title}>{courseName}</h2>
          <div className={styles.white_back}>
            <img className={styles.icon} src={iconCss} alt="iconCss" />
          </div>
        </div>
        <div className={styles.paragraf}>
          <p className={styles.description}>{t(description)}</p>
          <div className={styles.info}>
            <div className={styles.progress}>
              <div className={styles.progress_procent} />
              <span className={styles.procent}>{progress}%</span>
            </div>
            <div className={styles.info_container}>
              <div className={styles.lessons}>
                <p className={styles.info_title}>{t(lessons)}</p>
              </div>
              <div className={styles.coin}>
                <img className={styles.coin_image} src={iconCoin} alt="coin" />
                <span className={styles.info_title}> + {coins}</span>
              </div>
              <div className={styles.level}>
                <p className={styles.info_title}>{t(level)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
