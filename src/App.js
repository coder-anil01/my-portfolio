import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Dashbord from './admin/Dashbord';
import BlogAdmin from './admin/BlogAdmin';
import MessagesAdmin from './admin/MessagesAdmin';
import ServicesAdmin from './admin/ServicesAdmin';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Navbar/>}/>
{/* ADMIN */}
          <Route path="/admin" exact element={<Dashbord/>}>
            <Route path="" exact element={<MessagesAdmin/>}/>
            <Route path="blog" exact element={<BlogAdmin/>}/>
            <Route path="services" exact element={<ServicesAdmin/>}/>
          </Route>

        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
