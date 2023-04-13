import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebase } from "../services";

import { Google } from '@mui/icons-material';
import { Grow, Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { BreakpointName, ls } from "../utils";

import axios from 'axios';

const AdminLogin = () => {
    const navigate = useNavigate();
    const breakpoint = BreakpointName();

    const [errorMsg, setErrorMsg] = useState('');
    const [ pageLoad, setPageLoad ] = useState(false);
    
    const app = initializeApp(firebase.config);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
        prompt: 'select_account'
    });

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const token = result.user.accessToken;
            const email = result.user.email;
            const name = result.user.displayName;
            axios.get(process.env.REACT_APP_BASE_URL + 'email/get')
            .then(response => {
                const validAdmin = response.data.admin;
                const validEmails = response.data.email;
                if (validEmails.includes(email) || validAdmin === email) {
                    ls.Set("token", token);
                    ls.Set("email", email);
                    ls.Set("name", name);
                    navigate('/admin/home');
                } else {
                    ls.Remove('token');
                    ls.Remove('email');
                    ls.Remove('name');
                    setErrorMsg(`Unauthorized email: ${email}`);
                }
            });
        }).catch((error) => {
            console.error(error);
            ls.Remove('token');
            ls.Remove('email');
            ls.Remove('name');
        });
    }

    useEffect(() => {
        if (ls.Get('token')) {
            setPageLoad(false);
            navigate('/admin/home');
        } else {
            setPageLoad(true);
        }
    }, [navigate]);

    return (
        <>
            <motion.div key={`${errorMsg} ${pageLoad}`} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                {pageLoad &&
                <>
                    <Grow in={true} timeout={1000}>
                    <Box>
                        <Typography variant={breakpoint === 'xs' ? 'h4' : breakpoint === 'sm' ? 'h2' : 'h1'} fontWeight="bold" textAlign="center">Admin Login</Typography>
                        <Typography sx={{mb: breakpoint === 'xs' ? 1 : breakpoint === 'sm' ? 3 : 5}} variant={breakpoint === 'xs' || breakpoint === 'sm' ? 'body2' : 'body1'} textAlign="center">
                            {errorMsg}
                        </Typography>
                        <Box flexGrow={1}  textAlign="center" sx={{
                            '& button': {textTransform: 'none', color: '#0b0b0b', backgroundColor: '#ffffff', maxWidth: '70%', px: breakpoint === 'xs' ? 2 : 6, py: breakpoint === 'xs' ? 1 : 2, border: '1px solid #ffffff', borderRadius: '1rem', transition: '0.3s', '&:hover': {color: "#ffffff", backgroundColor: '#0b0b0b'}}
                            }}>
                            <Button onClick={signInWithGoogle}><Google sx={{mr: breakpoint === 'xs' ? 1 : 2}}/> Sign In with Google</Button>
                        </Box>
                    </Box>
                    </Grow>
                </>
                }
            </motion.div>
        </>
    );
}

export default AdminLogin;