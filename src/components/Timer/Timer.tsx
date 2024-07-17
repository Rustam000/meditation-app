import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const Timer = () => {
  const [time, setTime] = useState(300); // 5 минут
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      alert('Медитация завершена!');
    }
    return () => clearInterval(interval!);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(300);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Таймер Медитации</h2>
      <div className={styles.timeDisplay}>{`${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`}</div>
      <button className={styles.button} onClick={handleStart}>Старт</button>
      <button className={styles.button} onClick={handleReset}>Сброс</button>
    </div>
  );
};

export default Timer;
