import { Button, Container, HStack, Heading, Input, Stack, Text, VStack, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Course = ({
    views,
    title,
    imageSrc,
    id,
    creator,
    description,
    lectureCount
}
) =>{

    const addToPlaylistHandler = ()=>{
        console.log("added")
    }
    return (
        <VStack 
        alignItems={["center", "flex-start"]}
        className='course'>
        <Image src={imageSrc} boxSize={"60"} objectFit={"contain"}/>
        <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />

        <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
        </VStack>
    )
}

function Courses() {

    const [keyword, setKeyWord] = useState('');
    const [category, setCategory] = useState('');
    const categories = [
        'Web development',
        'Artificial Intellegence',
        'Data Structure & Algorithm',
        'App Development',
        'Data Science',
        'Game Development',
      ];
    

  return (
    <Container minW={"conatainer.lg"} paddingY={"8"} maxH={"95vh"} >
        <Heading children="ALL COURSES" m={"5"}/>

        <Input 
        placeholder='Search a course'
        focusBorderColor='yellow.500'
        value={keyword}
        onChange={(e)=>{setKeyWord(e.target.value)}}
        type='text'
        />

        <HStack
        overflow={'auto'}
        paddingY={"8"}
        >
        {
            categories.map((item, index) =>(
                <Button key = {index} minW={"60"} onClick={()=>setCategory(item)}>
                    <Text children={item} fontSize={"xsl"}/>
                </Button>
            )
            )
        }
        </HStack>

        <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
        >
        <Course 
        id='sample'
        title="Web Development"
        description = "This is awesome must try"
        imageSrc = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2m4ngSQTvd6HGMDgyHTzYYQchRKMXgZ4jB7IJhg74Ew&s"}
        creator = {"Shubham"}
        views = {100}
        lectureCount = {5}/> 
        
        </Stack>
    </Container>
  );
}

export default Courses;
