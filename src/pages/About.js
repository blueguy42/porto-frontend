import React from "react";
import { useState, useEffect } from "react";
import MuiMarkdown from 'mui-markdown';

import { Typography, Box, Grow, Grid, IconButton, Link, Tooltip, Zoom  } from "@mui/material";
import { Mail, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { BreakpointName } from "../utils";
import { motion } from "framer-motion";
import { Loader } from '../components';

import axios from "axios";

const About = () => {
    const breakpoint = BreakpointName();
    
    const [ slogan, setSlogan ] = useState(-1);
    const [ description, setDescription ] = useState(-1);
    const [ links, setLinks ] = useState(-1);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + 'about/getSlogan')
        .then(response => {
            setSlogan((response.data.slogan).split(/\r\n|\r|\n/));
        }).catch((error) => {
            console.error(error);
        });

        axios.get(process.env.REACT_APP_BASE_URL + 'about/getDescription')
        .then(response => {
            setDescription(response.data.description);
        }
        ).catch((error) => {
            console.error(error);
        });

        axios.get(process.env.REACT_APP_BASE_URL + 'about/getLink')
        .then(response => {
            const email = response.data.email;
            const linkedin = response.data.linkedin;
            const github = response.data.github;
            const instagram = response.data.instagram;

            setLinks({email, linkedin, github, instagram});
        }).catch((error) => {
            console.error(error);
        });
    },[]);

    return (
        <>
            <motion.div key={`${slogan !== -1 && description !== -1 && links !== -1}`} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                { slogan !== -1 && description !== -1 && links !== -1 ?
                <>
                <Grow in={true} timeout={1000}>
                    <Grid container textAlign="center" alignContent="center" alignItems="center" px={{xs: 3, sm: 4, md: 0}} spacing={{ xs: 3, sm: 3, md: 12 }}>
                        <Grid item xs={12} sm={12} md={6} lg={8} order={{ xs: 2, sm: 2, md: 1 }}>
                            <Box>
                                <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' || breakpoint === 'sm' ? 'center': 'left'}
                                    variant={
                                        breakpoint === 'xs' ? 'h6' :
                                        breakpoint === 'sm' ? 'h4' :
                                        breakpoint === 'md' ? 'h5' :
                                        breakpoint === 'lg' ? 'h3' :
                                    'h2'} mb={4}>
                                    {slogan[0]}
                                    <br/>
                                    <span className="second-heading">{slogan[1]}</span>
                                </Typography>
                            </Box>
                            <Box textAlign="left" color="white">
                                <MuiMarkdown
                                overrides={{
                                    p: { component: Typography, props: { variant: ['xs', 'sm', 'md'].includes(breakpoint) ? 'body2' : 'body1', mb: 2 } },
                                  }}>
                                    {description}
                                </MuiMarkdown>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} order={{ xs: 1, sm: 1, md: 2 }} display='flex' style={{justifyContent: "center", alignItems: 'center'}} flexDirection="column">
                            <Box mt={{ xs: 4, sm: 4, md: 0 }} style={{position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: breakpoint === 'xs' ? '240px':'60vmin', maxHeight: breakpoint === 'xs' ? '240px':'60vmin', userSelect: "none" }}>
                                <img id="image-back" src="/assets/images/home/circle.png" alt="Circle background" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                <Box style={{position: "absolute", zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', userSelect: "none"}}>
                                    <img id="image-middle" src="/assets/images/home/portrait_cartoon.png" alt="Cartoon portrait" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                </Box>
                                <Box className="image-cartoon" style={{position: "absolute", zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', transition: '0.3s', userSelect: "none"}}>
                                    <img id="image-top" src="/assets/images/home/portrait_real.png" alt="Real portrait" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none'}}/>
                                </Box>
                            </Box>
                            <Box mt={4}
                            sx={{
                                '& a': { mx: { xs: 0, sm: 1, md: 1, lg: 0, xl: 1 }, '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                                '& button': {transition: "0.3s", color: '#888888', '&:hover': {color: "#dddddd"}}
                            }}>
                                <Link href={`mailto:${links.email}`} target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="Email" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <Mail sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                                <Link href={links.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <LinkedIn sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                                <Link href={links.github} target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="GitHub" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <GitHub sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                                <Link href={links.instagram} target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="Instagram" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <Instagram sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grow>
                </> :
                <Loader/>}
            </motion.div>
        </>
    );
}

export default About;