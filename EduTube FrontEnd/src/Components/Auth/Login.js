import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  return (
    <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={"center"} spacing={"16"} bg={"blackAlpha.200"} my={"4"}> 
            <Heading children="Welcome to EduTube" />
            <form styte={{width:"100%"}} >
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
                <FormLabel htmlFor='password' children="Password" />
                <Input required id='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                type='password'
                focusBorderColor={'yellow.500'}/> 
            </Box>
            
            <Box>
            <Link to="/forgetpassword"> <Button variant={"link"}> Forget password ?</Button></Link>
            </Box>

            <Button my={"4"} colorScheme={"yellow"} type='submit'> Login</Button>

            <Box my={"4"} >
                New User? <Link to="/register" > <Button variant = {"ghost"} colorScheme={'yellow'}>Sign Up</Button></Link> {" "} here !
            </Box>
            </form>
            
        </VStack>
    </Container>
  );
}

export default Login;
