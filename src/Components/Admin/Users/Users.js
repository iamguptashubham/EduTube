import { Box, Grid, Heading, Table, TableCaption, TableContainer, Thead, Th, Tr, Tbody, HStack, Td, Button } from '@chakra-ui/react';
import React from 'react';


import SideBar from '../SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {

  const users = [{
      _id:"u1",
      name:"Shubham",
      email:"iamguptashubham@gmail.com",
      role:"user",
      subscription :{
        status:"active",
      },
  },

  {
    _id:"u2",
    name:"Pooh",
    email:"iampooh@gmail.com",
    role:"creator",
    subscription :{
      status:"active",
    },
},]


const deleteHandler = (id)=>(
  console.log(id)
)

const changeHandler = (id)=>(
  console.log(id)
)
  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} css={{cursor: ` default`}}>

    <Box p={["0", "16"]} overflowX={"auto"}>
    <Heading textTransform={"uppercase"} children="All Users" my={"16"} textAlign={["center", "left "]}/>
          
          <TableContainer width={["100vw" ,"full"]}>
            <Table variant={"simple"} size={"lg"}>
              <TableCaption >
                All available users from database
              </TableCaption>

              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>

              {users.map(item =>(
                <Row changeHandler={changeHandler} deleteHandler={deleteHandler} key={item._id} item={item} />
              ))
              }
              </Tbody>
            </Table>
          </TableContainer>
    </Box>
    <SideBar />
</Grid>
);
}

export default Users;


function Row({item, changeHandler, deleteHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription && item.subscription.status === 'active'
          ? 'Active'
          : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button variant={"outline"} colorScheme={"purple"} onClick={()=>changeHandler(item._id)}>Change Role</Button>
          <Button color={"red"} onClick={()=>deleteHandler(item._id)}><RiDeleteBin7Fill /></Button>
        </HStack>
      </Td>
      
    </Tr>
  )
}