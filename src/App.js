import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Navbar/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
