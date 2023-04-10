import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Projects, About, Test, Copyright } from './pages';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <main>
        <Box sx={{ mx: { xs: '5%', sm: '10%' } }} display="flex" minHeight="calc(100vh - 13vh - 13vh)" alignItems="center" justifyContent="center">
          <AnimatePresence mode='wait'>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/copyright" element={<Copyright/>} />
                <Route path="/test" element={<Test/>} />
              </Routes>
            </AnimatePresence>
        </Box>
      </main>
      <AnimatePresence mode='wait'>
      <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;