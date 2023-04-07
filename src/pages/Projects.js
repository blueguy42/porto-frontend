import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <>
            <motion.div exit={{ opacity: 0 }}>
                <Typography variant="h1">P INGPO PROJECTS</Typography>
            </motion.div>
        </>
    );
}

export default Projects;