import { useState, useEffect } from 'react';

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
    <div>
      <h2>Дыхательные Упражнения</h2>
      <div>{steps[step]}</div>
    </div>
  );
};

export default BreathingExercise;
