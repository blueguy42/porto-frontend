import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";
import { BreakpointName } from "../utils";

const Copyright = () => {
    const breakpoint = BreakpointName();
    const year = new Date().getFullYear()

    return (
        <>
            <motion.div exit={{ opacity: 0 }} in={{ opacity: 1 } } style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                    <Box sx={{ mt: { xs: 2, sm: 3 }, mx: "10%", '& a': {textTransform: 'none', color: '#aaaaaa', transition: '0.3s', '&:hover': {color: "#ffffff"}} }} >
                        <Typography paragraph variant={ breakpoint === 'xs' ? 'body2' : 'body1' } sx={{ mb: 2 }}>
                            Copyright © {year} Ahmad Alfani Handoyo. All rights reserved.
                        </Typography>
                        <Typography paragraph variant={ breakpoint === 'xs' ? 'body2' : 'body1' } sx={{ mb: 2 }}>
                            The copyright notice is an essential part of any portfolio website, as it protects the owner's intellectual property rights. The content and images on Ahmad Alfani Handoyo's website are the sole property of the creator, unless otherwise stated. This means that any text, graphics, logos, icons, photographs, and multimedia clips displayed on the website belong to the owner and are protected by copyright laws and international treaties.
                        </Typography>
                        <Typography paragraph variant={ breakpoint === 'xs' ? 'body2' : 'body1' } sx={{ mb: 2 }}>
                            It's important to note that while visitors are permitted to view the content and images on the website, they are not allowed to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the website. This is to protect the owner's intellectual property rights and ensure that the content remains under their ownership.
                        </Typography>
                        <Typography paragraph variant={ breakpoint === 'xs' ? 'body2' : 'body1' } sx={{ mb: 2 }}>
                            Moreover, all trademarks, service marks, and logos used on the website belong to their respective owners. This means that any unauthorized use of these trademarks, service marks, and logos may result in legal action, and the owner of the website has the right to protect their intellectual property rights.
                        </Typography>
                        <Typography paragraph variant={ breakpoint === 'xs' ? 'body2' : 'body1' } sx={{ mb: 2 }}>
                            If anyone wishes to use any of the content or images on Ahmad Alfani Handoyo's website for commercial or other purposes, they must first obtain express written permission from the owner. This is a standard requirement in the industry and helps to protect the creator's rights.
                        </Typography>
                        <Typography paragraph variant={ breakpoint === 'xs' ? 'body2' : 'body1' } sx={{ mb: 2 }}>
                            For permission to use any content or images on this website for commercial or other purposes, please contact <a href="mailto:me@afanhandoyo.com">me@afanhandoyo.com</a>
                        </Typography>
                    </Box>
                </Grow>
            </motion.div>
        </>
    );
}

export default Copyright;