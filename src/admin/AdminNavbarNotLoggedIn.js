import { Box, Button, IconButton, Grow } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { BreakpointName } from "../utils";

const AdminNavbarNotLoggedIn = () => {
    const breakpoint = BreakpointName();

    return (
        <nav>
            <Grow in={true} timeout={1000}>
                <Box display="flex" height="13vh" alignItems="center">
                    <Box flexGrow={1} px={breakpoint === 'xs' ? 3 : 6} textAlign="left" sx={{
                        '& a': {textDecoration: 'none'},
                        '& button': {textTransform: 'none', color: '#bbbbbb', px: 1, '&:hover': {color: "#ffffff"}}
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
                </Box>
            </Grow>
        </nav>
    );
}

export default AdminNavbarNotLoggedIn;