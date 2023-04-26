import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";
import { ls, BreakpointName } from "../utils";
import { Loader } from '../components';

import { EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import axios from 'axios';

const AdminSettings = () => {
    const breakpoint = BreakpointName();
    const navigate = useNavigate();

    const [ token, setToken ] = useState('');
    const [ pageLoad, setPageLoad ] = useState(false);

    const [ dataSuperuser, setDataSuperuser ] = useState(-1);

    const [ dataEmails, setDataEmails ] = useState(-1);
    const [ isEditingEmails, setIsEditingEmails ] = useState(false);
    const [ emailError, setEmailError ] = useState('');

    useEffect(() => {
        if (!ls.Get('token')) {
            setPageLoad(false);
        } else {
            setToken(ls.Get('token'));
            setPageLoad(true);
        }
    }, []);

    useEffect(() => {
        if (token) {
            axios.get(process.env.REACT_APP_BASE_URL + 'email/get')
            .then(response => {
                setDataSuperuser(response.data.admin);
                const validEmails = response.data.email;
                let validEmailsString = '';
                validEmails.forEach((email, index) => {
                    if (index === 0) {
                        validEmailsString = email;
                    } else {    
                        validEmailsString = validEmailsString + ', ' + email;
                    }
                });
                setDataEmails(validEmailsString);
            }).catch((error) => {
                console.error(error);
                setEmailError('Error retrieving emails');
            });
        }
    },[token]);

    const handleChange = (e, setFn) => {
        setFn(e.target.value);
    };

    const handleSave = (val, func) => {
        func(val);
    };

    const handleEditEmail = () => {
        setIsEditingEmails(true);
    };
      
    const handleBlurEmail = () => {
        setIsEditingEmails(false);
    };

    const saveEmails = (emails) => {
        const validEmails = emails.split(', ');
        let valid = true;
        validEmails.forEach((email) => {
            if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                valid = false;
                setEmailError('Invalid email format');
            }
        });
        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'email/put', { email: validEmails }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setEmailError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'email/get')
            .then(response => {
                setDataSuperuser(response.data.admin);
                const validEmails = response.data.email;
                let validEmailsString = '';
                validEmails.forEach((email, index) => {
                    if (index === 0) {
                        validEmailsString = email;
                    } else {    
                        validEmailsString = validEmailsString + ', ' + email;
                    }
                });
                setDataEmails(validEmailsString);
            }).catch((error) => {
                console.error(error);
                setEmailError('Error retrieving emails');
        });
        }
    };

    return (
        <>
            <motion.div key={`${pageLoad}`} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                {pageLoad && dataSuperuser !== -1 && dataEmails !== -1 ?
                <>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', mb: 2 }}>
                            <Typography
                                variant={
                                    breakpoint === 'xs' ? 'h4' :
                                    breakpoint === 'sm' ? 'h2' :
                                    breakpoint === 'md' ? 'h2' :
                                    breakpoint === 'lg' ? 'h1' :
                                    'h1'}
                            fontWeight="bold">Admin Settings</Typography>
                        </Box>

                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold">Superuser Email</Typography>
                            <Typography variant="body1">{dataSuperuser } </Typography>
                        </Box>

                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold">Allowed Emails</Typography>
                            <Typography variant="caption" sx={{ mb: 1 }}>Fill in comma-separated emails. (Example: 123@gmail.com, 234@gmail.com)</Typography>
                            <EditTextarea
                                id='allowed-emails'
                                name='allowed-emails'
                                style={{ margin: '0rem', padding: '10px', fontSize: "16px", fontFamily: "Roboto", border: '1px solid #ccc', backgroundColor: isEditingEmails ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditEmail}
                                onBlur={handleBlurEmail}
                                onChange={(e) => handleChange(e, setDataEmails)}
                                onSave={({value}) => handleSave(value, saveEmails)}
                                value={dataEmails}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{emailError ? emailError : <br/>}</Typography>
                        </Box>
                    </Box>
                </Grow>
                </> :
                <Loader />
                }
            </motion.div>
        </>
    );
}

export default AdminSettings;