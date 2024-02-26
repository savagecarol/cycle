import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Rides from './pages/Rides';
import Story from './pages/Story';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
