import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Projects, About } from './pages';
import { Box } from '@mui/material';


const App = () => {
  return (
    <>
    <Navbar />
    <main>
      <Box sx={{ px: '10%' }}> 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
      </Box>
    </main>
    </>
  );
}

export default App;