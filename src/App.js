import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './presentation/Home';
import About from './presentation/About';
import Rides from './presentation/Rides';
import Story from './presentation/Story';
import ReadStory from './presentation/pages/ReadStory';
import CreateStory from './presentation/pages/CreateStory';
import AdminPanel from './presentation/admin/AdminPanel';
import Login from './presentation/admin/Login';
import AdminPanelAllRides from './presentation/admin/AdminPanelAllRides';
import AdminPanelAddRides from './presentation/admin/AdminPanelAddRides';

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
        <Route path="/login" element={<Login />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-panel-add-rides" element={<AdminPanelAddRides />} />
        <Route path="/admin-panel-all-rides" element={<AdminPanelAllRides />} />
      </Routes>
    </Router>
  );
}
export default App;
