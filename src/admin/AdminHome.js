import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";
import { ls } from "../utils";

const AdminHome = () => {
    const navigate = useNavigate();

    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [ pageLoad, setPageLoad ] = useState(false);

    useEffect(() => {
        if (!ls.Get('token')) {
            setPageLoad(false);
            navigate('/admin/login');
        } else {
            setToken(ls.Get('token'));
            setEmail(ls.Get('email'));
            setName(ls.Get('name'));
            setPageLoad(true);
        }
    }, [navigate]);

    return (
        <>
            <motion.div key={`${email} ${name} ${pageLoad}`} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                {pageLoad &&
                <>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Typography variant="h1" fontWeight="bold">Admin Home</Typography>
                        <Typography variant="body1" fontWeight="bold">{email}</Typography>
                        <Typography variant="body1" fontWeight="bold">{name}</Typography>
                    </Box>
                </Grow>
                </>}
            </motion.div>
        </>
    );
}

export default AdminHome;