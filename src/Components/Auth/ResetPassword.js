import { Container, Heading, VStack, Input, FormLabel, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function ResetPassWord() {

    const [password, setPassword] = useState('');
  return (
    <Container py={"16"} h={"90vh"}>
        <form>
            <Heading children="Forget Password" my={"16"} textTransform={'uppercase'} 
            textAlign={["center", "left"]} justifyContent={"center"}/> 

            <VStack alignItems={"left"}> 
                <FormLabel htmlFor='password' children="Enter your current password" />
                <Input required id='curpass'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                type='password'
                focusBorderColor={'yellow.500'}/> 

                <FormLabel htmlFor='password' children="Enter your new password" />
                <Input required id='newpass'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                type='password'
                focusBorderColor={'yellow.500'}/>
                <Button my={"8"} type="submit" colorScheme={"yellow"} w={'full'} > Reset Password</Button>
            </VStack>

        </form>
    </Container>
  );
}

export default ResetPassWord;
