import React from "react";
import { useEffect } from "react";

import { Typography, Box, Grow, Grid } from "@mui/material";
import { BreakpointName } from "../utils";
import { motion } from "framer-motion";

const About = () => {
    const breakpoint = BreakpointName();

    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.addEventListener('mousemove', handleMouseMove);
        return () => {
          rootElement.removeEventListener('mousemove', handleMouseMove);
        };
    });

    function handleMouseMove(event) {
        if (breakpoint !== 'xs') {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const minimum = Math.min(width, height) / 100;
            
            const x = (event.pageX - (width / 2)) * 2 / width;

            const imageBack = document.getElementById('image-back');
            imageBack.style['transform'] = `translate(${-x * minimum}px, 0px)`;
            const imageMiddle = document.getElementById('image-middle');
            imageMiddle.style['transform'] = `translate(${-x * minimum * 2}px, 0px)`;
            const imageTop = document.getElementById('image-top');
            imageTop.style['transform'] = `translate(${-x * minimum * 2}px, 0px)`;
        }
    }

    return (
        <>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                    <Grid container textAlign="center" alignContent="center" alignItems="center">
                        <Grid item xs={12} sm={8}>
                        <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'h5' :
                                    breakpoint === 'sm' ? 'h6' :
                                    breakpoint === 'md' ? 'h4' :
                                    breakpoint === 'lg' ? 'h4' :
                                    'h2'} mb={4}>
                                    Code with purpose,
                                <Box className="second-heading">engineer with precision.</Box>
                            </Typography>
                            <Typography textAlign={ breakpoint === 'xs' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'body1' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                    'body1'} mb={2}>
                                    Hi, I'm Ahmad Alfani Handoyo, but you can call me Afan. Currently, I'm studying Computer Science at Institut Teknologi Bandung. I specialize in backend development, but I also have experience in frontend development and a strong interest in security and computer architecture.
                            </Typography>
                            <Typography textAlign={ breakpoint === 'xs' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'body1' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                    'body1'} mb={2}>
                                        As a software engineer, I'm dedicated to building secure and efficient systems that meet high standards. With a detail-oriented mindset and strong analytical skills, I approach problems with excellence and take pride in developing effective solutions. My ultimate goal is to use my skills and knowledge to make a positive difference and bring innovative solutions to real-world problems.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box style={{position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: breakpoint === 'xs' ? '300px':'60vmin', maxHeight: breakpoint === 'xs' ? '300px':'60vmin', userSelect: "none" }}>
                                <img id="image-back" src="/assets/images/home/circle.png" alt="Circle background" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                <Box style={{position: "absolute", zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', userSelect: "none"}}>
                                    <img id="image-middle" src="/assets/images/home/portrait_cartoon.png" alt="Cartoon portrait" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                </Box>
                                <Box className="image-cartoon" style={{position: "absolute", zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', transition: '0.3s', userSelect: "none"}}>
                                    <img id="image-top" src="/assets/images/home/portrait_real.png" alt="Real portrait" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grow>
            </motion.div>
        </>
    );
}

export default About;