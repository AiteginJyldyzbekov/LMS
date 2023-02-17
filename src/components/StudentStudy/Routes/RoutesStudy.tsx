import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './RoutesStudy.style';
import { CourseStudent } from '../../../constants/CourseStudent';
import CourseCard from '../Course/CourseCard';

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
  const qp = searchParams.get('course');
  useEffect(() => {
    setActive({
      courses: qp === null,
      additional: qp === 'additional',
      recommended: qp === 'recomendation',
    });
  }, [qp]);
  const courses = useMemo(
    () =>
      CourseStudent.map((item) => (
        <CourseCard
          path={item.path}
          courseName={item.courseName}
          iconCss={item.iconCss}
          description={item.description}
          progress={item.progress}
          lessons={item.lessons}
          iconCoin={item.iconCoin}
          level={item.level}
          coins={item.coins}
        />
      )),
    [CourseStudent]
  );
  return (
    <div>
      <div className={styles.navigation}>
        <button
          type="button"
          onClick={() => {
            setSearchParams({});
          }}
          className={active.courses === true ? styles.active : styles.frame}
        >
          {t('CourseStudent.courses')}
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchParams({ course: 'additional' });
          }}
          className={active.additional === true ? styles.active : styles.frame}
        >
          {t('CourseStudent.additional')}
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchParams({ course: 'recomendation' });
          }}
          className={active.recommended === true ? styles.active : styles.frame}
        >
          {t('CourseStudent.recommended')}
        </button>
      </div>
      <div className={styles.course}>{courses}</div>
    </div>
  );
};

export default RoutesStudy;
