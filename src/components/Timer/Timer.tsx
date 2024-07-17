import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const Timer = () => {
  const [time, setTime] = useState(300); 
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<string>('');

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
        updatePhase();
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      playSound();
      alert('Медитация завершена!');
    }
    return () => clearInterval(interval!);
  }, [isActive, time]);

  const updatePhase = () => {
    const totalTime = 300; 
    const phaseLength = totalTime / 4;
    const currentPhase = Math.floor((totalTime - time) / phaseLength);
    switch (currentPhase) {
      case 0:
        setPhase('Вдох');
        break;
      case 1:
        setPhase('Задержка');
        break;
      case 2:
        setPhase('Выдох');
        break;
      case 3:
        setPhase('Задержка');
        break;
      default:
        setPhase('');
    }
  };

  const playSound = () => {
    const audio = new Audio('/yip-wong-machine-stomping.mp3');
    audio.play();
  };

  const handleStartPause = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(300);
    setPhase('');
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Таймер Медитации</h2>
      <div className={styles.timeDisplay}>{formatTime(time)}</div>
      <div className={styles.phase}>{phase}</div>
      <button className={styles.button} onClick={handleStartPause}>
        {isActive ? 'Пауза' : 'Старт'}
      </button>
      <button className={styles.button} onClick={handleReset}>Сброс</button>
    </div>
  );
};

export default Timer;
