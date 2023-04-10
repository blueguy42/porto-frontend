import { Box, Typography, Grow } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { BreakpointName } from "../utils";

const Footer = () => {
    const breakpoint = BreakpointName();
    const year = new Date().getFullYear()

    return (
        <motion.div exit={{ opacity: 0 } } initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
            <Grow in={true} timeout={1000}>
                <footer>
                    <Box display="flex" px={breakpoint === 'xs' ? 3 : 6} height="13vh" justifyContent="center" alignItems="center" textAlign="center">
                        <NavLink to="/copyright" className='footer-link' style={{ userSelect: "none" }}>
                            <Typography variant={ breakpoint === 'xs' ? 'body2': 'body1'}>
                                © {year} Ahmad Alfani Handoyo{!(breakpoint === 'xs') && ` | All Rights Reserved`}
                            </Typography>
                        </NavLink>
                    </Box>
                </footer>
            </Grow>
        </motion.div>
    );
}

export default Footer;