import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './RoutesStudy.style';
import { CourseStudent } from '../../../constants/CourseStudent';

interface IRoutes {
  courses: boolean;
  additional: boolean;
  recommended: boolean;
}
const RoutesStudy: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [active, setActive] = useState<IRoutes>({
    courses: true,
    additional: false,
    recommended: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams); // don't delete it will throw an error
  return (
    <div className={styles.navigation_container}>
      <div className={styles.navigation}>
        <button
          type="button"
          onClick={() => {
            setActive({
              ...active,
              courses: true,
              additional: false,
              recommended: false,
            });
            setSearchParams({});
          }}
          className={active.courses === true ? styles.active : styles.frame}
        >
          {t('CourseStudent.courses')}
        </button>
        <button
          type="button"
          onClick={() => {
            setActive({
              ...active,
              courses: false,
              additional: true,
              recommended: false,
            });
            setSearchParams({ course: 'additional' });
          }}
          className={active.additional === true ? styles.active : styles.frame}
        >
          {t('CourseStudent.additional')}
        </button>
        <button
          type="button"
          onClick={() => {
            setActive({
              ...active,
              courses: false,
              additional: false,
              recommended: true,
            });
            setSearchParams({ course: 'recomendation' });
          }}
          className={active.recommended === true ? styles.active : styles.frame}
        >
          {t('CourseStudent.recommended')}
        </button>
      </div>
      <div className={styles.course}>
        {CourseStudent.map(
          (
            {
              iconCss,
              iconCoin,
              courseName,
              description,
              lessons,
              coins,
              path,
              progress,
              level,
            },
            index
          ) => (
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
                    <div
                      id={index === 0 ? 'firstMap' : ''}
                      className={styles.progress}
                    >
                      <div className={styles.progress_procent} />
                      <span className={styles.procent}>{progress}%</span>
                    </div>
                    <div className={styles.info_container}>
                      <div className={styles.lessons}>
                        <p className={styles.info_title}>{t(lessons)}</p>
                      </div>
                      <div className={styles.coin}>
                        <img
                          className={styles.coin_image}
                          src={iconCoin}
                          alt="coin"
                        />
                        <span className={styles.info_title}> + {coins}</span>
                      </div>
                      <div
                        id={index === 0 ? 'firstMap' : ''}
                        className={styles.level}
                      >
                        <p className={styles.info_title}>{t(level)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default RoutesStudy;
