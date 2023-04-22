import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";
import { ls, BreakpointName } from "../utils";
import { Loader } from '../components';

const AdminAbout = () => {
    const breakpoint = BreakpointName();
    const navigate = useNavigate();

    const [token, setToken] = useState('');
    const [ pageLoad, setPageLoad ] = useState(false);

    useEffect(() => {
        if (!ls.Get('token')) {
            setPageLoad(false);
            navigate('/admin/login');
        } else {
            setToken(ls.Get('token'));
            setPageLoad(true);
        }
    }, [navigate]);

    return (
        <>
            <motion.div key={`${pageLoad}`} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                {pageLoad ? 
                <>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Typography
                        variant={
                            breakpoint === 'xs' ? 'h4' :
                            breakpoint === 'sm' ? 'h2' :
                            breakpoint === 'md' ? 'h2' :
                            breakpoint === 'lg' ? 'h1' :
                            'h1'}
                        fontWeight="bold">Admin About</Typography>
                    </Box>
                </Grow>
                </>
                :
                <Loader />}
            </motion.div>
        </>
    );
}

export default AdminAbout;