import React from "react";
import { useState } from "react";
import { Typography, Box, useMediaQuery, Grow } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const ref = React.useRef(null);
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [anim, setAnim] = useState(0);
    return (
        <>  
            <motion.div exit={{ opacity: 0 } } initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    >
                    { anim === 0 && 
                    <>
                        <Typography variant="h1" fontWeight="bold" textAlign="center" style={{ userSelect: "none" }}>
                            <TypeAnimation
                                ref={ref}
                                speed={300}
                                cursor={false}
                                className={CURSOR_CLASS_NAME}
                                sequence={[
                                    1000,
                                    (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                    ' Hi!',
                                    1500,
                                    () => setAnim(1),
                                ]}
                                wrapper="span"
                                repeat={0}
                            />
                        </Typography>
                    </>}
                    { anim === 1 &&
                    <>
                        <Typography variant="h2" textAlign="center" style={{ userSelect: "none" }}>
                            <TypeAnimation
                                ref={ref}
                                speed={200}
                                cursor={false}
                                className={CURSOR_CLASS_NAME}
                                sequence={[
                                    (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                    '',
                                    500,
                                    'My name',
                                    700,
                                    'My name is',
                                    1000,
                                    () => setAnim(2),
                                ]}
                                wrapper="span"
                                repeat={0}
                            />
                        </Typography>
                    </>}
                    { anim === 2 &&
                    <>
                        <Typography variant="h2" fontWeight="bold" textAlign="center" style={{ userSelect: "none" }}>
                            <TypeAnimation
                                ref={ref}
                                speed={150}
                                cursor={false}
                                className={CURSOR_CLASS_NAME}
                                sequence={[
                                    (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                    '',
                                    1000,
                                    'Ahmad Alfani Handoyo',
                                    2000,
                                    'Afan',
                                    2000,
                                    '',
                                    500,
                                    () => setAnim(3),
                                ]}
                                wrapper="span"
                                repeat={0}
                            />
                        </Typography>
                    </>}
                    { anim === 3 &&
                    <>
                        <Grow in={anim===3} timeout={1000}>
                            <Typography variant="h1" textAlign="center">P INGPO HOME</Typography>
                        </Grow>
                    </>}
                </Box>
            </motion.div>
        </>
    );
}

export default Home;