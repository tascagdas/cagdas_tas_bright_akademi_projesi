
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/Home.jsx';
import AboutPage from './Pages/About/About.jsx';
import './input.css';
import ContactsPage from './Pages/Contacts/Contacts.jsx';
import Teachers from './Pages/Teachers/Teachers.jsx';
import { React, useEffect, useState } from 'react'
import TeamMember from './Components/TeamMember/TeamMember.jsx';
import { useDispatch, useSelector } from 'react-redux'
import { getTeachers } from './redux/actions/TeacherActions.js';
import CoursesPage from './Pages/CoursesPage/CoursesPage.js';
import CourseFS from './Components/Course/CourseFS.jsx';
import CourseCA from './Components/Course/CourseCA.jsx';
import CourseSS from './Components/Course/CourseSS.jsx';



function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTeachers())
  }, [])



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/instructors/:id" element={<TeamMember />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactsPage />} />
          <Route path="/instructors" element={<Teachers />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/CourseFS" element={<CourseFS />} />
          <Route path="/courses/CourseSS" element={<CourseSS />} />
          <Route path="/courses/CourseCA" element={<CourseCA />} />




        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
