import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Timer from './components/Timer/Timer';
import BreathingExercise from './components/BreathingExercise/BreathingExercise';
import ProgressTracker from './components/ProgressTracker/ProgressTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/breathing" element={<BreathingExercise />} />
        <Route path="/progress" element={<ProgressTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
