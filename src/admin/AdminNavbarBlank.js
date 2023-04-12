import { Box, Grow } from '@mui/material';

const AdminNavbarBlank = () => {
    return (
        <nav>
            <Grow in={true} timeout={1000}>
                <Box display="flex" height="13vh" alignItems="center">
                </Box>
            </Grow>
        </nav>
    );
}

export default AdminNavbarBlank;