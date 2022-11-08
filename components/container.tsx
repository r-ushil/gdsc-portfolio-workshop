import React from 'react'
import { chakra, Divider, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import Navbar from './navbar'


interface Props {
    children: React.ReactNode
}

export default function Container({children}: Props) {

  return (
    <>
      <Navbar/>
      <Divider bgColor={'#5F99FF'} opacity={'20%'}/>
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Stack alignItems="center" mt={10} mb={5}>
        <Text textAlign="center" fontSize={["0.5em", "sm"]} color="displayColor">
          Designed and Developed by Rushil.
          <br />
          Built with{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Next.js
          </chakra.span>
          . Hosted on{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Vercel
          </chakra.span>
          .
        </Text>
      </Stack>
    </>
  )
}