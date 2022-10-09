import { Heading, VStack, Text, Flex, Box } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    
    <VStack spacing={4} justifyContent="left" alignItems="flex-start">
      <Heading color={"displayColor"}>
        About Me
      </Heading>
      <Text fontSize="display3" color="textSecondary">
          Some description about yourself. Lorem ipsum and all that good stuff again.
      </Text>
    </VStack>

  )

}