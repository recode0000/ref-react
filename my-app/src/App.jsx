import { Routes, Route, Link } from 'react-router-dom';
import Lesson01 from './routes/lesson01';
import './App.css';


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/lesson01">Lesson01</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/lesson01" element={<Lesson01/>} />
      </Routes>
    </div>
  );
}

export default App;
