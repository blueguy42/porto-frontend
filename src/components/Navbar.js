import { Box, Button, IconButton, Grow } from '@mui/material';
import { Home, AccountTree, Person2 } from '@mui/icons-material';
import { BreakpointName } from "../utils";
import { NavLink } from 'react-router-dom';
import { PathnameArray } from "../utils";

const Navbar = () => {
    const breakpoint = BreakpointName();
    const path = PathnameArray();
    console.log(path);

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
                            <NavLink to="/" className={path[0] === '' ? 'active':''}><IconButton title="Home"> <Home /> </IconButton></NavLink>
                            <NavLink to="/projects" className={path[0] === 'projects' ? 'active':''}><IconButton title="Projects"> <AccountTree /> </IconButton></NavLink>
                            <NavLink to="/about" className={path[0] === 'about' ? 'active':''}><IconButton title="About"> <Person2 /> </IconButton></NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/" className={path[0] === '' ? 'active':''}><Button>Home</Button></NavLink>
                            <NavLink to="/projects" className={path[0] === 'projects' ? 'active':''}><Button>Projects</Button></NavLink>
                            <NavLink to="/about" className={path[0] === 'about' ? 'active':''}><Button>About</Button></NavLink>
                        </>
                        }
                    
                    </Box>
                </Box>
            </Grow>
        </nav>
    );
}

export default Navbar;