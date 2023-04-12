import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebase } from "../services";

import { Google } from '@mui/icons-material';
import { Grow, Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { BreakpointName, ls } from "../utils";

const AdminLogin = () => {
    const navigate = useNavigate();
    const breakpoint = BreakpointName();
    
    const app = initializeApp(firebase.config);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
        prompt: 'select_account'
    });

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            ls.Set("accessToken", result.user.accessToken);
            navigate('/admin/home');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                <Box>
                    <Typography sx={{mb: breakpoint === 'xs' ? 1 : breakpoint === 'sm' ? 3 : 5}} variant={breakpoint === 'xs' ? 'h4' : breakpoint === 'sm' ? 'h2' : 'h1'} fontWeight="bold" textAlign="center">Admin Login</Typography>
                    <Box flexGrow={1}  textAlign="center" sx={{
                        '& button': {textTransform: 'none', color: '#0b0b0b', backgroundColor: '#ffffff', maxWidth: '70%', px: breakpoint === 'xs' ? 2 : 6, py: breakpoint === 'xs' ? 1 : 2, border: '1px solid #ffffff', borderRadius: '1rem', transition: '0.3s', '&:hover': {color: "#ffffff", backgroundColor: '#0b0b0b'}}
                        }}>
                        <Button onClick={signInWithGoogle}><Google sx={{mr: breakpoint === 'xs' ? 1 : 2}}/> Sign In with Google</Button>
                    </Box>
                </Box>
                </Grow>
            </motion.div>
        </>
    );
}

export default AdminLogin;