import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Добро пожаловать в Медитационное Приложение</h1>
      <nav>
        <ul>
          <li><Link to="/timer">Таймер Медитации</Link></li>
          <li><Link to="/breathing">Дыхательные Упражнения</Link></li>
          <li><Link to="/progress">Отслеживание Прогресса</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
