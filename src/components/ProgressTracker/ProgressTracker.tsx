import { useState, useEffect } from 'react';
import styles from './ProgressTracker.module.css';

const ProgressTracker = () => {
  const [sessions, setSessions] = useState<number[]>([]);

  useEffect(() => {
    // Загрузка сохраненных данных при монтировании компонента
    const savedSessions = JSON.parse(localStorage.getItem('meditationSessions') || '[]');
    setSessions(savedSessions);

    // Удаление данных при обновлении или закрытии страницы
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Обработчик события перед выгрузкой страницы
  const handleBeforeUnload = () => {
    localStorage.removeItem('meditationSessions');
  };

  const addSession = (duration: number) => {
    const newSessions = [...sessions, duration];
    setSessions(newSessions);
    localStorage.setItem('meditationSessions', JSON.stringify(newSessions));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отслеживание Прогресса</h2>
      <button className={styles.button} onClick={() => addSession(5)}>Добавить 5 минут медитации</button>
      <div className={styles.sessionList}>
        <h3>История Сессий</h3>
        <ul>
          {sessions.map((session, index) => (
            <li key={index}>{session} минут</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
