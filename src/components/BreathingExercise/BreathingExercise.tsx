import { useState, useEffect } from 'react';
import styles from './BreathingExercise.module.css';

const BreathingExercise = () => {
  const [step, setStep] = useState(0);
  const steps = ['Вдохните', 'Задержите дыхание', 'Выдохните', 'Задержите дыхание'];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((step) => (step + 1) % steps.length);
    }, 4000); // 4 секунды на каждую фазу
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Дыхательные Упражнения</h2>
      <div className={styles.step}>{steps[step]}</div>
    </div>
  );
};

export default BreathingExercise;
