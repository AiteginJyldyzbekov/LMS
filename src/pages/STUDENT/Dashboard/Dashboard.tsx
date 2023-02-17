import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import StudentHeader from '../../../components/studentHeader/studentHeader';
import Calendar from '../../../components/Calendar/Calendar';
import GreetCard from '../../../components/GreetCard/GreetCard';
import OnBoarding from '../../../components/OnBoarding/OnBoarding';
import StudentProgress from '../../../components/StudentProgress/StudentProgress';
import StudentProgressBar from '../../../components/StudentProgressBar/StudentProgressBar';
import { useStyles } from './Dashboard.style';
import img from '../../../assests/levelIcon.svg';
import points from '../../../assests/points.svg';
import coin from '../../../assests/coin.svg';
import DashboardSkeleton from '../../../skeletons/DashboardSkeleton/DashboardSkeleton';
import { PaperStyled } from '../../../components/Paper/Paper';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const styles = useStyles();
  const stack = [
    {
      techName: 'CSS',
      completedPercent: 46,
    },
    {
      techName: 'JS',
      completedPercent: 76,
    },
    {
      techName: 'TS',
      completedPercent: 26,
    },
    {
      techName: 'HTML',
      completedPercent: 56,
    },
    {
      techName: 'Next JS',
      completedPercent: 99,
    },
    {
      techName: 'HTML',
      completedPercent: 46,
    },
  ];
  return (
    <div>
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
        <div className={styles.container}>
          <StudentHeader />
          <Grid className={styles.wrapper}>
            <GreetCard
              name="Улан"
              greetTxt="Сегодня отличный вечер, чтобы узнать новое или закрепить знания на практике."
            />
            <StudentProgressBar
              completedPercent={12}
              level="noob"
              levelIcon={img}
            />
            <Calendar />
            <StudentProgress stack={stack} />
            <OnBoarding />
            <Box className={styles.scores}>
              <PaperStyled>
                <div className={styles.score}>
                  <img src={points} alt="points" />
                  <p>23 points</p>
                </div>
              </PaperStyled>
              <PaperStyled>
                <div className={styles.score}>
                  <img src={coin} alt="coin" />
                  <p>23 points</p>
                </div>
              </PaperStyled>
            </Box>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
