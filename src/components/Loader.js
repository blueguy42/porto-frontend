import { Grow, Box } from '@mui/material';
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <Grow in={true} timeout={1000}>
            <Box display="flex" justifyContent="center">
                <div className='loader'></div>
            </Box>
        </Grow>
    );
}

export default Loader;