import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Typography, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";
import { ls, BreakpointName } from "../utils";
import { Loader } from '../components';

import { EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import axios from 'axios';

const AdminHome = () => {
    const breakpoint = BreakpointName();
    const navigate = useNavigate();

    const [token, setToken] = useState('');
    const [ pageLoad, setPageLoad ] = useState(false);

    const [ dataName, setDataName ] = useState(-1);
    const [ isEditingName, setIsEditingName ] = useState(false);
    const [ nameError, setNameError ] = useState(false);

    const [ dataNickname, setDataNickname ] = useState(-1);
    const [ isEditingNickname, setIsEditingNickname ] = useState(false);
    const [ nicknameError, setNicknameError ] = useState(false);

    const [ dataSubtitle1, setDataSubtitle1 ] = useState(-1);
    const [ isEditingSubtitle1, setIsEditingSubtitle1 ] = useState(false);
    const [ subtitle1Error, setSubtitle1Error ] = useState(false);

    const [ dataSubtitle2, setDataSubtitle2 ] = useState(-1);
    const [ isEditingSubtitle2, setIsEditingSubtitle2 ] = useState(false);
    const [ subtitle2Error, setSubtitle2Error ] = useState(false);

    useEffect(() => {
        if (!ls.Get('token')) {
            setPageLoad(false);
            navigate('/admin/login');
        } else {
            setToken(ls.Get('token'));
            setPageLoad(true);
        }
    }, [navigate]);

    useEffect(() => {
        if (token) {
            axios.get(process.env.REACT_APP_BASE_URL + 'personal/get')
            .then(response => {
                setDataName(response.data.data.name);
                setDataNickname(response.data.data.nickname);
                setDataSubtitle1(response.data.data.subtitle1);
                setDataSubtitle2(response.data.data.subtitle2);             
            }).catch((error) => {
                console.error(error);
                setNameError('Error retrieving name');
                setNicknameError('Error retrieving nickname');
                setSubtitle1Error('Error retrieving subtitle 1');
                setSubtitle2Error('Error retrieving subtitle 2');
            });
        }
    },[token]);

    const handleChange = (e, setFn) => {
        setFn(e.target.value);
    };

    const handleSave = (val, func) => {
        func(val);
    };

    const handleEditName = () => {
        setIsEditingName(true);
    };

    const handleBlurName = () => {
        setIsEditingName(false);
    };

    const handleEditNickname = () => {
        setIsEditingNickname(true);
    };

    const handleBlurNickname = () => {
        setIsEditingNickname(false);
    };

    const handleEditSubtitle1 = () => {
        setIsEditingSubtitle1(true);
    };

    const handleBlurSubtitle1 = () => {
        setIsEditingSubtitle1(false);
    };

    const handleEditSubtitle2 = () => {
        setIsEditingSubtitle2(true);
    };

    const handleBlurSubtitle2 = () => {
        setIsEditingSubtitle2(false);
    };

    
    const saveName = (name) => {
        let valid = true;

        if (name.length > 20) {
            valid = false;
            setNameError('Name string exceeds 20 characters')
            
        } else if (name.length === 0) {
            valid = false;
            setNameError('Name cannot be empty');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'personal/putName', { name }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setNameError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'personal/get')
            .then(response => {
                setDataName(response.data.data.name);
            }).catch((error) => {
                console.error(error);
                setNameError('Error retrieving name');
        });
        }
    };

    const saveNickname = (nickname) => {
        let valid = true;

        if (nickname.length > 10) {
            valid = false;
            setNicknameError('Nickname string exceeds 10 characters');
        } else if (nickname.length === 0) {
            valid = false;
            setNicknameError('Nickname cannot be empty');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'personal/putNickname', { nickname }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setNicknameError('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'personal/get')
            .then(response => {
                setDataNickname(response.data.data.nickname);
            }).catch((error) => {
                console.error(error);
                setNicknameError('Error retrieving nickname');
        }); 
        }
    };

    const saveSubtitle1 = (subtitle1) => {
        let valid = true;

        if (subtitle1.length > 32) {
            valid = false;
            setSubtitle1Error('Subtitle 1 string exceeds 32 characters');
        } else if (subtitle1.length === 0) {
            valid = false;
            setSubtitle1Error('Subtitle 1 cannot be empty');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'personal/putSubtitle1', { subtitle1 }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setSubtitle1Error('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'personal/get')
            .then(response => {
                setDataSubtitle1(response.data.data.subtitle1);
            }).catch((error) => {
                console.error(error);
                setSubtitle1Error('Error retrieving subtitle 1');
        }); 
        }
    };

    const saveSubtitle2 = (subtitle2) => {
        let valid = true;

        if (subtitle2.length > 32) {
            valid = false;
            setSubtitle2Error('Subtitle 2 string exceeds 32 characters');
        } else if (subtitle2.length === 0) {
            valid = false;
            setSubtitle2Error('Subtitle 2 cannot be empty');
        }

        if (valid) {
            axios.put(process.env.REACT_APP_BASE_URL + 'personal/putSubtitle2', { subtitle2 }, {headers: {'Authorization': `Bearer ${ls.Get('token')}`}})
            .then(response => {
                setSubtitle2Error('');
            }).catch((error) => {
                ls.Remove('token');
                ls.Remove('email');
                ls.Remove('name');
                navigate('/admin/login');
            });
        } else {
            axios.get(process.env.REACT_APP_BASE_URL + 'personal/get')
            .then(response => {
                setDataSubtitle2(response.data.data.subtitle2);
            }).catch((error) => {
                console.error(error);
                setSubtitle2Error('Error retrieving subtitle 2');
        }); 
        }
    };

    return (
        <>
            <motion.div key={`${pageLoad}`} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
                {pageLoad && dataName !== -1 && dataNickname !== -1 && dataSubtitle1 !== -1 && dataSubtitle2 !== -1 ?
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
                            fontWeight="bold">Admin Home</Typography>
                        </Box>
                        
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold">Name</Typography>
                            <Typography variant="caption" sx={{ mb: 1 }}>Maximum length 20 characters. Current: {dataName.length} characters</Typography>
                            <EditTextarea
                                id='name'
                                name='name'
                                style={{ margin: '0rem', padding: '10px', fontSize: "16px", fontFamily: "Roboto", border: '1px solid #ccc', backgroundColor: isEditingName ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditName}
                                onBlur={handleBlurName}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(/[\n\r]/g, '');
                                    handleChange(e, setDataName);
                                }}
                                onSave={({value}) => handleSave(value, saveName)}
                                value={dataName}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{nameError ? nameError : <br/>}</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold">Nickname</Typography>
                            <Typography variant="caption" sx={{ mb: 1 }}>Maximum length 10 characters. Current: {dataNickname.length} characters</Typography>
                            <EditTextarea
                                id='nickname'
                                name='nickname'
                                style={{ margin: '0rem', padding: '10px', fontSize: "16px", fontFamily: "Roboto", border: '1px solid #ccc', backgroundColor: isEditingNickname ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditNickname}
                                onBlur={handleBlurNickname}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(/[\n\r]/g, '');
                                    handleChange(e, setDataNickname);
                                }}
                                onSave={({value}) => handleSave(value, saveNickname)}
                                value={dataNickname}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{nicknameError ? nicknameError : <br/>}</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold">Subtitle 1</Typography>
                            <Typography variant="caption" sx={{ mb: 1 }}>Maximum length 32 characters. Current: {dataSubtitle1.length} characters</Typography>
                            <EditTextarea
                                id='subtitle1'
                                name='subtitle1'
                                style={{ margin: '0rem', padding: '10px', fontSize: "16px", fontFamily: "Roboto", border: '1px solid #ccc', backgroundColor: isEditingSubtitle1 ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditSubtitle1}
                                onBlur={handleBlurSubtitle1}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(/[\n\r]/g, '');
                                    handleChange(e, setDataSubtitle1);
                                }}
                                onSave={({value}) => handleSave(value, saveSubtitle1)}
                                value={dataSubtitle1}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{subtitle1Error ? subtitle1Error : <br/>}</Typography>
                        </Box>
                        <Box sx={{mb: 3}} display="flex" flexDirection="column" justifyContent="left" alignItems="start" textAlign="left">
                            <Typography variant="h6" fontWeight="bold">Subtitle 2</Typography>
                            <Typography variant="caption" sx={{ mb: 1 }}>Maximum length 32 characters. Current: {dataSubtitle2.length} characters</Typography>
                            <EditTextarea
                                id='subtitle2'
                                name='subtitle2'
                                style={{ margin: '0rem', padding: '10px', fontSize: "16px", fontFamily: "Roboto", border: '1px solid #ccc', backgroundColor: isEditingSubtitle2 ? "#181818" : "#0b0b0b", color: "#fff" }}
                                rows={2}
                                onEditMode={handleEditSubtitle2}
                                onBlur={handleBlurSubtitle2}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(/[\n\r]/g, '');
                                    handleChange(e, setDataSubtitle2);
                                }}
                                onSave={({value}) => handleSave(value, saveSubtitle2)}
                                value={dataSubtitle2}
                            />
                            <Typography variant="body1" sx={{mt: 1}}>{subtitle2Error ? subtitle2Error : <br/>}</Typography>
                        </Box>
                    </Box>
                </Grow>
                </> : 
                <Loader />}
            </motion.div>
        </>
    );
}

export default AdminHome;