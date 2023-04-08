import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Typography variant="h1" textAlign="center">P INGPO ABOUT</Typography>
                    </Box>
                </Grow>
            </motion.div>
        </>
    );
}

export default About;