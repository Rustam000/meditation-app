import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать в Медитационное Приложение</h1>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/timer" className={styles.link}>Таймер Медитации</Link></li>
          <li><Link to="/breathing" className={styles.link}>Дыхательные Упражнения</Link></li>
          <li><Link to="/progress" className={styles.link}>Отслеживание Прогресса</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
