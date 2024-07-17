import { useState, useEffect } from 'react';

const ProgressTracker = () => {
  const [sessions, setSessions] = useState<number[]>([]);

  useEffect(() => {
    const savedSessions = JSON.parse(localStorage.getItem('meditationSessions') || '[]');
    setSessions(savedSessions);
  }, []);

  const addSession = (duration: number) => {
    const newSessions = [...sessions, duration];
    setSessions(newSessions);
    localStorage.setItem('meditationSessions', JSON.stringify(newSessions));
  };

  return (
    <div>
      <h2>Отслеживание Прогресса</h2>
      <button onClick={() => addSession(5)}>Добавить 5 минут медитации</button>
      <div>
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
