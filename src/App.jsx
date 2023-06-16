import { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";
import { PathnameArray } from "./utils";

import { Home, Projects, About, Test, Copyright, Page404 } from './pages';
import { AdminApp } from './admin';

import axios from "axios";
import {Buffer} from 'buffer';

const App = () => {
  const location = useLocation();
  const path = PathnameArray();

  useEffect(() => {
    axios.get("https://api.ipify.org/?format=json")
    .then(response => {
      const ip = response.data.ip;
      const base64 = Buffer.from(ip).toString('base64');
      axios.post(import.meta.env.VITE_BASE_URL + 'misc/count', {loc: base64})
      .then()
      .catch((error) => {
          console.error(error);
      });
    })
    .catch(error => {
      console.error(error);
    });
},[]);

  return (
    <>
      { path[0] === 'admin' ? <AdminApp /> : 
      <>
        <Navbar />
        <main>
          <Box sx={{ mx: { xs: '5%', sm: '10%' } }} display="flex" minHeight={`calc(100vh - 13vh - 13vh)`} alignItems="center" justifyContent="center">
            <AnimatePresence mode='wait'>
              <Routes location={location} key={path}>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/copyright" element={<Copyright/>} />
                <Route path="/test" element={<Test/>} />

                <Route path="*" element={<Page404 />} />
              </Routes>
            </AnimatePresence>
          </Box>
        </main>
        <Footer />
      </>}
    </>
  );
}

export default App;