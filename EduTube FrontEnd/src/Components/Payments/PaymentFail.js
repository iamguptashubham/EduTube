import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react';

const PaymentFail = () => {
    return (
      <Container h={"90vh"} p={"16"}>
         
          <VStack
          boxShadow={"lg"}
          paddingBottom={"16"} alignItems={"center"} borderRadius={"lg"}
          justifyContent={"center"} h={"full"} spacing={"4"}>
            <RiErrorWarningFill size={"5rem"}/>
             <Heading my={"8"} textTransform={"uppercase"} textAlign={"center"} children="Payment Declined" />
             
              <Link to="/subscribe">
                  <Button variant={"ghost"} > Please Try Again</Button>
              </Link>
          </VStack>
      </Container>
    ); 
  }
export default PaymentFail;
