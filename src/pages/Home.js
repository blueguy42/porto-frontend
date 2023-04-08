import React from "react";
import { useState } from "react";
import { Typography, Box, useMediaQuery, Grow, Grid } from "@mui/material";
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
            <motion.div exit={{ opacity: 0 } } initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
            { (anim === 0 || anim === 1 || anim === 2) &&
                <>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    >
                    { anim === 0 && 
                    <>
                        <Typography variant="h1" fontWeight="bold" textAlign="center" style={{ userSelect: "none" }}>
                            <TypeAnimation
                                ref={ref}
                                speed={200}
                                cursor={false}
                                className={CURSOR_CLASS_NAME}
                                sequence={[
                                    1000,
                                    (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                    ' Hi!',
                                    1500,
                                    '',
                                    () => setAnim(1),
                                ]}
                                wrapper="span"
                                repeat={0}
                            />
                        </Typography>
                    </>}
                    { (anim === 1 || anim === 2) &&
                    <>
                        <Typography variant={ isSmallScreen? 'h5': 'h3'} textAlign="center" style={{ color: '#888888', userSelect: "none" }}>
                            <TypeAnimation
                                ref={ref}
                                speed={150}
                                cursor={false}
                                className={CURSOR_CLASS_NAME}
                                sequence={[
                                    (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                    '',
                                    500,
                                    'My name is',
                                    () => setAnim(2),
                                ]}
                                wrapper="span"
                                repeat={0}
                            />
                        </Typography>
                    </>}
                    { anim === 2 && 
                    <>
                        <Typography variant={ isSmallScreen? 'h2': 'h1'} fontWeight="bold" textAlign="center" style={{ userSelect: "none" }}>
                            <TypeAnimation
                                ref={ref}
                                speed={150}
                                deletionSpeed={150}
                                cursor={false}
                                className={CURSOR_CLASS_NAME}
                                sequence={[
                                    (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                    '',
                                    500,
                                    'Ahmad Alfani Handoyo',
                                    2000,
                                    'Afan',
                                    2000,
                                    () => setAnim(3),
                                ]}
                                wrapper="span"
                                repeat={0}
                            />
                        </Typography>
                    </>}
                </Box>
                </>}
                    { anim === 3 &&
                    <>
                        <Grow in={anim===3} timeout={1500}>
                            <Grid container textAlign="center" alignContent="center" alignItems="center">
                                <Grid xs={12} sm={6} p={{xs: 3, sm: 6}} display='flex' style={{justifyContent: isSmallScreen ? "center": "right", alignItems: 'center'}}>
                                    <Box style={{position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: isSmallScreen ? '80vmin':'60vmin', maxHeight: isSmallScreen ? '80vmin':'60vmin', userSelect: "none" }}>
                                        <img src="/assets/images/home/circle.png" alt="Circle background" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                                        <Box style={{position: "absolute", zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', userSelect: "none"}}>
                                            <img src="/assets/images/home/portrait_real.png" alt="Real portrait" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                                        </Box>
                                        <Box className="image-cartoon" style={{position: "absolute", zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', transition: '0.3s', userSelect: "none"}}>
                                            <img src="/assets/images/home/portrait_cartoon.png" alt="Cartoon portrait" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                                        </Box>
                                    </Box>
                                
                                </Grid>
                                <Grid xs={12} sm={6}>
                                    <Typography color="#ffffff" variant={ isSmallScreen? 'h4': 'h2'} fontWeight="bold" textAlign={ isSmallScreen? 'center': 'left'}>
                                        <TypeAnimation
                                            ref={ref}
                                            speed={60}
                                            deletionSpeed={90}
                                            cursor={false}
                                            className={CURSOR_CLASS_NAME}
                                            sequence={[
                                                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                                'Ahmad Alfani Handoyo',
                                                2000,
                                                'Afan',
                                                2000,
                                            ]}
                                            wrapper="span"
                                            repeat={Infinity}
                                        />
                                    </Typography>
                                    <Typography variant="h6" color="#bbbbbb" textAlign={ isSmallScreen? 'center': 'left'}>Computer Science Student at ITB</Typography>
                                    <Typography variant="h6" color="#bbbbbb" textAlign={ isSmallScreen? 'center': 'left'}>Software Engineer</Typography>
                                </Grid>
                            </Grid>
                        </Grow>
                    </>}
            </motion.div>
        </>
    );
}

export default Home;