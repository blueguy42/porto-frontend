import { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { Footer } from '../components';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";
import { PathnameArray, ls } from "../utils";

import { AdminNavbar, AdminLogin, AdminHome, AdminProjects, AdminAbout, AdminSettings } from './';

import axios from 'axios';

const AdminApp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = PathnameArray();

  useEffect(() => {
    if (ls.Get('token')) {
      axios.post(import.meta.env.VITE_BASE_URL + 'auth/validate', { token: ls.Get('token') })
        .then(response => {
          if (location.pathname === '/admin/login') {
            navigate('/admin/home');
          }
        }).catch((error) => {
            ls.Remove('token');
            ls.Remove('email');
            ls.Remove('name');
            if (location.pathname !== '/admin/login') {
              navigate('/admin/login');
            }
        });
    } else {
      if (location.pathname !== '/admin/login') {
        navigate('/admin/login');
      }
    }
  }, [navigate, location.pathname]);
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
                  <Route path="/admin/*" element={<Navigate to="/admin/login" replace />} />
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