/* eslint-disable react/button-has-type */
import React from 'react';
import { Typography } from '@mui/material';
import MainPageContainer from '../../../components/mainPageContainer/MainPageContainer';
import useStyles from './LessonDetail.style';
import img from '../../../assests/Group 6.png';
import DownloadSVG from '../../../assests/download.svg';

const LessonDetail: React.FC = () => {
  const classes = useStyles();
  const list = [
    {
      id: 1,
      bg_color: '#195ADA',
      name: '1progs.ru',
    },
    {
      id: 2,
      bg_color: '#19DA7D',
      name: 'fuck.doc',
    },
    {
      id: 3,
      bg_color: '#8519DA',
      name: 'ui.kit',
    },
  ];
  return (
    <MainPageContainer isGoBack>
      <section className={classes.container}>
        <div className={classes.titles}>
          <Typography variant="h4">Материал к уроку</Typography>
          <Typography variant="h5">design, 4 поток</Typography>
        </div>
        <img src={img} alt="as" />
        {/* TODO: dynamic src and change img to iframe */}
        {/* <iframe
          className={classes.video}
          title="lesson_video"
          frameBorder={20}
          src="https://www.youtube.com/watch?v=4PUHBL1vMNY&t=2902s"
        /> */}
        <div className={classes.lesson_description}>
          <Typography variant="h5">Урок №3.Композиция</Typography>
          <Typography>
            Композиция – это визуальная организация элементов дизайна, когда все
            объекты и элементы находятся в гармонии друг с другом и окружающей
            их средой... далее
          </Typography>
        </div>
        <button className={classes.lesson_download}>
          {/* TODO: here will be link to download pdf file */}
          {/* <a href=""></a> */}
          <Typography variant="h5" sx={{ color: '#195ADA' }}>
            Урок №3.Композиция.pdf
          </Typography>
          <img src={DownloadSVG} alt="download icon" />
        </button>
        <Typography variant="h5" sx={{ marginLeft: '30px' }}>
          Дополнительные материалы
        </Typography>
        <div className={classes.additional}>
          {list.map((card, index) => (
            <div
              key={`${card.id}_${index}`}
              className={classes.card}
              style={{ background: card.bg_color }}
            >
              {card.name}
            </div>
          ))}
        </div>
      </section>
    </MainPageContainer>
  );
};

export default LessonDetail;
