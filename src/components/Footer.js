import { Box, Typography, useMediaQuery, Grow } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const Footer = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const year = new Date().getFullYear()

    return (
        <motion.div exit={{ opacity: 0 } } initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
            <Grow in={true} timeout={1000}>
                <footer>
                    <Box display="flex" px={isSmallScreen ? 3 : 6} height="13vh" justifyContent="center" alignItems="center" textAlign="center">
                        <NavLink to="/" className='footer-link' style={{ userSelect: "none" }}>
                            <Typography>
                                © {year} Ahmad Alfani Handoyo{!isSmallScreen && ` | All Rights Reserved`}
                            </Typography>
                        </NavLink>
                    </Box>
                </footer>
            </Grow>
        </motion.div>
    );
}

export default Footer;