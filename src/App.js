import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";
import { PathnameArray } from "./utils";

import { Home, Projects, About, Test, Copyright, Page404 } from './pages';
import { AdminNavbar, AdminLogin } from './admin';

const App = () => {
  const location = useLocation();
  const path = PathnameArray();
  return (
    <>
      { path[0] !== 'admin' ? <Navbar /> : <AdminNavbar />}
      <main>
        <Box sx={{ mx: { xs: '5%', sm: '10%' } }} display="flex" minHeight={`calc(100vh - 13vh - 13vh)`} alignItems="center" justifyContent="center">
          <AnimatePresence mode='wait'>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/copyright" element={<Copyright/>} />
                <Route path="/test" element={<Test/>} />

                <Route path="/admin" element={<AdminLogin/>} />
                
                <Route path="*" element={<Page404/>} />
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