import { Grid, Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

import introVideo from '../../assets/video/intro.mp4';

const CoursePage = () => {

    const lecture = [
        {
          _id: "l1",
          title: "Intro to webdev",
          description: "In this video we'll study and get used to common terminologies used in web dev",
          video: {
            url: "www.youtube.com/asgdkj882",
          },
        },
        {
          _id: "l2",
          title: "Deep in webdev",
          description: "In this video we'll study more about web dev",
          video: {
            url: "www.youtube.com/asgdkfasad2",
          },
        },
        {
          _id: "l3",
          title: "Html the fresh start",
          description: "In this video we'll study about hypertext markup language and its features",
          video: {
            url: "www.youtube.com/asdadakj882",
          },
        },
      ];
    const [lectureNumber, setLectureNumber] = useState(0);
  return (
    <Grid
    minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]}>
        <Box>
        <video
        width={"100%"}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
          loading="lazy"
        ></video>
        <Heading m={"4"} children={`#${lectureNumber + 1 } ${lecture[lectureNumber].title}`}/>
        <Heading m = "4" size={'md'} children="Description"/>
        <Text m ="4" children={lecture[lectureNumber].description}/>
        </Box>
        
        <VStack my={"16"}>
            <Heading size={"md"} children="Course Content" />
            { lecture.map((item, index) =>(
                <Button key = {item._id}
                style={
                {width:"100%", 
                padding:"1rem", 
                textAlign:"center" ,
                borderBottom:"1px solid black"}
                }
                onClick={()=>setLectureNumber(index)}> 
                <Text textAlign={"left"} > #{index + 1} {item.title} </Text>
                </Button>
            ))}
        </VStack>
    </Grid>
  );
}

export default CoursePage;
