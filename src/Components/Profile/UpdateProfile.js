import { Container, Heading, VStack, FormLabel, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  return (
    <Container py={"16"} h={"90vh"}>
        <form>
            <Heading children="Update Profile" my={"16"} textTransform={'uppercase'} 
            textAlign={["center", "left"]} justifyContent={"center"}/> 

            <VStack alignItems={"left"}> 
                <FormLabel htmlFor='name' children="Name" />
                <Input id='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='sample'
                type='text'
                focusBorderColor={'yellow.500'}/> 

                <FormLabel htmlFor='name' children="Email" />
                <Input  id='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='sample@gmail.com'
                type='email'
                focusBorderColor={'yellow.500'}/>
                <Button my={"8"} type="submit" colorScheme={"yellow"} w={'full'} > Update</Button>
            </VStack>

        </form>
    </Container>
  );
}

export default UpdateProfile;
