import React from 'react';
import { useStyles } from './GreetCard.style';

interface IGreet {
  name: string;
  greetTxt: string;
}

const GreetCard: React.FC<IGreet> = ({ name, greetTxt }) => {
  const styles = useStyles();
  return (
    <div className={styles.greet_card}>
      <h1 className={styles.greet}>Привет, {name}</h1>
      <p className={styles.dailyMotivation}>{greetTxt}</p>
    </div>
  );
};

export default GreetCard;
