import { Box, Grid, Heading, Table, TableCaption, TableContainer, Thead, Th, Tr, Tbody, HStack, Td, Button, Image, useDisclosure } from '@chakra-ui/react';
import React from 'react';


import SideBar from '../SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {

  const courses = [{
      _id:"c1",
      title:"Intro HTML",
      category:"Web Dev",
      creator : "Shubham" , 
      view: 325, 
      numOfVideos : 3,
      poster:{
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2m4ngSQTvd6HGMDgyHTzYYQchRKMXgZ4jB7IJhg74Ew&s"
      },
      
  },

  {
    _id:"c2",
    title:"HTML Intermediate",
    category:"Web Dev",
    creator : "Shubham" , 
    view: 32, 
    numOfVideos : 2,
    poster:{
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2m4ngSQTvd6HGMDgyHTzYYQchRKMXgZ4jB7IJhg74Ew&s"
    },
    
},
]


const deleteHandler = (id)=>(
  console.log(id)
)

const courseDetailHandler = (id)=>{
  onOpen();
}

const deleteLecture =(courseId, lectureId) =>{
  console.log(lectureId +" "+ courseId)
}

const addLectureHandler =(e, title, description, video)=>{
  e.preventDefault();
}

const {isOpen, onClose, onOpen} = useDisclosure();
  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} css={{cursor: ` default`}}>

    <Box p={["0", "8"]} overflowX={"auto"}>
    <Heading textTransform={"uppercase"} children="All Courses" my={"16"} textAlign={["center", "left "]}/>
          
          <TableContainer width={["100vw" ,"full"]}>
            <Table variant={"simple"} size={"lg"}>
              <TableCaption >
                All available users from database
              </TableCaption>

              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>View</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>

              {courses.map(item =>(
                <Row courseDetailHandler={courseDetailHandler} deleteHandler={deleteHandler} key={item._id} item={item} />
              ))
              }
              </Tbody>
            </Table>
          </TableContainer>

          <CourseModal isOpen={isOpen} courseTitle={"React JS"} onClose={onClose} deleteButtonHandler={deleteLecture} addLectureHandler={addLectureHandler} id={"The complete React JS course"}/>
    </Box>
    <SideBar />
</Grid>
);
}

export default AdminCourses;


function Row({item, courseDetailHandler, deleteHandler, onOpen}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td><Image src={item.poster.url}/></Td>
      <Td>{item.title}</Td>
      <Td textTransform={"uppercase"}>{item.category}</Td>
      <Td>{item.creator}</Td>
      <Td isNumeric>{item.view}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button variant={"outline"} colorScheme={"purple"} onClick={()=>courseDetailHandler(item._id)}>View Lecture</Button>
          <Button color={"red"} onClick={()=>deleteHandler(item._id)}><RiDeleteBin7Fill /></Button>
        </HStack>
      </Td>
      
    </Tr>
  )
}