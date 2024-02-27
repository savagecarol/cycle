import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './presentation/Home';
import About from './presentation/About';
import Rides from './presentation/Rides';
import Story from './presentation/Story';
import ReadStory from './presentation/pages/ReadStory';
import CreateStory from './presentation/pages/CreateStory';
import Admin from './presentation/admin/Admin';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/create-story" element={<CreateStory />} />
        <Route path="/stories/:storyId" element={<ReadStory />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
export default App;
