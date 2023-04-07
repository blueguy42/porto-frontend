import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <motion.div exit={{ opacity: 0 }}>
                <Typography variant="h1">P INGPO ABOUT</Typography>
            </motion.div>
        </>
    );
}

export default About;