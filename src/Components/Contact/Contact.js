import { Container, Heading, Textarea, VStack, Box, Button, Input, FormLabel,  } from '@chakra-ui/react';
import React, { useState } from 'react';

import {Link} from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  return (
    <Container h={"90vh"} py={"16"}>
        <VStack>
            <Heading children="Contact Us" />
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
                <FormLabel htmlFor='message' children="Message" />
                <Textarea required id='message'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder='Write your message'
                focusBorderColor={'yellow.500'}/> 
            </Box>
            

            <Button my={"4"} colorScheme={"yellow"} type='submit'> Send Message</Button>

            <Box my={"4"} >
                Request for course ? <Link to="/request" > <Button variant = {"ghost"} colorScheme={'yellow'}>Click</Button></Link> {" "} here
            </Box>
            </form>
        </VStack>
    </Container>
  ); 
}

export default Contact;
