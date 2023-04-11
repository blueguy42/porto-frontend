import { Box, Button, IconButton, Grow } from '@mui/material';
import { Home, AccountTree, Person2 } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { BreakpointName, PathnameArray } from "../utils";

const Navbar = () => {
    const breakpoint = BreakpointName();
    const path = PathnameArray();

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
                            <NavLink to="/"><IconButton title="Home"> <Home /> </IconButton></NavLink>
                            <NavLink to="/projects" className={path[0] === 'projects' ? 'active':''}><IconButton title="Projects"> <AccountTree /> </IconButton></NavLink>
                            <NavLink to="/about"><IconButton title="About"> <Person2 /> </IconButton></NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/"><Button>Home</Button></NavLink>
                            <NavLink to="/projects" className={path[0] === 'projects' ? 'active':''}><Button>Projects</Button></NavLink>
                            <NavLink to="/about" ><Button>About</Button></NavLink>
                        </>
                        }
                    
                    </Box>
                </Box>
            </Grow>
        </nav>
    );
}

export default Navbar;