import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <motion.div exit={{ opacity: 0 }}>
                <Typography variant="h1">P INGPO HOME HOME HOME</Typography>
                <Typography variant="h1">P INGPO HOME HOME HOME</Typography>

                <Box
                    component="img"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', pointerEvents: 'none'}}
                    alt="Cartoon with background"
                    src="/assets/images/home/combined_cartoon.png"
                />
            </motion.div>
        </>
    );
}

export default Home;