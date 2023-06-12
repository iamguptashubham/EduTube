import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react';

const NotFound = () => {
    return (
      <Container h={"90vh"} p={"16"}>
         
          <VStack
          boxShadow={"lg"}
          paddingBottom={"16"} alignItems={"center"} borderRadius={"lg"}
          justifyContent={"center"} h={"full"} spacing={"4"}>
            <RiErrorWarningFill size={"5rem"}/>
             <Heading my={"8"} textAlign={"center"} children="Page Not Found" />
             
              <Link to="/">
                  <Button variant={"ghost"} > Go to Home</Button>
              </Link>
          </VStack>
      </Container>
    );
  }

export default NotFound;
