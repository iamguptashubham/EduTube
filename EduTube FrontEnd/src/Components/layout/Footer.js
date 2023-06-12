import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';


import {TiSocialInstagram, TiSocialYoutube, TiSocialTwitter} from 'react-icons/ti'
function Footer() {
  return (
    <Box bg={"blackAlpha.900"} minH={"10vh"} padding={"4"}>
    <Stack
    direction={["column", "row"]}>
    <VStack alignItems={["center", "flex-start"]}
    width={"100%"} >
        <Heading children="ALL RIGHTS RESERVED" color={"white"} size={"xs"}/>
        <Heading children="@ Shubham Gupta" color={"white"} size={"xs"}/>
    </VStack>
    <HStack spacing={["2", "10"] } justifyContent = {"center"}
    color={"white"} fontSize= "30" >
        <Heading children="Follow us on" minW={"100"} size={"sm"}/>
        <a href='https://www.youtube.com/shubhamguptago' target='_blank' rel="noreferrer">
            <TiSocialYoutube />
        </a>

        <a href='https://www.instagram.com/iamguptashubham' target='_blank' rel="noreferrer">
            <TiSocialInstagram />
        </a>

        <a href='https://www.twitter.com/imguptashubham' target='_blank' rel="noreferrer">
            <TiSocialTwitter />
        </a>
    </HStack>
    </Stack>
    </Box>
  );
}

export default Footer;
