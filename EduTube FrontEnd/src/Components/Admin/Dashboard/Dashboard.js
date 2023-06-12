import { Box, Grid, Heading, Text, Stack, HStack, Progress } from '@chakra-ui/react';
import React from 'react';


import SideBar from '../SideBar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';


const Dashboard = () => {

  const options = {
    title: {
      display: true,
      text: 'My Doughnut Chart',
    }
  };

  const data = {
    labels: ['Suscribed', 'Not Suscribed'],
    datasets: [
      {
        data: [3, 20],
        backgroundColor: ['#FF6384', '#36A2EB' ],
        hoverBackgroundColor: ['#FF6384', '#36A2EB' ],
      },
    ],
  };

  

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} css={{cursor: `default`}}>

        <Box 
        py={"16"} boxSizing='border-box' px={["8", "0"]}>
            <Text textAlign={"center"} opacity={"0.8"} children={`Last change was made on ${String(new Date()).split("G")[0]}`}/>
        <Heading children="Dashboard" textAlign={["center", "left"]} ml={["0", "16"] }
        mb={"16"}/>

        <Stack 
        direction={["column", "row"]}
        justifyContent={"space-evenly"}
        minH={"24"}>

            <DataBox title={"View"} qty={123} qtypercentage={30} profit={true} />
            <DataBox title={"User"} qty={23} qtypercentage={80} profit={true} />
            <DataBox title={"Subscription"} qty={10} qtypercentage={20} profit={false} />

        </Stack>

        <Box
        m={["0","16"]}
        borderRadius={"lg"}
        p={["0", "16"]}
        mt={["4", "16"]}
        boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}
        >
          <Heading children="Views Graph" ml={"16"} pb={"4"} size={"md"} pt={["8", "0"]}/>
        </Box>

        <Grid templateColumns={["1fr", "2fr 1fr"]}>
          <Box p={"4"}>
              <Heading size={"md"} ml={["0", "16"]} children="Progress Bar" textAlign={["center", "left"] } my={"8"}/>
              <Bar title={"View"} value={30} profit={true}/>
              <Bar title={"User"} value={80} profit={true}/>
              <Bar title={"Subscription"} value={20} profit={false} />
          </Box>

          <Box  p={['0', '16']} boxSizing="border-box" py="4">

          <Heading textAlign={'center'} size="md" mb="4" children="Users" />
          </Box>
        </Grid>
        </Box>
        <SideBar />
    </Grid>
  );
}

export default Dashboard;


function DataBox({title, qty, qtypercentage, profit}) {
    return (
        <Box
        w={["full", "20%"]}
        boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}
        p={"8"}
        borderRadius={"lg"}>
          
        <Text children={title} />

        <HStack spacing={"6"}>
        <Text fontSize={"2xl"} fontWeight={"bold"} children={qty}/>
        <HStack>
          <Text children={`${qtypercentage} %`} />
          {profit ?
            <RiArrowUpLine color="green"/>
          :
          <RiArrowDownLine color="red"/>}
        </HStack>
        </HStack>
        <Text opacity={"0.6"} children="Since Last month"/>
        </Box>
    )
};


function Bar({ title, value, profit }) {
  return(
  <Box py="4" px={['0', '20']}>
    <Heading size="sm" children={title} mb="2" />

    <HStack w="full" alignItems={'center'}>
      <Text children={profit ? '0%' : `-${value}%`} />

      <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
  )
};