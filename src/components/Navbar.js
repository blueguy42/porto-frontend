import { Box, Button, IconButton, useMediaQuery, Grow } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Home, AccountTree, Person2 } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <nav>
            <Grow in={true} timeout={1000}>
                <Box display="flex" height="13vh" alignItems="center">
                    <Box flexGrow={1} px={isSmallScreen ? 3 : 6} textAlign="right" sx={{
                        '& a': {textDecoration: 'none', '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                        '& button': {textTransform: 'none', color: '#888888', px: 2, '&:hover': {color: "#dddddd"}}
                        }}>
                    {isSmallScreen ?
                        <>
                            <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}><IconButton title="Home"> <Home /> </IconButton></NavLink>
                            <NavLink to="/projects" className={(navData) => (navData.isActive ? "active" : 'none')}><IconButton title="Projects"> <AccountTree /> </IconButton></NavLink>
                            <NavLink to="/about" className={(navData) => (navData.isActive ? "active" : 'none')}><IconButton title="About"> <Person2 /> </IconButton></NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}><Button>Home</Button></NavLink>
                            <NavLink to="/projects" className={(navData) => (navData.isActive ? "active" : 'none')}><Button>Projects</Button></NavLink>
                            <NavLink to="/about" className={(navData) => (navData.isActive ? "active" : 'none')}><Button>About</Button></NavLink>
                        </>
                        }
                    
                    </Box>
                </Box>
            </Grow>
        </nav>
    );
}

export default Navbar;