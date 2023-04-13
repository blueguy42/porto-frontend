import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Footer } from '../components';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";
import { ls, PathnameArray } from "../utils";

import { Page404 } from '../pages';
import { AdminNavbar, AdminNavbarNotLoggedIn, AdminNavbarBlank, AdminLogin, AdminHome, AdminProjects, AdminAbout } from './';

import axios from 'axios';

const AdminApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [AdminLoginStatus, setAdminLoginStatus] = useState(false);
  const [ postCheck, setPostCheck ] = useState(false);

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ loginError, setLoginError ] = useState("");

  const path = PathnameArray();

  useEffect(() => {
    const token = ls.Get('accessToken') || "";

    axios.post(process.env.REACT_APP_BASE_URL + 'auth/validate', { token })
    .then(response => {
        if (response.status === 200) {
        const responseEmail = response.data.email;
        const responseName = response.data.name;

        axios.get(process.env.REACT_APP_BASE_URL + 'email/get', { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
            const validEmail = response.data.email;
            if (validEmail.includes(responseEmail)) {
                setAdminLoginStatus(true);
                setPostCheck(true);
                setName(responseName);
                setEmail(responseEmail);
                setLoginError("");
                if ((path.length === 1) || (path[1] === 'login')) navigate('/admin/home');
            } else {
                ls.Remove('accessToken');
                setAdminLoginStatus(false);
                setPostCheck(true);
                setLoginError("Unauthorized email");
                navigate('/admin/login');
            }
        })
        .catch(error => {
            ls.Remove('accessToken');
            setAdminLoginStatus(false);
            setPostCheck(true);
            setLoginError("Unauthorized email");
            navigate('/admin/login');
        });
        } else {
            ls.Remove('accessToken');
            setAdminLoginStatus(false);
            setPostCheck(true);
            if (JSON.stringify(path) !== JSON.stringify(['admin', 'login'])) navigate('/admin/login');
        }
    })
    .catch(error => {
        ls.Remove('accessToken');
        setAdminLoginStatus(false);
        setPostCheck(true);
        if (JSON.stringify(path) !== JSON.stringify(['admin', 'login'])) navigate('/admin/login');
    });
  }, [path]);

  return (
    <>
      { !postCheck ? < AdminNavbarBlank /> : AdminLoginStatus ? <AdminNavbar /> : <AdminNavbarNotLoggedIn />}
      <main>
        <Box sx={{ mx: { xs: '5%', sm: '10%' } }} display="flex" minHeight={`calc(100vh - 13vh - 13vh)`} alignItems="center" justifyContent="center">
          <AnimatePresence mode='wait'>
            <Routes location={location} key={[path, loginError]}>
              { postCheck ?
              <>
                <Route path="/admin/login" element={<AdminLogin loginError={loginError} />} />
                <Route path="/admin/home" element={<AdminHome name={name} email={email} />} />
                <Route path="/admin/projects" element={<AdminProjects name={name} email={email} />} />
                <Route path="/admin/about" element={<AdminAbout name={name} email={email} />} />
                
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

export default AdminApp;