import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const Footer = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const year = new Date().getFullYear()

    return (
        <footer>
            <Box display="flex" px={isSmallScreen ? 3 : 6} height="13vh" justifyContent="center" alignItems="center" textAlign="center">
                <Typography>
                    © {year} Ahmad Alfani Handoyo | All Rights Reserved
                </Typography>
            </Box>
        </footer>
    );
}

export default Footer;