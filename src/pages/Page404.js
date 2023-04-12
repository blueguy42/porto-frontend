import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import { Box, Button, Typography } from '@mui/material';
import { motion } from "framer-motion";

const Page404 = () => {
    const randomWords = ['Oops!', 'Uh-oh!', 'Lost', 'Error!', '404', 'Missing', 'Dead end', 'No go', 'Fail', '404', 'Bummer', 'Whoops!', 'Oh no!', '404!', '404', 'Zilch', 'Blank', 'Huh?', 'Where?', '404', 'Fizzle', 'Kaput', 'Off track', 'Null', '404', 'Bye-bye', 'Vanished', 'Poof!', 'Oh dear', '404', 'No luck', 'Gone astray', 'No dice', 'Dead link', '404', 'Oopsie!', 'Darn it!', 'Oops-a-daisy!', 'Wrong turn', '404', 'Out of luck', 'Not happening', 'Lost and found', 'End of the line', '404', 'Ghosted', 'Derailed', 'Glitch', 'Fubar', '404', 'Bust', 'Foiled', 'Out of order', 'Misplaced', '404', 'Down the drain', 'Exiled', 'Cast adrift', 'No trace', '404', 'No way', 'Not today', 'Absent', 'Nothingness'];

    function Word({ children, ...props }) {
        const color = new THREE.Color()
        const fontProps = { fontSize: 3, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
        const ref = useRef()
        const [hovered, setHovered] = useState(false)
        const over = (e) => {e.stopPropagation(); setHovered(true)}
        const out = () => setHovered(false)
        
        useEffect(() => {
            if (hovered) document.body.style.cursor = 'pointer'
                return () => (document.body.style.cursor = 'auto')
        }, [hovered])
        
        useFrame(({ camera }) => {
            ref.current.quaternion.copy(camera.quaternion)
            ref.current.material.color.lerp(color.set(hovered ? '#999999' : 'white'), 0.1)
        })
        return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
    }

    function Cloud({ count = 4, radius = 20 }) {
        const words = useMemo(() => {
            const temp = []
            const spherical = new THREE.Spherical()
            const phiSpan = Math.PI / (count + 1)
            const thetaSpan = (Math.PI * 2) / count

            let counter = 0;
            for (let i = 1; i < count + 1; i++) {
                for (let j = 0; j < count; j++) {
                    temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWords[counter]]);
                    counter++;
                }
            }
            return temp
        }, [count, radius])
        return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
    }

  return (
    <>
    <motion.div exit={{ opacity: 0 } } initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{width: "100%"}}>
        <Box minHeight={`calc(100vh - 13vh - 13vh)`} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <div style={{display: "flex", width: "60vmin", height: "60vmin"}} >
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                    <fog attach="fog" args={['#202025', 0, 80]} />
                    <Cloud count={8} radius={20} />
                    <TrackballControls />
                </Canvas>
            </div>
            <Box display="flex" textAlign="center" sx={{
                '& a': {textDecoration: 'none'},
                '& button': {textTransform: 'none', color: '#0b0b0b', backgroundColor: '#ffffff', px: 2, py: 1, border: '1px solid #ffffff', borderRadius: '1rem', transition: '0.3s', '&:hover': {color: "#ffffff", backgroundColor: '#0b0b0b'}}
                }}>
                <Link to="/"><Button><Typography variant="caption" fontWeight="bold">Back to Home Page</Typography></Button></Link>
            </Box>
        </Box>
    </motion.div>
    </>

  )
}

export default Page404;