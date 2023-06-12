import { Container, Heading, VStack, FormLabel, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
  return (
    <Container py={"16"} h={"90vh"}>
        <form>
            <Heading children="Change Password" my={"16"} textTransform={'uppercase'} 
            textAlign={["center", "left"]} justifyContent={"center"}/> 

            <VStack alignItems={"left"}> 
                <FormLabel htmlFor='password' children="Enter your current password" />
                <Input required id='curpass'
                value={oldPassword}
                onChange={(e)=>setOldPassword(e.target.value)}
                placeholder='password'
                type='password'
                focusBorderColor={'yellow.500'}/> 

                <FormLabel htmlFor='password' children="Enter your new password" />
                <Input required id='newpass'
                value={newPassword}
                onChange={(e)=>setNewPassword(e.target.value)}
                placeholder='password'
                type='password'
                focusBorderColor={'yellow.500'}/>
                <Button my={"8"} type="submit" colorScheme={"yellow"} w={'full'} > Change Password</Button>
            </VStack>

        </form>
    </Container>
  );
}

export default ChangePassword;
