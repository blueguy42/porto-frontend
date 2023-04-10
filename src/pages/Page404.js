import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import { BreakpointName } from "../utils";

const Page404 = () => {
    const breakpoint = BreakpointName();
    const navigate = useNavigate();
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
        return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => navigate('/')} {...props} {...fontProps} children={children} />
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
        <div style={{display: "flex", width: "70vmin", height: "70vmin"}} onTouchEnd={() => {
                if (breakpoint === 'xs') {
                    console.log("Masuk siin");
                    navigate('/');
                    }
                }} >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                <fog attach="fog" args={['#202025', 0, 80]} />
                <Cloud count={8} radius={20} />
                <TrackballControls />
            </Canvas>
        </div>
    </>

  )
}

export default Page404;