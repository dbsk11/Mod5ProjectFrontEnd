import React, { useState,  useEffect } from 'react';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//student pages
import NavBarStudent from './headers/NavBarStudent';
import MainContainer from './components_student/MainContainer'
import StudentProfile from './components_student/StudentProfile'
import RequestScreen from './components_student/RequestScreen'
import ResponseScreen from './components_student/ResponseScreen'

const Student = () => {
    return (
        <h1>Student</h1>
    );
};

export default Student;