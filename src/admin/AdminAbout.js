import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Typography, Box, Grow, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Code, InsertDriveFileOutlined } from '@mui/icons-material';
import { motion } from "framer-motion";
import { ls, BreakpointName } from "../utils";
import { Loader } from '../components';
import MuiMarkdown from 'mui-markdown';

import { EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import axios from 'axios';

const AdminAbout = () => {
    const breakpoint = BreakpointName();
    const navigate = useNavigate();

    const [token, setToken] = useState('');
    const [ pageLoad, setPageLoad ] = useState(false);

    const [ dataSlogan, setDataSlogan ] = useState(-1);
    const [ isEditingSlogan, setIsEditingSlogan ] = useState(false);
    const [ sloganError, setSloganError ] = useState('');

    const [ dataDescription, setDataDescription ] = useState(-1);
    const [ isEditingDescription, setIsEditingDescription ] = useState(false);
    const [ descriptionError, setDescriptionError ] = useState('');

    const [ descriptionMode, setDescriptionMode ] = useState('edit');

    const [ dataEmail, setDataEmail ] = useState(-1);
    const [ isEditingEmail, setIsEditingEmail ] = useState(false);
    const [ emailError, setEmailError ] = useState('');

    const [ dataLinkedIn, setDataLinkedIn ] = useState(-1);
    const [ isEditingLinkedIn, setIsEditingLinkedIn ] = useState(false);
    const [ linkedInError, setLinkedInError ] = useState('');

    const [ dataGitHub, setDataGitHub ] = useState(-1);
    const [ isEditingGitHub, setIsEditingGitHub ] = useState(false);
    const [ gitHubError, setGitHubError ] = useState('');

    const [ dataInstagram, setDataInstagram ] = useState(-1);
    const [ isEditingInstagram, setIsEditingInstagram ] = useState(false);
    const [ instagramError, setInstagramError ] = useState('');

    useEffect(() => {
        if (!ls.Get('token')) {
            setPageLoad(false);
        } else {
            setToken(ls.Get('token'));
            setPageLoad(true);
        }
    }, []);

    useEffect(() => {
        if (token) {
            axios.get(process.env.REACT_APP_BASE_URL + 'about/getSlogan')
            .then(response => {
                setDataSlogan(response.data.slogan);
            }).catch((error) => {
                console.error(error);
                setSloganError('Error retrieving slogan');
            });

            axios.get(process.env.REACT_APP_BASE_URL + 'about/getDescription')
            .then(response => {
                setDataDescription(response.data.description);         
            }).catch((error) => {
                console.error(error);
                setDescriptionError('Error retrieving description');
            });

            axios.get(process.env.REACT_APP_BASE_URL + 'about/getLink')
            .then(response => {
                setDataEmail(response.data.email);
                setDataLinkedIn(response.data.linkedin);
                setDataGitHub(response.data.github);
                setDataInstagram(response.data.instagram);
            }).catch((error) => {
                console.error(error);
                setEmailError('Error retrieving email');
                setLinkedInError('Error retrieving LinkedIn');
                setGitHubError('Error retrieving GitHub');
                setInstagramError('Error retrieving Instagram');
            });
        }
    },[token]);

    const handleChange = (e, setFn) => {
        setFn(e.target.value);
    };

    const handleSave = (val, func) => {
        func(val);
    };

    const handleEditSlogan = () => {
        setIsEditingSlogan(true);
    };

    const handleBlurSlogan = () => {
        setIsEditingSlogan(false);
    };

    const handleEditDescription = () => {
        setIsEditingDescription(true);
    };

    const handleBlurDescription = () => {
        setIsEditingDescription(false);
    };

    const handleEditEmail = () => {
        setIsEditingEmail(true);
    };

    const handleBlurEmail = () => {
        setIsEditingEmail(false);
    };

    const handleEditLinkedIn = () => {
        setIsEditingLinkedIn(true);
    };

    const handleBlurLinkedIn = () => {
        setIsEditingLinkedIn(false);
    };

    const handleEditGitHub = () => {
        setIsEditingGitHub(true);
    };

    const handleBlurGitHub = () => {
        setIsEditingGitHub(false);
    };

    const handleEditInstagram = () => {
        setIsEditingInstagram(true);
    };

    const handleBlurInstagram = () => {
        setIsEditingInstagram(false);
    };
    
    const saveSlogan = (slogan) => {
        let valid = true;

        slogan = slogan.split(/\r\n|\r|\n/);

        if (slogan.length < 2) {
            valid = false;
            setSloganError('Slogan must be two lines');
        }

        for (let i = 0; i < slogan.length && valid; i++) {
            slogan[i] = slogan[i].trim();
            if (slogan[i].length === 0) {
                valid = false;
                setSloganError(`Slogan line ${i + 1} cannot be empty`);
            }
        }

        slogan = slogan.join('\n');
        setDataSlogan(slogan);

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'about/putSlogan', { slogan }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setSloganError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'about/getSlogan')
            .then(response => {
                setDataSlogan(response.data.slogan);
            }).catch((error) => {
                console.error(error);
                setSloganError('Error retrieving slogan');
        });
        }
    };

    const saveDescription = (description) => {
        let valid = true;

        description = description.trim();

        description = description.replace(/^(\r\n|\r|\n)+|(\r\n|\r|\n)+$/g, '');
        setDataDescription(description);

        if (description.length === 0) {
            valid = false;
            setDescriptionError('Description cannot be empty');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'about/putDescription', { description }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setDescriptionError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'about/getDescription')
            .then(response => {
                setDataDescription(response.data.description);
            }).catch((error) => {
                console.error(error);
                setDescriptionError('Error retrieving description');
        });
        }
    };

    const saveEmail = (email) => {
        let valid = true;

        email = email.trim();
        setDataEmail(email);

        if (email.length === 0) {
            valid = false;
            setEmailError('Email cannot be empty');
        } else if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            valid = false;
            setEmailError('Email is not a valid email format');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'about/putEmail', { email }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setEmailError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'about/getLink')
            .then(response => {
                setDataEmail(response.data.email);
            }).catch((error) => {
                console.error(error);
                setEmailError('Error retrieving email');
        });
        }
    };

    const saveLinkedIn = (linkedin) => {
        let valid = true;

        linkedin = linkedin.trim();
        setDataLinkedIn(linkedin);

        if (linkedin.length === 0) {
            valid = false;
            setLinkedInError('LinkedIn cannot be empty');
        } else if (!linkedin.match(/^(http(s)?:)?\/\/([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*$/g)) {
            valid = false;
            setLinkedInError('LinkedIn does not have a valid LinkedIn URL format.');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'about/putLinkedIn', { linkedin }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setLinkedInError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'about/getLink')
            .then(response => {
                setDataLinkedIn(response.data.linkedin);
            }).catch((error) => {
                console.error(error);
                setLinkedInError('Error retrieving LinkedIn');
        });
        }
    };

    const saveGitHub = (github) => {
        let valid = true;

        github = github.trim();
        setDataGitHub(github);

        if (github.length === 0) {
            valid = false;
            setGitHubError('GitHub cannot be empty');
        } else if (!github.match(/^(http(s)?:)?\/\/(www\.)?github\.com\/([_-a-zA-Z0-9]+)\/*$/g)) {
            valid = false;
            setGitHubError('GitHub does not have a valid GitHub URL format.');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'about/putGitHub', { github }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setGitHubError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'about/getLink')
            .then(response => {
                setDataGitHub(response.data.github);
            }).catch((error) => {
                console.error(error);
                setGitHubError('Error retrieving GitHub');
        });
        }
    };

    const saveInstagram = (instagram) => {
        let valid = true;

        instagram = instagram.trim();
        setDataInstagram(instagram);

        if (instagram.length === 0) {
            valid = false;
            setInstagramError('Instagram cannot be empty');
        } else if (!instagram.match(/^(http(s)?:)?\/\/(www\.)?instagram\.com\/([_.a-zA-Z0-9]+)\/*$/g)) {
            valid = false;
            setInstagramError('Instagram does not have a valid Instagram URL format.');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'about/putInstagram', { instagram }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setInstagramError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'about/getLink')
            .then(response => {
                setDataInstagram(response.data.instagram);
            }).catch((error) => {
                console.error(error);
                setInstagramError('Error retrieving Instagram');
        });
        }
    };


    return (
        <>
            <motion.div key={`${pageLoad && dataSlogan !== -1 && dataDescription !== -1 && dataEmail !== -1 }`} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                {pageLoad && dataSlogan !== -1 && dataDescription !== -1 && dataEmail !== -1 ? 
                <>
                <Grow in={true} timeout={1000}>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', mb: 2 }}>
                            <Typography
                                variant={
                                    breakpoint === 'xs' ? 'h4' :
                                    breakpoint === 'sm' ? 'h2' :
                                    breakpoint === 'md' ? 'h2' :
                                    breakpoint === 'lg' ? 'h1' :
                                    'h1'}
                            fontWeight="bold">Admin About</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold">Slogan</Typography>
                            <Typography variant="caption" sx={{ mb: 1 }}>Must be two lines. Maximum 24 characters per line. Current: {dataSlogan.split(/\r\n|\r|\n/).length} lines. 1st line {dataSlogan.split(/\r\n|\r|\n/)[0].length} characters, 2nd line {dataSlogan.split(/\r\n|\r|\n/).length > 1 ? dataSlogan.split(/\r\n|\r|\n/)[1].length: 0} characters.</Typography>
                            <EditTextarea
                                id='slogan'
                                name='slogan'
                                style={{ margin: '0rem', padding: '10px', fontSize: "16px", fontFamily: "Roboto", border: '1px solid #ccc', backgroundColor: isEditingSlogan ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditSlogan}
                                onBlur={handleBlurSlogan}
                                onChange={(e) => {
                                    if (e.target.value.split(/\r\n|\r|\n/).length > 2) {
                                        e.target.value = e.target.value.split(/\r\n|\r|\n/).slice(0,2).join('\n');
                                    }
                                    if (e.target.value.split(/\r\n|\r|\n/)[0].length > 24) {
                                        if (e.target.value.split(/\r\n|\r|\n/).length > 1) {
                                            e.target.value = e.target.value.split(/\r\n|\r|\n/)[0].slice(0,24) + '\n' + e.target.value.split(/\r\n|\r|\n/)[1];
                                        } else {
                                            e.target.value = e.target.value.split(/\r\n|\r|\n/)[0].slice(0,24);
                                        }
                                    } 
                                    if (e.target.value.split(/\r\n|\r|\n/).length > 1 && e.target.value.split(/\r\n|\r|\n/)[1].length > 24) {
                                        e.target.value = e.target.value.split(/\r\n|\r|\n/)[0] + '\n' + e.target.value.split(/\r\n|\r|\n/)[1].slice(0,24);
                                    }
                                    handleChange(e, setDataSlogan);
                                }}
                                onSave={({value}) => handleSave(value, saveSlogan)}
                                value={dataSlogan}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{sloganError ? sloganError : <br/>}</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold">Description</Typography>
                            <Typography variant="caption" sx={{ mb: 1 }}>Use markdown formatting. <a style={{color: "white", }} href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noopener noreferrer">CHEAT SHEET</a></Typography>
                            <ToggleButtonGroup
                                sx={{ mb: 2,
                                '& .MuiToggleButton-root': {
                                    color: '#ffffff',
                                    borderColor: '#ffffff',
                                    backgroundColor: '#0b0b0b',
                                    '&:hover': {
                                        backgroundColor: '#3b3b3b',
                                    },
                                },
                                '& .MuiToggleButton-root.Mui-selected': {
                                    color: '#0b0b0b',
                                    backgroundColor: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#dddddd',
                                    },
                                } }}
                                value={descriptionMode}
                                fullWidth
                                exclusive
                                onChange={(e, value) => {if (value !== null) setDescriptionMode(value)}}
                                aria-label="Description Mode"
                            >
                                <ToggleButton value="edit" sx={{ px: 2 }}><Code sx={{ mr: 1 }}/> Edit</ToggleButton>
                                <ToggleButton value="preview" sx={{ px: 2 }}><InsertDriveFileOutlined sx={{ mr: 1 }}/>Preview</ToggleButton>
                            </ToggleButtonGroup>
                            { descriptionMode === 'edit' && 
                            <>
                            <EditTextarea
                                id='description'
                                name='description'
                                rows={10}
                                style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "14px", margin: '0rem', padding: '10px', border: '1px solid #ccc', backgroundColor: isEditingDescription ? "#181818" : "#0b0b0b", color: "#fff" }}
                                onEditMode={handleEditDescription}
                                onBlur={handleBlurDescription}
                                onChange={(e) => {
                                    handleChange(e, setDataDescription);
                                }}
                                onSave={({value}) => handleSave(value, saveDescription)}
                                value={dataDescription}
                            />
                            </>}
                            { descriptionMode === 'preview' &&
                            <>
                            <Box display="flex" sx={{width: "100%", overflow: "auto"}}>
                                <MuiMarkdown
                                overrides={{
                                    p: { component: Typography, props: { variant: ['xs', 'sm', 'md'].includes(breakpoint) ? 'body2' : 'body1', mb: 2 } },
                                  }}>
                                    {dataDescription}
                                </MuiMarkdown>
                            </Box>
                            </>}
                            <Typography variant="body1" sx={{mt: 1}}>{descriptionError ? descriptionError : <br/>}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', mb: 2 }}>
                            <Typography
                                variant={
                                    breakpoint === 'xs' ? 'h5' :
                                    breakpoint === 'sm' ? 'h3' :
                                    breakpoint === 'md' ? 'h3' :
                                    breakpoint === 'lg' ? 'h2' :
                                    'h2'}
                            fontWeight="bold">Social</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>Email</Typography>
                            <EditTextarea
                                id='email'
                                name='email'
                                style={{ fontFamily: "Roboto", fontSize: "16px", margin: '0rem', padding: '10px', border: '1px solid #ccc', backgroundColor: isEditingEmail ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditEmail}
                                onBlur={handleBlurEmail}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(/[\n\r]/g, '');
                                    handleChange(e, setDataEmail);
                                }}
                                onSave={({value}) => handleSave(value, saveEmail)}
                                value={dataEmail}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{emailError ? emailError : <br/>}</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>LinkedIn</Typography>
                            <EditTextarea
                                id='linkedin'
                                name='linkedin'
                                style={{ fontFamily: "Roboto", fontSize: "16px", margin: '0rem', padding: '10px', border: '1px solid #ccc', backgroundColor: isEditingLinkedIn ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditLinkedIn}
                                onBlur={handleBlurLinkedIn}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(/[\n\r]/g, '');
                                    handleChange(e, setDataLinkedIn);
                                }}
                                onSave={({value}) => handleSave(value, saveLinkedIn)}
                                value={dataLinkedIn}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{linkedInError ? linkedInError : <br/>}</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>GitHub</Typography>
                            <EditTextarea
                                id='github'
                                name='github'
                                style={{ fontFamily: "Roboto", fontSize: "16px", margin: '0rem', padding: '10px', border: '1px solid #ccc', backgroundColor: isEditingGitHub ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditGitHub}
                                onBlur={handleBlurGitHub}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(/[\n\r]/g, '');
                                    handleChange(e, setDataGitHub);
                                }}
                                onSave={({value}) => handleSave(value, saveGitHub)}
                                value={dataGitHub}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{gitHubError ? gitHubError : <br/>}</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>Instagram</Typography>
                            <EditTextarea
                                id='instagram'
                                name='instagram'
                                style={{ fontFamily: "Roboto", fontSize: "16px", margin: '0rem', padding: '10px', border: '1px solid #ccc', backgroundColor: isEditingInstagram ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditInstagram}
                                onBlur={handleBlurInstagram}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(/[\n\r]/g, '');
                                    handleChange(e, setDataInstagram);
                                }}
                                onSave={({value}) => handleSave(value, saveInstagram)}
                                value={dataInstagram}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{instagramError ? instagramError : <br/>}</Typography>
                        </Box>
                    </Box>
                </Grow>
                </>
                :
                <Loader />}
            </motion.div>
        </>
    );
}

export default AdminAbout;