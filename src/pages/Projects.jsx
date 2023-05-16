import { Typography, Grow, Box, Link, Tooltip, Zoom, IconButton } from "@mui/material";
import { GitHub, Language } from '@mui/icons-material';
import { motion } from "framer-motion";
import { BreakpointName } from "../utils";

const Projects = () => {
    const breakpoint = BreakpointName();

    return (
        <>
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Box mb={4}>
                            <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' || breakpoint === 'sm' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'h4' :
                                    breakpoint === 'sm' ? 'h3' :
                                    breakpoint === 'md' ? 'h3' :
                                    breakpoint === 'lg' ? 'h2' :
                                'h2'} mb={2}>
                                    Bonekify
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'} mb={2}>
                                    Bonekify is a music streaming web application service similar to Spotify. Users are able to search and listen to a variety of songs. Surfing and exploring new songs is a breeze as Bonekify has displays for song/album information and list. Bonekify features a song management system for admins to add, change, and delete songs/albums. Admins are also able to see the list of users using the service. Users can also listen to premium songs feature. To do so, users can subscribe to the premium singers first which then will be validated by admin from the Binotify Premium App.
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'}>
                                    Built with PHP, REST API using Express, and SOAP using Java for backend services and React for frontend.
                            </Typography>
                            <Box display="flex"
                                sx={{
                                    justifyContent: 'left',
                                    '& a': { '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                                    '& button': {transition: "0.3s", color: '#888888', '&:hover': {color: "#dddddd", transform: "scale(0.9)" }}
                                }}>
                                <Link href="https://github.com/blueguy42/bonekify-main" target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="GitHub" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <GitHub sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                            </Box>
                        </Box>
                        <Box mb={4}>
                            <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' || breakpoint === 'sm' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'h4' :
                                    breakpoint === 'sm' ? 'h3' :
                                    breakpoint === 'md' ? 'h3' :
                                    breakpoint === 'lg' ? 'h2' :
                                'h2'} mb={2}>
                                    Majika
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'} mb={2}>
                                    Majika App is an Android-based mobile application for food ordering. It offers five features: menu listing where users can view available food and drinks, add them to the cart, and store selected items; cart management where users can modify their order and view the total price; QR code payment where users can pay by scanning a QR code from the cart page; restaurant branch feature that displays a list of branches connected to Google Maps for location viewing; and a twibbon feature for capturing photos using the camera with an attached twibbon.
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'}>
                                Built with Kotlin using Room with SQLite and Retrofit.
                            </Typography>
                            <Box display="flex"
                                sx={{
                                    justifyContent: 'left',
                                    '& a': { '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                                    '& button': {transition: "0.3s", color: '#888888', '&:hover': {color: "#dddddd", transform: "scale(0.9)" }}
                                }}>
                                <Link href="https://github.com/blueguy42/Majika" target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="GitHub" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <GitHub sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                            </Box>
                        </Box>
                        <Box mb={4}>
                            <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' || breakpoint === 'sm' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'h4' :
                                    breakpoint === 'sm' ? 'h3' :
                                    breakpoint === 'md' ? 'h3' :
                                    breakpoint === 'lg' ? 'h2' :
                                'h2'} mb={2}>
                                    Mealth
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'} mb={2}>
                                    Mealth is a safe, comfortable, and supportive space in the form of a community that aims to raise awareness and knowledge about eating behavior, specifically eating disorders, among the Indonesian society through social media, events, and provided programs.
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'}>
                                Built with React and styled with Tailwind, with Firebase database.
                            </Typography>
                            <Box display="flex"
                                sx={{
                                    justifyContent: 'left',
                                    '& a': { '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                                    '& button': {transition: "0.3s", color: '#888888', '&:hover': {color: "#dddddd", transform: "scale(0.9)" }}
                                }}>
                                <Link href="http://mealth.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="Website" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <Language sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                                <Link href="https://github.com/LordGedelicious/MealthWebApp" target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="GitHub" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <GitHub sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                            </Box>
                        </Box>
                        <Box mb={4}>
                            <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' || breakpoint === 'sm' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'h4' :
                                    breakpoint === 'sm' ? 'h3' :
                                    breakpoint === 'md' ? 'h3' :
                                    breakpoint === 'lg' ? 'h2' :
                                'h2'} mb={2}>
                                    File Directory Crawler
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'} mb={2}>
                                A desktop application to search a file or folder in a file directory using BFS and DFS algorithms.
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'}>
                                Developed desktop GUI, controller, and backend using C# with .NET and MSAGL.
                            </Typography>
                            <Box display="flex"
                                sx={{
                                    justifyContent: 'left',
                                    '& a': { '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                                    '& button': {transition: "0.3s", color: '#888888', '&:hover': {color: "#dddddd", transform: "scale(0.9)" }}
                                }}>
                                <Link href="https://github.com/blueguy42/Folder-Crawler" target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="GitHub" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <GitHub sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                            </Box>
                        </Box>
                        <Box mb={4}>
                            <Typography fontWeight="bold" textAlign={ breakpoint === 'xs' || breakpoint === 'sm' ? 'center': 'left'}
                                variant={
                                    breakpoint === 'xs' ? 'h4' :
                                    breakpoint === 'sm' ? 'h3' :
                                    breakpoint === 'md' ? 'h3' :
                                    breakpoint === 'lg' ? 'h2' :
                                'h2'} mb={2}>
                                    DNA String Matching
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'} mb={2}>
                                A website to check if a patient has a genetic disease based on their DNA sequence. It allows for the input of new diseases along with their corresponding DNA sequences, which are then added to the database. Using the KMP and BM algorithms, the application can predict whether someone has a specific disease based on their DNA sequence. The application includes a page that displays the order of prediction results with a search column that functions as a filter. The filter can be used with disease names, dates, or both. Additionally, the application can validate DNA inputs using Regex and calculate the level of similarity between a user's DNA and the disease DNA in DNA testing using the LCS algorithm.
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'} mb={2}>
                                Developed in React and styled with Tailwind, with backend in Go, and a PostgreSQL database.
                            </Typography>
                            <Typography textAlign="left"
                                variant={
                                    breakpoint === 'xs' ? 'body2' :
                                    breakpoint === 'sm' ? 'body2' :
                                    breakpoint === 'md' ? 'body2' :
                                    breakpoint === 'lg' ? 'body1' :
                                'body1'}>
                                WARNING: The backend is hosted on a free Heroku project, and thus the database functionality does not work at the moment.
                            </Typography>
                            <Box display="flex"
                                sx={{
                                    justifyContent: 'left',
                                    '& a': { '&.active': {'& button': {color: '#ffffff', fontWeight: 'bold'}}},
                                    '& button': {transition: "0.3s", color: '#888888', '&:hover': {color: "#dddddd", transform: "scale(0.9)" }}
                                }}>
                                <Link href="https://bonek-dna.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="Website" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <Language sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                                <Link href="https://github.com/blueguy42/DNA-String-Matching" target="_blank" rel="noopener noreferrer">
                                    <Tooltip title="GitHub" arrow TransitionComponent={Zoom} componentsProps={{tooltip: { sx: { bgcolor: "#222222", '& .MuiTooltip-arrow': { color: "#222222"}}} }}>
                                        <IconButton> <GitHub sx={{ fontSize: { xs: 32, sm: 42, md: 40, lg: 36, xl: 44 } }}/> </IconButton>
                                    </Tooltip>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grow>
            </motion.div>
        </>
    );
}

export default Projects;