import { Grid, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Box, Heading, Stack, Text, Button, VStack, Input, ModalFooter } from '@chakra-ui/react';
import { Title } from 'chart.js';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

function CourseModal({isOpen, onClose, addLectureHandler, courseTitle, lecture = [1, 2, 3, 4, 5, 6, 7, 8, 9 ], id, deleteButtonHandler}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [videoPrev, setVideoPrev] = useState('');

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

    const uploadVideoHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
      
        reader.onloadend = ()=>{
            setVideoPrev(reader.result)
            setVideo(file)
        }
      
      }

      const closeHandler =()=>{
        setTitle('');
        setVideo('');
        setDescription('');
        setVideoPrev('');
        onClose();
      }
  return (
    <Modal isOpen={isOpen} size={"full"} onClose={closeHandler} scrollBehavior='inside'>

        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{courseTitle} </ModalHeader>
            <ModalCloseButton />
            <ModalBody p={"16"}>
                <Grid templateColumns={["1fr", "3fr 1fr"]}>
                    <Box p={["0", "16"]} >
                        <Box my={"5"}>
                                <Heading children={courseTitle}/>
                                <Heading children={id} opacity={"0.7"} size={"sm"}/>
                        </Box>

                        <Heading children="Lectures" size={"lg"}/>
                        {
                            lecture.map((item, i)=>(
                                <VideoCard Title={"What is React"} description={"Intro to react js"} lectureId={"l1"} num={i+1} courseId={id} deleteButtonHandler={deleteButtonHandler}/>
                            ))
                        }
                    </Box>

                    <Box> 
                    <form onSubmit={e=>addLectureHandler(e, id, Title, description, video)}> 
                            <VStack spacing={"4"}>
                                <Heading children="Add Lecture"  size={"md"} textTransform={"uppercase"}/>

                                <Input focusBorderColor='purple'
                                placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}
                                type='text'
                                />

                                <Input focusBorderColor='purple'
                                placeholder='Description' value={description} onChange={e=>setDescription(e.target.value)}
                                type='text'
                                />

                                <Input required id='coursevideo'
                                    type='file'
                                    accept='image/mp4'
                                    focusBorderColor={'purple.500'}
                                    css={fileUploadStyle}
                                    onChange={uploadVideoHandler}/> 

                                    {videoPrev && (
                                        <video controlsList='nodownload' controls src={videoPrev}></video>
                                    )}
                                <Button w={"full"} colorScheme='purple' type='submit'>Upload</Button>
                            </VStack>
                    </form>
                    </Box>
                </Grid>
            </ModalBody>
            <ModalFooter>
                <Button onClick={closeHandler}> Close </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  );
}

export default CourseModal;


function VideoCard({Title, description, lectureId, num, courseId, deleteButtonHandler}){
return(
    <Stack direction={["column", "row"]} my={"8"} borderRadius={"lg"} boxShadow={"0 0 10px rgba(107, 70, 193, 0.5)"
    } justifyContent={["flex-start", "space-between"]} padding={["4", "8"]}>
        <Box>
            <Heading children={`#${num} ${Title}`}/>
            <Text children={description}/>
            </Box>
            <Button onClick={()=> deleteButtonHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill color={"purple"}/>
            </Button>

    </Stack>
)
} 