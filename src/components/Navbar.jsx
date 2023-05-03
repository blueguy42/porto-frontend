import { Box, Button, IconButton, Grow } from '@mui/material';
import { Home, AccountTree, Person2 } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { BreakpointName } from "../utils";

const Navbar = () => {
    const breakpoint = BreakpointName();

    return (
        <nav>
            <Grow in={true} timeout={1000}>
                <Box display="flex" height="13vh" alignItems="center">
                    <Box flexGrow={1} px={breakpoint === 'xs' ? 3 : 6} textAlign="right" sx={{
                        '& a': {textDecoration: 'none', '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                        '& button': {textTransform: 'none', color: '#888888', px: 2, '&:hover': {color: "#dddddd"}}
                        }}>
                    {breakpoint === 'xs' ?
                        <>
                            <NavLink to="/" end><IconButton title="Home"> <Home /> </IconButton></NavLink>
                            <NavLink to="/projects"><IconButton title="Projects"> <AccountTree /> </IconButton></NavLink>
                            <NavLink to="/about" end><IconButton title="About"> <Person2 /> </IconButton></NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/" end><Button>Home</Button></NavLink>
                            <NavLink to="/projects"><Button>Projects</Button></NavLink>
                            <NavLink to="/about" end><Button>About</Button></NavLink>
                        </>
                        }
                    
                    </Box>
                </Box>
            </Grow>
        </nav>
    );
}

export default Navbar;