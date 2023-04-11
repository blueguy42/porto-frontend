import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebase } from "../services";

import { Grow, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { BreakpointName, SetLocalStorage } from "../utils";

const AdminLogin = () => {
    const breakpoint = BreakpointName();

    // reference: https://dev.to/mdamirgauhar/firebase-google-authentication-with-react-gop

    const app = initializeApp(firebase.config);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            SetLocalStorage("email", result.user.email);
            SetLocalStorage("accessToken", result.user.accessToken);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                <Box flexGrow={1} px={breakpoint === 'xs' ? 3 : 6} textAlign="center" sx={{
                    '& button': {textTransform: 'none', color: '#0b0b0b', backgroundColor: '#ffffff', px: 2, border: '1px solid #ffffff', borderRadius: '1rem', transition: '0.3s', '&:hover': {color: "#ffffff", backgroundColor: '#0b0b0b'}}
                    }}>
                    <Button onClick={signInWithGoogle}>Sign In with Google</Button>
                </Box>
                </Grow>
            </motion.div>
        </>
    );
}

export default AdminLogin;