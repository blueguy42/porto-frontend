import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Projects, About } from './pages';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";


const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <Box sx={{ px: '10%' }}> 
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
          </AnimatePresence>
        </Box>
      </main>
    </>
  );
}

export default App;