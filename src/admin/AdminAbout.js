import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";

function AdminAbout(props) {
    const { email } = props;

    return (
        <>
            <motion.div exit={{ opacity: 0 }} in={{ opacity: 1 } } style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Typography variant="h1" fontWeight="bold">Admin About</Typography>
                        <Typography variant="body1" fontWeight="bold">{email}</Typography>
                    </Box>
                </Grow>
            </motion.div>
        </>
    );
}

export default AdminAbout;