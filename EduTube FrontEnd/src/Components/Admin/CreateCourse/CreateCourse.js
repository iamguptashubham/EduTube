import { Box, Container, Grid, Heading, VStack, Input, Select, Image, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

import SideBar from '../SideBar';

const CreateCourse = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');


  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const fileUploadStyle = {
    "&::file-selector-button":{
        cursor:"pointer" ,
        marginLeft: "-5%",
        width: "110%",
        border:"none",
        height: "100%",
        color: "#purple.500",
        backgroundColor: "white"
    }
}

const uploadImageHandler = (e)=>{
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file)

  reader.onloadend = ()=>{
      setImagePrev(reader.result)
      setImage(file)
  }

}

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} css={{cursor: ` default`}}>

        <Container py={"16"}>
          <form>
          <Heading textTransform={"uppercase"} children="Create Course" my={"16"} textAlign={["center", "left "]}/>
          <VStack spacing={"8"} margin={"auto"}>
          <Input id='title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Course Sample'
                type='text'
                focusBorderColor={'purple.500'}/> 

                <Input id='description'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder='Course Description'
                type='text'
                focusBorderColor={'purple.500'}/> 

                <Input id='createdby'
                value={createdBy}
                onChange={(e)=>setCreatedBy(e.target.value)}
                placeholder='Creator Name'
                type='text'
                focusBorderColor={'purple.500'}/>

                <Select focusBorderColor='purple.500' value={category} onChange={e => setCategory(e.target.value)}>
                  <option value=""> Category</option>
                  {categories.map(item =>(
                    <option key={item} value={item}> {item}</option>
                  ))}
                </Select>

                <Input required id='courseimage'
                type='file'
                accept='/image/*'
                focusBorderColor={'yellow.500'}
                css={fileUploadStyle}
                onChange={uploadImageHandler}/> 

                {imagePrev && (
                  <Image src={imagePrev} boxSize={"64"} objectFit={"contain"}/>
                )}

            <Button w={"full"} colorScheme="purple" type='submit'>Create</Button>
          </VStack>
          </form>
        </Container>
        <SideBar />
    </Grid>
  );
}

export default CreateCourse;
