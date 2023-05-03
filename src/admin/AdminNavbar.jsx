import { useEffect, useState } from 'react';
import { useNavigate, Link, NavLink } from "react-router-dom";

import { Box, Button, IconButton, Grow } from '@mui/material';
import { Home, AccountTree, Person2, ArrowBackIos, Logout, Settings } from '@mui/icons-material';
import { BreakpointName, ls } from "../utils";

const AdminNavbar = () => {
    const navigate = useNavigate();
    const breakpoint = BreakpointName();

    const [ loggedIn, setLoggedIn ] = useState(false);

    useEffect(() => {
        if (ls.Get('token')) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [navigate]);

    const logout = () => {
        ls.Remove('token');
        ls.Remove('email');
        ls.Remove('name');
        navigate('/admin/login');
    }

    return (
        <nav>
            <Grow in={true} timeout={1000}>
                <Box display="flex" height="13vh" alignItems="center">
                    <Box flexGrow={1} px={breakpoint === 'xs' ? 3 : 6} textAlign="left" sx={{
                        '& a': {textDecoration: 'none'},
                        '& button': {textTransform: 'none', color: '#bbbbbb', px: 2, '&:hover': {color: "#ffffff"}}
                        }}>
                        {breakpoint === 'xs' || breakpoint === 'sm' ?
                        <>
                            <NavLink to="/"><IconButton title="Home"> <ArrowBackIos /> </IconButton></NavLink>
                        </> :
                        <>
                        <Link to="/"><Button>Back to afanhandoyo.com</Button></Link>
                        </>
                        }
                    </Box>
                    { loggedIn && 
                    <>
                    <Grow in={true} timeout={1000}>
                    <Box flexGrow={1} px={breakpoint === 'xs' ? 3 : 6} textAlign="right" sx={{
                        '& a': {textDecoration: 'none', '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                        '& button': {textTransform: 'none', color: '#888888', px: 1, '&:hover': {color: "#dddddd"}}
                        }}>
                    {breakpoint === 'xs' || breakpoint === 'sm' ?
                        <>
                            <NavLink to="/admin/home" end><IconButton title="Admin Home"> <Home /> </IconButton></NavLink>
                            <NavLink to="/admin/projects" end><IconButton title="Admin Projects"> <AccountTree /> </IconButton></NavLink>
                            <NavLink to="/admin/about" end><IconButton title="Admin About"> <Person2 /> </IconButton></NavLink>
                            <NavLink to="/admin/settings" end><IconButton title="Admin Settings"> <Settings /> </IconButton></NavLink>
                            <IconButton title="Admin Logout" onClick={logout}> <Logout /> </IconButton>
                        </>
                        :
                        <>
                            <NavLink to="/admin/home" end><Button>Home</Button></NavLink>
                            <NavLink to="/admin/projects" end><Button>Projects</Button></NavLink>
                            <NavLink to="/admin/about" end><Button>About</Button></NavLink>
                            <NavLink to="/admin/settings" end><Button>Settings</Button></NavLink>
                            <Button onClick={logout}>Logout</Button>
                        </>
                        }
                    
                    </Box>
                    </Grow>
                    </>}
                </Box>
            </Grow>
        </nav>
    );
}

export default AdminNavbar;