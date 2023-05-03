import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box, Grow, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { BreakpointName } from "../utils";

import axios from 'axios';

const Home = () => {
    const breakpoint = BreakpointName();

    const [anim, setAnim] = useState(0);
    const [anim1, setAnim1] = useState(0);

    const [ name, setName ] = useState(-1);
    const [ nickname, setNickname ] = useState(-1);
    const [ subtitle1, setSubtitle1 ] = useState(-1);
    const [ subtitle2, setSubtitle2 ] = useState(-1);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BASE_URL + 'personal/get')
        .then(response => {
            setName(response.data.data.name);
            setNickname(response.data.data.nickname);
            setSubtitle1(response.data.data.subtitle1);
            setSubtitle2(response.data.data.subtitle2);
        }).catch((error) => {
            console.error(error);
        });
    },[]);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.addEventListener('mousemove', handleMouseMove);
        return () => {
          rootElement.removeEventListener('mousemove', handleMouseMove);
        };
    });

    function handleMouseMove(event) {
        if (anim === 3 && breakpoint !== 'xs') {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const minimum = Math.min(width, height) / 100;
            
            const x = (event.pageX - (width / 2)) * 2 / width;
            const y = -(event.pageY - (height / 2)) * 2 / height;

            const imageBack = document.getElementById('image-back');
            imageBack.style['transform'] = `translate(${-x * minimum}px, ${y * minimum}px)`;
            const imageMiddle = document.getElementById('image-middle');
            imageMiddle.style['transform'] = `translate(${-x * minimum * 2}px, ${y * minimum * 2 }px)`;
            const imageTop = document.getElementById('image-top');
            imageTop.style['transform'] = `translate(${-x * minimum * 2}px, ${y * minimum * 2 }px)`;
        }
    }
    
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
                        <Typography variant="h1" fontWeight="bold" textAlign="center">
                            { anim1 === 0 &&
                            <>
                                <Typewriter
                                    options={{ delay: 200, cursor: '|' }}
                                    onInit={(typewriter) => {
                                        typewriter.pauseFor(1000)
                                        .callFunction(() => {
                                            setAnim1(1);
                                        })
                                        .start();
                                    }}
                                />
                            </>}
                            { anim1 === 1 &&
                            <>
                                <Typewriter
                                    options={{ delay: 100, cursor: '' }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Hi!')
                                        .pauseFor(1500)
                                        .deleteAll(100)
                                        .callFunction(() => {
                                            setAnim(1);
                                            setAnim1(0);
                                        })
                                        .start();
                                    }}
                                />
                            </>  
                            }
                        </Typography>
                    </>}
                    { (anim === 1 || anim === 2) &&
                    <>
                        <Typography 
                            variant={
                                breakpoint === 'xs' ? 'h6' :
                                breakpoint === 'sm' ? 'h5' :
                                breakpoint === 'md' ? 'h4' :
                                breakpoint === 'lg' ? 'h4' :
                                'h3'}
                            textAlign="center" style={{ color: '#888888'}}>
                            { anim1 === 0 &&
                            <>
                                <Typewriter
                                    options={{ delay: 50, cursor: '|' }}
                                    onInit={(typewriter) => {
                                        typewriter.pauseFor(500)
                                        .callFunction(() => {
                                            setAnim1(1);
                                        })
                                        .start();
                                    }}
                                />
                            </>}
                            { anim1 === 1 &&
                            <>
                                <Typewriter
                                    options={{ delay: 50, cursor: '' }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('My name is')
                                        .pauseFor(500)
                                        .callFunction(() => {
                                            setAnim(2);
                                        })
                                        .start();
                                    }}
                                />
                            </>  
                            }
                        </Typography>
                    </>}
                    { anim === 2 && 
                    <>
                        <Typography
                            variant={
                                breakpoint === 'xs' ? 'h5' :
                                breakpoint === 'sm' ? 'h4' :
                                breakpoint === 'md' ? 'h2' :
                                breakpoint === 'lg' ? 'h2' :
                                'h1'}
                            fontWeight="bold" textAlign="center">
                            <Typewriter
                                options={{ delay: 40, cursor: '' }}
                                onInit={(typewriter) => {
                                    typewriter.typeString(name)
                                    .pauseFor(2000)
                                    .deleteAll(20)
                                    .pauseFor(300)
                                    .typeString(nickname)
                                    .pauseFor(2200)
                                    .callFunction(() => {
                                        setAnim(3);
                                    })
                                    .start();
                                }}
                            />
                        </Typography>
                    </>}
                </Box>
                </>}
                    { anim === 3 &&
                    <>
                        <Grow in={anim===3} timeout={1500}>
                            <Grid container textAlign="center" alignContent="center" alignItems="center">
                                <Grid item xs={12} sm={6} px={{xs: 3, sm: 6}} py={{xs: 3}} display='flex' style={{justifyContent: breakpoint === 'xs' ? "center": "right", alignItems: 'center'}}>
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
                                <Grid item xs={12} sm={6} pl={{xs: 0, sm: 0}}>
                                    <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' ? 'center': 'left'}
                                        variant={
                                            breakpoint === 'xs' ? 'h5' :
                                            breakpoint === 'sm' ? 'h6' :
                                            breakpoint === 'md' ? 'h4' :
                                            breakpoint === 'lg' ? 'h4' :
                                            'h2'}>
                                    <Typewriter
                                        options={{ delay: 40, cursor: '', loop: true }}
                                        onInit={(typewriter) => {
                                            typewriter.typeString(name)
                                            .pauseFor(1500)
                                            .deleteAll(20)
                                            .typeString(nickname)
                                            .pauseFor(1500)
                                            .deleteAll(20)
                                            .start();
                                        }}
                                    />
                                    </Typography>
                                    <Typography color="#bbbbbb" textAlign={ breakpoint === 'xs' ? 'center': 'left'}
                                        variant={
                                            breakpoint === 'xs' ? 'body1' :
                                            breakpoint === 'sm' ? 'body2' :
                                            breakpoint === 'md' ? 'body2' :
                                            breakpoint === 'lg' ? 'body1' :
                                            'h6'}>
                                        {subtitle1}
                                    </Typography>
                                    <Typography color="#bbbbbb" textAlign={ breakpoint === 'xs' ? 'center': 'left'}
                                    variant={
                                        breakpoint === 'xs' ? 'body1' :
                                        breakpoint === 'sm' ? 'body2' :
                                        breakpoint === 'md' ? 'body2' :
                                        breakpoint === 'lg' ? 'body1' :
                                        'h6'} >
                                        {subtitle2}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grow>
                    </>}
            </motion.div>
        </>
    );
}

export default Home;