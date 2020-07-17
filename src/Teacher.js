import React, { useState,  useEffect } from 'react';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// main imports
import Login from './headers/Login';
import Logout from './headers/Logout';

// teacher pages
import NavBarTeacher from './headers/NavBarTeacher';
import MessageContainer from './components_teacher/MessageContainer'
import Profile from './components_teacher/Profile'
import ReplyContainer from './components_teacher/ReplyContainer'
import StudentRequestContainer from './components_teacher/StudentRequestContainer'

const Teacher = () => {
    // Update user state 
    const [userType, setUserType] = useState("")
    
    // Update screen state
    const [alternateScreen, setAlternateScreen] = useState(false)
    
    // Update Teacher Response Form state
    const [response, setResponse] = useState("")
    const [time, setTime] = useState("")
    
    // Update convo ID state
    const [convoId, setConvoId] = useState([])

    // Update state for teacher response
    const [teacherResponse, setTeacherResponse] = useState(false)

    const [convo, setConvo] = useState([]);

    // determine boolean for alternateScreen
    const setAlternateScreen2 = (boolean) => {
        setAlternateScreen(boolean)
    };

    // id from teacher 
    const determineId = (idFromChild) => {
        setConvoId(idFromChild)
    }

    // patch request for conversation from teacher
    useEffect(()=>{
        fetch(`http://localhost:3000/conversations/${convoId}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body:JSON.stringify({
            teacher_response: true,
            response: response,
            time: time
            })
        })
        .then(r => r.json())
        .then(handleSubmission)
    }, [time]);

    // show main page after submitting form 
    const handleSubmission = () => {
        setAlternateScreen(false)
    }

    return (
        <div className="teachercontainer">
            <NavBarTeacher setAlternateScreen={setAlternateScreen2}/>
            <Route exact path="/teacher" render={() => 
                <MessageContainer 
                alternateScreen={alternateScreen} 
                setAlternateScreen={setAlternateScreen2} 
                setConvo={setConvo}
                convo={convo}
                determineId={determineId} 
                setTime={setTime} 
                setResponse={setResponse} 
                setTeacherResponse={setTeacherResponse}
                />} 
            />
            <Route exact path="/teacher/profile" component={Profile} />
            <Route exact path="/teacher/reply" component={ReplyContainer} />
            <Route exact path="/teacher/studentrequest" component={StudentRequestContainer} />
        </div>
    );
};

export default Teacher;