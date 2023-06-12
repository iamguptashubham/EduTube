import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Components/Home/Home.js';
import Header from './Components/layout/Header';
import Courses from './Components/Courses/Courses.js';
import Footer from './Components/layout/Footer.js';
import Login from './Components/Auth/Login.js';
import Register from './Components/Auth/Register.js';
import ForgetPassword from './Components/Auth/ForgetPassword.js';
import ResetPassWord from './Components/Auth/ResetPassword.js';
import Contact from './Components/Contact/Contact.js';
import Request from './Components/Request/Request.js';
import About from './Components/About/About.js';
import Subscribe from './Components/Payments/Subscribe.js';
import PaymentSuccess from './Components/Payments/PaymentSuccess.js';
import PaymentFail from './Components/Payments/PaymentFail.js';
import NotFound from './Components/layout/NotFound.js';
import CoursePage from './Components/CoursePage/CoursePage.js';
import Profile from './Components/Profile/Profile.js';
import UpdateProfile from './Components/Profile/UpdateProfile.js';
import ChangePassword from './Components/Profile/ChangePassword.js';
import Dashboard from './Components/Admin/Dashboard/Dashboard.js';
import Users from './Components/Admin/Users/Users.js';
import CreateCourse from './Components/Admin/CreateCourse/CreateCourse.js';
import AdminCourses from './Components/Admin/AdminCourses/AdminCourses.js';

function App() {

  // window.addEventListener("contextmenu", (e)=>{e.preventDefault( )})
  return (
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/courses" element = {<Courses />} />
        <Route path="/course/:id" element = {<CoursePage />} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/request" element = {<Request/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/profile" element = {<Profile/>} />
        <Route path="/updateprofile" element= {<UpdateProfile />} />
        <Route path="/changepassword" element= {<ChangePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassWord />} /> {/* <---- this needs to change*/}
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="*" element={<NotFound />} />

        {/* ADMIN ROUTES */}

        <Route path="/admin/dashboard" element={<Dashboard  />} /> {/* LineGraph and Doughnut Graph is an issue currently 😥 */}
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />  
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
