import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const year = new Date().getFullYear()

    return (
        <footer>
            <Box display="flex" px={isSmallScreen ? 3 : 6} height="13vh" justifyContent="center" alignItems="center" textAlign="center">
                <NavLink to="/" className='footer-link' style={{ userSelect: "none" }}>
                    <Typography>
                        © {year} Ahmad Alfani Handoyo{!isSmallScreen && ` | All Rights Reserved`}
                    </Typography>
                </NavLink>
            </Box>
        </footer>
    );
}

export default Footer;