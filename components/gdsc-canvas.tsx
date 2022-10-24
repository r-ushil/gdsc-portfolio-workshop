import { Box, Flex } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './gdsc-model'

export default function GdscCanvas() {

  return (
    <Flex alignItems='center' justifyContent="center">

            <Box w={['65vw', '35vw']} h={['40vh', '60vh']}>
            <Canvas camera={{ fov: 45, position: [4, 4, 6]}}>
                <ambientLight intensity={0.1} />
                <pointLight position={[0, 10, 0]} intensity={1} />
                <pointLight position={[0, -10, 0]} intensity={0.6} />
                <pointLight position={[10, 0, 0]} intensity={1} />
                <pointLight position={[-10, 0, 0]} intensity={1} />
                <OrbitControls />
                <Model />
            </Canvas>
            </Box>

        </Flex>
  )


}