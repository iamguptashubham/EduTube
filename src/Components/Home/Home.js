import React from 'react';
import { Heading, Stack, VStack, Text, Button, Image, Box, HStack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import './Home.css';

import { DiAws, DiGoogleCloudPlatform } from 'react-icons/di';
import { SiGithub, SiYoutube, SiCoursera, SiUdemy} from 'react-icons/si';


import vg from '../../assets/image/bg.png';
import introVideo from '../../assets/video/intro.mp4';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack direction={["column", "row"]}
        height="100%"
        justifyContent={["center", "space-between"]}
        alignItems="center"
        spacing={["16", "56"]}
        >
          <VStack
          width={"full"}
          alignItems={["center", "flex-start"]}
          >
            <Heading width={"full"}> Unlock Your Learning Potential with EduTube</Heading>
            <Text fontFamily="cursive"
            textAlign={["center", "left"]}
            > Empowering Education</Text>
            <Link to="/courses">
              <Button colorScheme='yellow' size={'sm'}>Explore Now</Button>
            </Link>
          </VStack>

          <Image
          className="vector-graphics"
          src={vg}
          boxSize={"md"}
          objectFit="contain" />
        </Stack>
      </div>

      <Box
      padding={"4"}
      bg="blackAlpha.600" 
      >
      <Heading 
      textAlign={"center"}
      fontFamily="body"
      color={"yellow.300"}
      children="OUR BRANDS PATERNSHIPS"/>
      <HStack
      marginTop={"4"}
      justifyContent={"space-evenly"}
      className='banner'
      >
        <SiYoutube />
        <SiCoursera />
        <SiUdemy />
        <DiAws />
        <DiGoogleCloudPlatform />
        <SiGithub />

      </HStack>
      </Box>

      <div className='container2'>
      <video
          controls
          autoPlay
          muted
          loop
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
          loading="lazy"
        ></video>
      </div>
    </section>
  );
}

export default Home;
