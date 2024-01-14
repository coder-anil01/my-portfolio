import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Navbar/>}/>
        </Routes>
    </Router>
  );
}

export default App;
