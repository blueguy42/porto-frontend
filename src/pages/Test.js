import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";

const Test = () => {
    return (
        <>
            <motion.div exit={{ opacity: 0 }} in={{ opacity: 1 } } style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Typography variant="h1">H1</Typography>
                        <Typography variant="h1" fontWeight="bold">H1 Bold</Typography>
                        <Typography variant="h2">H2</Typography>
                        <Typography variant="h2" fontWeight="bold">H2 Bold</Typography>
                        <Typography variant="h3">H3</Typography>
                        <Typography variant="h3" fontWeight="bold">H3 Bold</Typography>
                        <Typography variant="h4">H4</Typography>
                        <Typography variant="h4" fontWeight="bold">H4 Bold</Typography>
                        <Typography variant="h5">H5</Typography>
                        <Typography variant="h5" fontWeight="bold">H5 Bold</Typography>
                        <Typography variant="h6">H6</Typography>
                        <Typography variant="h6" fontWeight="bold">H6 Bold</Typography>
                        <Typography variant="subtitle1">Subtitle 1</Typography>
                        <Typography variant="subtitle1" fontWeight="bold">Subtitle 1 Bold</Typography>
                        <Typography variant="subtitle2">Subtitle 2</Typography>
                        <Typography variant="subtitle2" fontWeight="bold">Subtitle 2 Bold</Typography>
                        <Typography variant="body1">Body 1</Typography>
                        <Typography variant="body1" fontWeight="bold">Body 1 Bold</Typography>
                        <Typography variant="body2">Body 2</Typography>
                        <Typography variant="body2" fontWeight="bold">Body 2 Bold</Typography>
                        <Typography variant="button">Button</Typography>
                        <Typography variant="button" fontWeight="bold">Button Bold</Typography>
                        <Typography variant="caption">Caption</Typography>
                        <Typography variant="caption" fontWeight="bold">Caption Bold</Typography>
                        <Typography variant="overline">Overline</Typography>
                        <Typography variant="overline" fontWeight="bold">Overline Bold</Typography>
                        <Typography variant="srOnly">Screen Reader Only</Typography>
                        <Typography variant="srOnly" fontWeight="bold">Screen Reader Only Bold</Typography>
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