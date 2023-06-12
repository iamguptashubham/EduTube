import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Button, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerHeader, VStack, HStack, Heading, Text } from '@chakra-ui/react';
import {RiMenu5Fill, RiDashboardFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';

function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const isAuthenticated = true;
    const user =  {
        role : 'admin'
    };

  return (
    <>
    <ColorModeSwitcher />
    <Button
    colorScheme='yellow'
    position={"fixed"}
    top={"6"}
    left={"6"} 
    width={"10"}
    zIndex={"overlay"}
    height={"10"}
    onClick={onOpen}
    >
        <RiMenu5Fill />
    </Button>

    <Drawer placement= "left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerHeader borderBottomWidth={"2px"} alignItems={"center"}><VStack>
            <Heading children= "EduTube" />
            <Text fontSize={"md"} children=" A Video Streaming Platform" /></VStack></DrawerHeader>
        <DrawerBody>
            <VStack
            alignItems={"flex-start"}
            spacing={"2"}
            >
            <Link to="/" >
                <Button onClick={onClose}> Home</Button>
            </Link>
            <Link to="/courses" >
                <Button onClick={onClose}>Browse All Courses</Button>
            </Link>
            <Link to="/request" >
                <Button onClick={onClose} >Request A Course</Button>
            </Link>
            <Link to="/contact" >
                <Button onClick={onClose}>Contact Us</Button>
            </Link>
            <Link to="/about" >
                <Button onClick={onClose}>About Us</Button>
            </Link>
            </VStack>

            <HStack
            position={"absolute"}
            bottom="2rem"
            justifyContent={"space-evenly"}
            width={"80%"}
            >
            {isAuthenticated?(<>
                <VStack>
                <HStack>
                <Link to="/profile" >
                <Button onClick={onClose} >Profile</Button>
                </Link>
                <Link to="/logout" >
                <Button onClick={onClose}>Logout</Button>
                </Link>
                </HStack>
                {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                </VStack>
            </>)
            :
            ( <>
                <Link to="/login" >
                <Button onClick={onClose}>Login</Button>
                </Link>
                <p> OR</p>
                <Link to="/register" >
                <Button onClick={onClose}>Sign Up</Button>
            </Link>

            </>)}
            </HStack>
        </DrawerBody>
        </DrawerContent>
        
    </Drawer>

    </>
  );
}

export default Header;
