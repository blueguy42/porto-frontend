import React from "react";
import { useEffect } from "react";

import { Typography, Box, Grow, Grid, IconButton, Link } from "@mui/material";
import { Mail, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { BreakpointName } from "../utils";
import { motion } from "framer-motion";

const About = () => {
    const breakpoint = BreakpointName();
    console.log(breakpoint);

    return (
        <>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                    <Grid container textAlign="center" alignContent="center" alignItems="center" px={{xs: 3, sm: 4, md: 0}}>
                        <Grid item xs={12} sm={12} md={8} order={{ xs: 2, sm: 2, md: 1 }} pr={{ xs: 0, sm: 0, md: 12 }}>
                        <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' || breakpoint === 'sm' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'h6' :
                                    breakpoint === 'sm' ? 'h5' :
                                    breakpoint === 'md' ? 'h5' :
                                    breakpoint === 'lg' ? 'h4' :
                                    'h2'} mb={4}>
                                    Code with purpose
                                <Box className="second-heading">Engineer with precision</Box>
                            </Typography>
                            <Typography textAlign='left'
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                    'body1'} mb={2}>
                                    Hi, I'm Ahmad Alfani Handoyo, but you can call me Afan. I am a software engineer currently studying Computer Science at Institut Teknologi Bandung. I specialize in backend development with experience in frontend development. I have a strong interest in security and computer architecture.
                            </Typography>
                            <Typography textAlign='left'
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                    'body1'} mb={2}>
                                        As a software engineer, I'm dedicated to building secure and efficient systems that meet high standards. With a detail-oriented mindset and strong analytical skills, I approach problems with excellence and take pride in developing effective solutions. My ultimate goal is to use my skills and knowledge to make a positive difference and bring innovative solutions to real-world problems.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} order={{ xs: 1, sm: 1, md: 2 }} display='flex' style={{justifyContent: "center", alignItems: 'center'}}>
                            <Box style={{position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: breakpoint === 'xs' ? '300px':'60vmin', maxHeight: breakpoint === 'xs' ? '300px':'60vmin', userSelect: "none" }}>
                                <img id="image-back" src="/assets/images/home/circle.png" alt="Circle background" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                <Box style={{position: "absolute", zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', userSelect: "none"}}>
                                    <img id="image-middle" src="/assets/images/home/portrait_cartoon.png" alt="Cartoon portrait" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                </Box>
                                <Box className="image-cartoon" style={{position: "absolute", zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', transition: '0.3s', userSelect: "none"}}>
                                    <img id="image-top" src="/assets/images/home/portrait_real.png" alt="Real portrait" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                </Box>
                            </Box>
                            <Box
                            sx={{
                                '& a': {textDecoration: 'none', '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                                '& button': {textTransform: 'none', color: '#888888', px: 2, '&:hover': {color: "#dddddd"}}
                            }}>
                                <Link href="mailto:ahmadalfanihandoyo1@gmail.com" end><IconButton title="Mail"> <Mail /> </IconButton></Link>
                                <Link href="https://www.linkedin.com/in/ahmad-alfani-handoyo"><IconButton title="LinkedIn"> <LinkedIn /> </IconButton></Link>
                                <Link href="https://github.com/blueguy42"><IconButton title="GitHub"> <GitHub /> </IconButton></Link>
                                <Link href="https://www.instagram.com/afanhandoyo"><IconButton title="Instagram"> <Instagram /> </IconButton></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grow>
            </motion.div>
        </>
    );
}

export default About;