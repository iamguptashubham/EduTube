import { Avatar, Container, Heading, Stack, VStack, Text, Button, HStack, Box } from '@chakra-ui/react';
import React from 'react';
import {RiSecurePaymentFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';



import introVideo from '../../assets/video/intro.mp4';
import termsAndCondition from '../../assets/doc/termsAndCondition.js';

const Founder = ()=>(
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://i.pinimg.com/474x/6d/0e/d5/6d0ed51c210d63a22e56af38a23f62a5.jpg"
        boxSize={['40', '48']}
      />
      <Text children="Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Shubham Gupta" size={['md', 'xl']} />
        <Text textAlign={["center", "left"]} children="Hi, I am a full stack developer. An Undergrad from Mumbai University with honors in
        artificial intelligence and machine learning. I like to play chess. And I 💗 anime" 
        />
    </VStack>
    </Stack>
)


const VideoPlayer = ()=>(
    <video controls
            autoPlay
            loop
            muted
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
          loading="lazy"
    >
    </video>
)

const TandC = ({ termsAndCondition }) => (
    <Box>
      <Heading
        size={'md'}
        children="Terms & Condition"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndCondition}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );
const About = () => {
  return (
    <Container minWidth={"-moz-fit-content"}
    padding={"50"} boxShadow={"lg"} marginTop={"8"}>
    <Heading children="About Us" textAlign={"center"}/>
    <Founder />
    <hr></hr>
    <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Subscribe
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
}

export default About;
