import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Projects, About, Test } from './pages';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";


const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      
      <main>
        <Box sx={{ px: '10%' }} display="flex" minHeight="calc(100vh - 13vh - 13vh)" alignItems="center" justifyContent="center"> 
          <AnimatePresence mode='wait'>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/test" element={<Test/>} />
              </Routes>
            </AnimatePresence>
        </Box>
      </main>
      <Footer />
    </>
  );
}

export default App;