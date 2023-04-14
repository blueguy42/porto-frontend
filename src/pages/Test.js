import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";

const Test = () => {
    return (
        <>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Typography variant="h1">variant="h1"</Typography>
                        <Typography variant="h1" fontWeight="bold">variant="h1" fontWeight="bold"</Typography>
                        <Typography variant="h2">variant="h2"</Typography>
                        <Typography variant="h2" fontWeight="bold">variant="h2" fontWeight="bold"</Typography>
                        <Typography variant="h3">variant="h3"</Typography>
                        <Typography variant="h3" fontWeight="bold">variant="h3" fontWeight="bold"</Typography>
                        <Typography variant="h4">variant="h4"</Typography>
                        <Typography variant="h4" fontWeight="bold">variant="h4" fontWeight="bold"</Typography>
                        <Typography variant="h5">variant="h5"</Typography>
                        <Typography variant="h5" fontWeight="bold">variant="h5" fontWeight="bold"</Typography>
                        <Typography variant="h6">variant="h6"</Typography>
                        <Typography variant="h6" fontWeight="bold">variant="h6" fontWeight="bold"</Typography>
                        <Typography variant="subtitle1">variant="subtitle1"</Typography>
                        <Typography variant="subtitle1" fontWeight="bold">variant="subtitle1" fontWeight="bold"</Typography>
                        <Typography variant="subtitle2">variant="subtitle2"</Typography>
                        <Typography variant="subtitle2" fontWeight="bold">variant="subtitle2" fontWeight="bold"</Typography>
                        <Typography variant="body1">variant="body1"</Typography>
                        <Typography variant="body1" fontWeight="bold">variant="body1" fontWeight="bold"</Typography>
                        <Typography variant="body2">variant="body2"</Typography>
                        <Typography variant="body2" fontWeight="bold">variant="body2" fontWeight="bold"</Typography>
                        <Typography variant="button">variant="button"</Typography>
                        <Typography variant="button" fontWeight="bold">variant="button" fontWeight="bold"</Typography>
                        <Typography variant="caption">variant="caption"</Typography>
                        <Typography variant="caption" fontWeight="bold">variant="caption" fontWeight="bold"</Typography>
                        <Typography variant="overline">variant="overline"</Typography>
                        <Typography variant="overline" fontWeight="bold">variant="overline" fontWeight="bold"</Typography>
                        <Box
                            component="img"
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', maxHeight: '100%', pointerEvents: 'none'}}
                            alt="Cartoon with background"
                            src="/assets/images/home/combined_cartoon.png"
                        />
                    </Box>
                </Grow>
            </motion.div>
        </>
    );
}

export default Test;