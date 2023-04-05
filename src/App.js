import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Projects, Contact } from './pages';
import './App.css';


const App = () => {
  const location = useLocation();

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;