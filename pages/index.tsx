import { Stack, Image, Wrap, WrapItem } from "@chakra-ui/react"
import { NextPage } from "next"
import Container from "../components/container"
import Intro from "../components/intro"

const Home: NextPage = () => {
  return (
    <>
      <Container>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '7.5vw' }}
          mt={{ base: '12.5vh', md: '22.5vh' }}
        >

          <Wrap spacing={'17.5vw'}>
            <WrapItem> <Intro /> </WrapItem>
            <WrapItem> <Image src="/jerry.jpg" boxSize={'350px'}/> </WrapItem>
          </Wrap>

        </Stack>

      </Container>
    </>
  )
}

export default Home