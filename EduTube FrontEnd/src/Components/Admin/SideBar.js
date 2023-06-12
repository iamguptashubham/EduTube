import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri';
import {Link, useLocation} from 'react-router-dom';

const SideBar = () => {

    const location = useLocation();
  return (
    <VStack
    padding={"16"} spacing={"8"} boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}>
        <LinkButton Icon={RiDashboardFill} url={"dashboard"} text={"Dashboard"} active ={location.pathname === "/admin/dashboard"}/>
        <LinkButton Icon={RiAddCircleFill} url={"createcourse"} text={"Create Course"} active ={location.pathname === "/admin/createcourse"}/>
        <LinkButton Icon={RiUser3Fill} url={"users"} text={"User"} active ={location.pathname === "/admin/users"}/>
        <LinkButton Icon={RiEyeFill} url={"courses"} text={"Courses"} active ={location.pathname === "/admin/courses"}/>
        </VStack>
  );
}

export default SideBar;



function LinkButton({url, Icon, text, active}){
    return(
        <Link to={`/admin/${url}`}> 
        <Button variant={"ghost"} colorScheme={active?"purple":" "}>
            <Icon  style={{margin:"2px"}}/>
             {text}</Button>
             </Link>
 
    )
}