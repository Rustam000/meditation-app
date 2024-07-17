import { useState, useEffect } from 'react';
import styles from './ProgressTracker.module.css';

const ProgressTracker = () => {
  const [sessions, setSessions] = useState<number[]>([]);
  const [newSessionTime, setNewSessionTime] = useState<number>(5);

  useEffect(() => {
    const savedSessions = JSON.parse(localStorage.getItem('meditationSessions') || '[]');
    setSessions(savedSessions);
  }, []);

  const addSession = () => {
    const newSessions = [...sessions, newSessionTime];
    setSessions(newSessions);
    localStorage.setItem('meditationSessions', JSON.stringify(newSessions));
    setNewSessionTime(5);
  };

  const deleteSession = (index: number) => {
    const newSessions = sessions.filter((_, i) => i !== index);
    setSessions(newSessions);
    localStorage.setItem('meditationSessions', JSON.stringify(newSessions));
  };

  const sortSessions = () => {
    const sortedSessions = [...sessions].sort((a, b) => b - a);
    setSessions(sortedSessions);
    localStorage.setItem('meditationSessions', JSON.stringify(sortedSessions));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSessionTime(Number(event.target.value));
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('meditationSessions');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отслеживание Прогресса</h2>
      <div className={styles.addSession}>
        <input
          type="number"
          value={newSessionTime}
          onChange={handleInputChange}
          className={styles.input}
          min="1"
        />
        <button className={styles.button} onClick={addSession}>Добавить {newSessionTime} минут медитации</button>
      </div>
      <button className={styles.button} onClick={sortSessions}>Сортировать по времени</button>
      <div className={styles.sessionList}>
        <h3>История Сессий</h3>
        <ul>
          {sessions.map((session, index) => (
            <li key={index}>
              {session} минут
              <button className={styles.deleteButton} onClick={() => deleteSession(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
