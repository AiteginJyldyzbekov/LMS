import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useStyles } from './RoutesStudy.style';
import { CourseStudent } from '../../../constants/CourseStudent';

interface IRoutes {
  courses: boolean;
  additional: boolean;
  recommended: boolean;
}
const RoutesStudy: React.FC = () => {
  const styles = useStyles();
  const [active, setActive] = useState<IRoutes>({
    courses: true,
    additional: false,
    recommended: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const ShowCourse = searchParams.get('course') === 'show';
  const ShowAdditional = searchParams.get('additional') === 'show';
  const ShowRecommended = searchParams.get('recommended') === 'show';
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
            setSearchParams({ courses: 'show' });
          }}
          className={active.courses === true ? styles.active : styles.frame}
        >
          Мои курсы
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
            setSearchParams({ additional: 'show' });
          }}
          className={active.additional === true ? styles.active : styles.frame}
        >
          Дополнительные
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
            setSearchParams({ recommended: 'show' });
          }}
          className={active.recommended === true ? styles.active : styles.frame}
        >
          Рекомендованные
        </button>
      </div>
      <div className={styles.course}>
        {ShowAdditional
          ? ''
          : ShowRecommended
          ? ''
          : ShowCourse
          ? CourseStudent.map(
              ({
                iconCss,
                iconCoin,
                courseName,
                description,
                lessons,
                coins,
                path,
              }) => (
                <Link className={styles.routs} to={path}>
                  <div className={styles.inside}>
                    <div className={styles.title_image}>
                      <h2 className={styles.title}>{courseName}</h2>
                      <div className={styles.white_back}>
                        <img
                          className={styles.icon}
                          src={iconCss}
                          alt="iconCss"
                        />
                      </div>
                    </div>
                    <div className={styles.paragraf}>
                      <p className={styles.description}>{description}</p>
                      <div className={styles.info}>
                        <div className={styles.lessons}>
                          <p className={styles.info_title}>{lessons}</p>
                        </div>
                        <div className={styles.coin}>
                          <img
                            className={styles.coin_image}
                            src={iconCoin}
                            alt="coin"
                          />
                          <span className={styles.info_title}> + {coins}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )
          : CourseStudent.map(
              ({
                iconCss,
                iconCoin,
                courseName,
                description,
                lessons,
                coins,
                path,
              }) => (
                <Link className={styles.routs} to={path}>
                  <div className={styles.inside}>
                    <div className={styles.title_image}>
                      <h2 className={styles.title}>{courseName}</h2>
                      <div className={styles.white_back}>
                        <img
                          className={styles.icon}
                          src={iconCss}
                          alt="iconCss"
                        />
                      </div>
                    </div>
                    <div className={styles.paragraf}>
                      <p className={styles.description}>{description}</p>
                      <div className={styles.info}>
                        <div className={styles.lessons}>
                          <p className={styles.info_title}>{lessons}</p>
                        </div>
                        <div className={styles.coin}>
                          <img
                            className={styles.coin_image}
                            src={iconCoin}
                            alt="coin"
                          />
                          <span className={styles.info_title}> + {coins}</span>
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
