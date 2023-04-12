import { Box, Button, IconButton, Grow } from '@mui/material';
import { Home, AccountTree, Person2, ArrowBackIos, Logout } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { BreakpointName, ls } from "../utils";

const AdminNavbar = () => {
    const breakpoint = BreakpointName();

    const logout = () => {
        ls.Remove('accessToken');
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
                    <Box flexGrow={1} px={breakpoint === 'xs' ? 3 : 6} textAlign="right" sx={{
                        '& a': {textDecoration: 'none', '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                        '& button': {textTransform: 'none', color: '#888888', px: 1, '&:hover': {color: "#dddddd"}}
                        }}>
                    {breakpoint === 'xs' || breakpoint === 'sm' ?
                        <>
                            <NavLink to="/admin/home"><IconButton title="Admin Home"> <Home /> </IconButton></NavLink>
                            <NavLink to="/admin/projects"><IconButton title="Admin Projects"> <AccountTree /> </IconButton></NavLink>
                            <NavLink to="/admin/about"><IconButton title="Admin About"> <Person2 /> </IconButton></NavLink>
                            <NavLink to="/admin/login"><IconButton title="Admin Logout" onClick={logout}> <Logout /> </IconButton></NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/admin/home"><Button>Home</Button></NavLink>
                            <NavLink to="/admin/projects"><Button>Projects</Button></NavLink>
                            <NavLink to="/admin/about"><Button>About</Button></NavLink>
                            <NavLink to="/admin/login"><Button onClick={logout}>Logout</Button></NavLink>
                        </>
                        }
                    
                    </Box>
                </Box>
            </Grow>
        </nav>
    );
}

export default AdminNavbar;