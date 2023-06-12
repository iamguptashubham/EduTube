import { Container, Heading, VStack, Input, Box, FormLabel, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function ForgetPassword() {

    const [email, setEmail] = useState('');
  return (
    <Container py={"16"} h={"90vh"}>
        <form>
            <Heading children="Forget Password" my={"16"} textTransform={'uppercase'} 
            textAlign={["center", "left"]} justifyContent={"center"}/> 

            <VStack alignItems={"left"}> 
                <FormLabel htmlFor='email' children="Enter your Email Address" />
                <Input required id='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='sample@gmail.com'
                type='email'
                focusBorderColor={'yellow.500'}/> 
                <Button my={"8"} type="submit" colorScheme={"yellow"} w={'full'} > Send Reset Link</Button>
            </VStack>

        </form>
    </Container>
  );
}

export default ForgetPassword;
