import { Container, Heading, Textarea, VStack, Box, Button, Input, FormLabel,  } from '@chakra-ui/react';
import React, { useState } from 'react';

import {Link} from 'react-router-dom';

const Request = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

  return (
    <Container h={"90vh"} py={"16"}>
        <VStack>
            <Heading children="Request New Course" />
            <form>
            <Box my={"4"} >
                <FormLabel htmlFor='name' children="Your Name" />
                <Input required id='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Enter your name'
                type='text'
                focusBorderColor={'yellow.500'}/> 
            </Box>

            <Box my={"4"} >
                <FormLabel htmlFor='email' children="Email Address" />
                <Input required id='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='sample@gmail.com'
                type='email'
                focusBorderColor={'yellow.500'}/> 
            </Box>

            <Box my={"4"} >
                <FormLabel htmlFor='course' children="New Course" />
                <Textarea required id='course'
                value={course}
                onChange={(e)=>setCourse(e.target.value)}
                placeholder='Explain about your need in course'
                focusBorderColor={'yellow.500'}/> 
            </Box>
            

            <Button my={"4"} colorScheme={"yellow"} type='submit'> Request Course</Button>

            <Box my={"4"} >
                See all available courses! <Link to="/courses" > <Button variant = {"ghost"} colorScheme={'yellow'}>Click</Button></Link> {" "} here
            </Box>
            </form>
        </VStack>
    </Container>
  ); 
}

export default Request;