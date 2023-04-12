import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";
import { ls, PathnameArray } from "./utils";

import { Home, Projects, About, Test, Copyright, Page404 } from './pages';
import { AdminNavbar, AdminNavbarNotLoggedIn, AdminNavbarBlank, AdminLogin, AdminHome, AdminProjects, AdminAbout } from './admin';

import axios from 'axios';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [AdminLoginStatus, setAdminLoginStatus] = useState(false);
  const [ postCheck, setPostCheck ] = useState(false);
  const [ email, setEmail ] = useState("");

  const path = PathnameArray();

  useEffect(() => {
    if (path[0] === 'admin') {
      const token = ls.Get('accessToken') || "";

      axios.post(process.env.REACT_APP_BASE_URL + 'auth/validate', { token })
        .then(response => {
          if (response.status === 200) {
            const data = response.data;
            console.log(data);
            setEmail(data.email);
            setAdminLoginStatus(true);
            setPostCheck(true);
            if ((path.length === 1) || (path[1] === 'login')) navigate('/admin/home');
          } else {
            const data = response.data;
            console.log(data);
            ls.Remove('accessToken');
            setAdminLoginStatus(false);
            setPostCheck(true);
            if (JSON.stringify(path) !== JSON.stringify(['admin', 'login'])) navigate('/admin/login');
          }
        })
        .catch(error => {
          const data = error.response.data;
          console.log(data);
          ls.Remove('accessToken');
          setAdminLoginStatus(false);
          setPostCheck(true);
          if (JSON.stringify(path) !== JSON.stringify(['admin', 'login'])) navigate('/admin/login');
        });
    } else {
      setAdminLoginStatus(false);
      setPostCheck(true);
    }
  }, [path, navigate]);

  return (
    <>
      { path[0] !== 'admin' ? <Navbar /> : !postCheck ? < AdminNavbarBlank /> : AdminLoginStatus ? <AdminNavbar /> : <AdminNavbarNotLoggedIn />}
      <main>
        <Box sx={{ mx: { xs: '5%', sm: '10%' } }} display="flex" minHeight={`calc(100vh - 13vh - 13vh)`} alignItems="center" justifyContent="center">
          <AnimatePresence mode='wait'>
            <Routes location={location} key={path}>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/copyright" element={<Copyright/>} />
              <Route path="/test" element={<Test/>} />

              { ((path[0] !== 'admin') || (path[0] === 'admin' && postCheck)) ?
              <>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/home" element={<AdminHome email={email} />} />
                <Route path="/admin/projects" element={<AdminProjects email={email} />} />
                <Route path="/admin/about" element={<AdminAbout email={email} />} />
                
                <Route path="*" element={<Page404/>} />
              </> :
              <Route path="*" element={<></>} />
              }
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