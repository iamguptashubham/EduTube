import { Container, Heading, VStack, Box, Text, Button } from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={"90vh"} p={"16"}  >
        <Heading textAlign={"center"} my={"8"} children="Welcome"/>
        <VStack
            boxShadow={"lg"}
            alignItems={"stretch"}
            borderRadius={"stretch"}
            spacing={"0"}>
            <Box bg={'yellow.500'} p={"4"} css={{borderRadius:"8px 8px 0 0"}}>
                <Text children="Pro Pack $10 only"/>
            </Box>
            <Box p={"4"}>
            <VStack mt={"4"} px={"4"} textAlign={"center"} spacing={"8"}>
                <Text 
                 children="Join pro pack to get access for all premium content">

                </Text>
               <Heading size={"md"} children="$10 Only"/> 
            </VStack>

            <Button my={"8"} colorScheme={'yellow'} width={"full"}> Buy Now </Button>
            </Box>

            <Box
            p={"4"}
            bg={"blackAlpha.600"}
            css={{borderRadius:"0 0 8px 8px"}}>
                <Heading color={"white"} textTransform={"uppercase"} size={'sm'} children="100% refund at cancellation "/>
                <Text color={"white"} size={"xs"} children="* Terms and Conditions applied"/>
            </Box>
        </VStack>
    </Container>
  );
}

export default Subscribe;
