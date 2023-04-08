import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Typography variant="h1" textAlign="center">P INGPO ABOUT</Typography>
            </motion.div>
        </>
    );
}

export default About;