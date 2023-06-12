import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const fileUploadStyle = {
    "&::file-selector-button":{
        cursor:"pointer" ,
        marginLeft: "-5%",
        width: "110%",
        border:"none",
        height: "100%",
        color: "#ECC94B",
        backgroundColor: "white"
    }
}


function Register() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imgPre, setImgPrev]  = useState();
    const [img, setImg]  = useState();

    const uploadImageHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onloadend = ()=>{
            setImgPrev(reader.result)
            setImg(file)
        }

    }
    
  return (
    <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={"center"} spacing={"8"} > 
            <Heading  textTransform={"uppercase"} children="Registration" />
            <form styte={{width:"100%"}} >

            <Box display={"flex"} justifyContent={"center"}>
                <Avatar  src={imgPre} size={"md"}/>
            </Box>
            <Box my={"4"} >
                <FormLabel htmlFor='name' children="Name" />
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
                <FormLabel htmlFor='password' children="Password" />
                <Input required id='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                type='password'
                focusBorderColor={'yellow.500'}/> 
            </Box>

            <Box my={"4"} >
                <FormLabel htmlFor='chooseAvatar' children="Choose your Avatar" />
                <Input required id='avatar'
                placeholder='password'
                type='file'
                accept='/image/*'
                focusBorderColor={'yellow.500'}
                css={fileUploadStyle}
                onChange={uploadImageHandler}/> 
            </Box>

            <Button my={"4"} colorScheme={"yellow"} type='submit'> Sign Up</Button>

            <Box my={"4"} >
                Already Signed Up? <Link to="/login" > <Button variant = {"ghost"} colorScheme={'yellow'}>Login</Button></Link> {" "} here
            </Box>
            </form>
            
        </VStack>
    </Container>
  );
}


export default Register;
