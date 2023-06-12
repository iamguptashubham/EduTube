import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h={"90vh"} p={"16"}>
        <Heading my={"8"} textAlign={"center"} children="You have Pro Pack" />
        <VStack
        boxShadow={"lg"}
        paddingBottom={"16"} alignItems={"center"} borderRadius={"lg"}>
            <Box
            bg={"yellow.400"} w={"full"} p={"4"} borderRadius={"8px 8px 0 0"}>
                <Text textAlign={"center"} children="Payment Success" />
            </Box>

            <Box p={"4"} >
                <VStack textAlign={"center"} px={"8"} mt={"4"} spacing={"8"}>
                    <Text> Congratulation! You're now Pro Member</Text>
                    <Heading size={"4xl"}>
                        <RiCheckboxCircleFill />
                    </Heading>
                </VStack>
            </Box>
            <Link to="/profile">
                <Button variant={"ghost"} colorScheme='yellow'> Go to profile</Button>
            </Link>
            <Heading size={"xs"} children="Reference : hdf78weisfuykjdshioy7"/>
        </VStack>
    </Container>
  );
}

export default PaymentSuccess;
