import { Stack, Box, SlideFade, Text, Heading, Link, Button } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Intro() {
  return (
    <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}>

        <Box position="relative">
          <Text
            color="displayColor"
            fontSize="display2"
            fontWeight="medium"
            position="relative"
          >
            Hey there, I'm-
          </Text>
        </Box>
        <Heading
          fontSize="display"
          lineHeight={'95%'}
          color="complement"
          letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
          position="relative"
        >
          <Box color="displayColor" as="span">Rushil</Box>
          .
        </Heading>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.9 } }}
      >
        <Box w={['85vw', '40vw']}>
        <Text fontSize="display3" color="textSecondary">
          Some description about yourself. Lorem ipsum and all that good stuff. Some more waffle to fill up the space.
        </Text>
        </Box>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
      >
        <Stack isInline spacing={4}>
          <Link href="https://github.com/r-ushil" isExternal>
            <Button
              leftIcon={<FaGithub color="#5F99FF" />}
              position="static"
              size='md'
              color="white"
              bg="#151415"
            >
              Github
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/rushil791" isExternal>
            <Button
              leftIcon={<FaLinkedin color="#5F99FF" />}
              position="static"
              size='md'
              color="white"
              bg="#151415"
            >
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:rp620@imperial.ac.uk" isExternal>
            <Button
              leftIcon={<FaEnvelope fill="#5F99FF" />}
              transition="0.3s"
              position="static"
              size='md'
              color="white"
              bg="#151415"
            >
              Email
            </Button>
          </Link>
        </Stack>
      </SlideFade>
    </Stack>
  )
}