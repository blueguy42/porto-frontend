import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Typography, Box, Grow, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { ls } from "../utils";
import EditableLabel from 'react-inline-editing';

const AdminSettings = () => {
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

    const handleFocus = (text) => {
        console.log('Focused with text: ' + text);
    }

    const handleFocusOut = (text) => {
        console.log('Left editor with text: ' + text);
    }

    return (
        <>
            <motion.div key={`${email} ${name} ${pageLoad}`} exit={{ opacity: 0 }} in={{ opacity: 1 } } style={{width: "100%"}}>
                {pageLoad &&
                <>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Typography variant="h1" fontWeight="bold">Admin Settings</Typography>
                        <Typography variant="body1" fontWeight="bold">{email}</Typography>
                        <Typography variant="body1" fontWeight="bold">{name}</Typography>
                        
                        {/* https://www.npmjs.com/package/react-inline-editing */}
                        <EditableLabel text='TEST EDITABLE LABEL'
                            labelClassName='myLabelClass'
                            inputClassName='myInputClass'
                            inputWidth='200px'
                            inputHeight='25px'
                            inputMaxLength={50}
                            labelFontWeight='bold'
                            inputFontWeight='bold'
                            onFocus={handleFocus}
                            onFocusOut={handleFocusOut}
                        />
                    </Box>
                </Grow>
                </>}
            </motion.div>
        </>
    );
}

export default AdminSettings;