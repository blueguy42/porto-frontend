import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from '../components';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";
import { PathnameArray } from "../utils";

import { AdminNavbar, AdminLogin, AdminHome, AdminProjects, AdminAbout, AdminSettings, Admin404 } from './';

const AdminApp = () => {
  const location = useLocation();

  const path = PathnameArray();
  return (
      <>
        <AdminNavbar />
        <main>
          <Box sx={{ mx: { xs: '5%', sm: '10%' } }} display="flex" minHeight={`calc(100vh - 13vh - 13vh)`} alignItems="center" justifyContent="center">
            <AnimatePresence mode='wait'>
              <Routes location={location} key={path}>
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/home" element={<AdminHome />} />
                  <Route path="/admin/projects" element={<AdminProjects />} />
                  <Route path="/admin/about" element={<AdminAbout />} />
                  <Route path="/admin/settings" element={<AdminSettings />} />
                  <Route path="/admin/*" element={<Admin404/>} />
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

export default AdminApp;