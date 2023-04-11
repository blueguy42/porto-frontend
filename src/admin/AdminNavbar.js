import { Box, Button, IconButton, Grow } from '@mui/material';
import { Home, AccountTree, Person2, ArrowBackIos } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { BreakpointName, PathnameArray } from "../utils";

const AdminNavbar = () => {
    const breakpoint = BreakpointName();
    const path = PathnameArray();

    return (
        <nav>
            <Grow in={true} timeout={1000}>
                <Box display="flex" height="13vh" alignItems="center">
                    <Box flexGrow={1} px={breakpoint === 'xs' ? 3 : 6} textAlign="left" sx={{
                        '& a': {textDecoration: 'none'},
                        '& button': {textTransform: 'none', color: '#bbbbbb', px: 2, '&:hover': {color: "#ffffff"}}
                        }}>
                        {breakpoint === 'xs' ?
                        <>
                            <NavLink to="/"><IconButton title="Home"> <ArrowBackIos /> </IconButton></NavLink>
                        </> :
                        <>
                        <Link to="/"><Button>Back to afanhandoyo.com</Button></Link>
                        </>
                        }
                    </Box>
                    <Box flexGrow={1} px={breakpoint === 'xs' ? 3 : 6} textAlign="right" sx={{
                        '& a': {textDecoration: 'none', '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                        '& button': {textTransform: 'none', color: '#888888', px: 2, '&:hover': {color: "#dddddd"}}
                        }}>
                    {breakpoint === 'xs' ?
                        <>
                            <NavLink to="/admin" className={path[0] === '' ? 'active':''}><IconButton title="Admin Home"> <Home /> </IconButton></NavLink>
                            <NavLink to="/admin/projects" className={path[0] === 'projects' ? 'active':''}><IconButton title="Admin Projects"> <AccountTree /> </IconButton></NavLink>
                            <NavLink to="/admin/about" className={path[0] === 'about' ? 'active':''}><IconButton title="Admin About"> <Person2 /> </IconButton></NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/admin" className={path[0] === '' ? 'active':''}><Button>Home</Button></NavLink>
                            <NavLink to="/admin/projects" className={path[0] === 'projects' ? 'active':''}><Button>Projects</Button></NavLink>
                            <NavLink to="/admin/about" className={path[0] === 'about' ? 'active':''}><Button>About</Button></NavLink>
                        </>
                        }
                    
                    </Box>
                </Box>
            </Grow>
        </nav>
    );
}

export default AdminNavbar;