import React, { useState,  useEffect } from 'react';
import './components_student/stylestudent.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//student pages
import NavBarStudent from './headers/NavBarStudent';
import MainContainer from './components_student/MainContainer'
import StudentProfile from './components_student/StudentProfile'
import RequestScreen from './components_student/RequestScreen'
import ResponseScreen from './components_student/ResponseScreen'

const Student = () => {
    return (
        <div className="studentcontainer">
            <NavBarStudent />
            <Route exact path="/student" render={() => <MainContainer />} />
            <Route exact path="/student/profile" component={StudentProfile}/>
            <Route exact path="/student/make_request" component={RequestScreen}/>
            <Route exact path="/student/view_response" component={ResponseScreen}/>
        </div>
    );
};

export default Student;