import React, { useState,  useEffect } from 'react';
import './components_teacher/styleteacher.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// teacher pages
import NavBarTeacher from './headers/NavBarTeacher';
import MessageContainer from './components_teacher/MessageContainer'
import Profile from './components_teacher/Profile'
import ReplyContainer from './components_teacher/ReplyContainer'
import StudentRequestContainer from './components_teacher/StudentRequestContainer'

const Teacher = () => {
    // Initial State: Alternate Screen
    const [alternateScreen, setAlternateScreen] = useState(false);
    
    // Initial State: Teacher Resposne Form
    const [response, setResponse] = useState("");
    const [time, setTime] = useState("");

    // onChange for Reply Form / Repopulate Form for Edit
    const [formResponse, setFormResponse] = useState("");
    const [formTime, setFormTime] = useState("");
    
    // Initial State: Converesation ID
    const [convoId, setConvoId] = useState([]);

    // Initial State: Teacher Response
    const [teacherResponse, setTeacherResponse] = useState(false);

    // Initial State: Conversations Array
    const [convos, setConvos] = useState([]);

    // set boolean for alternate screen
    const setAlternateScreen2 = (boolean) => {
        setAlternateScreen(boolean)
    };

    // set converesation ID
    const determineId = (idFromChild) => {
        setConvoId(idFromChild)
    };

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
                    convos={convos}
                    setConvos={setConvos}
                    time={time}
                    setTime={setTime} 
                    response={response}
                    setResponse={setResponse} 
                    setTeacherResponse={setTeacherResponse}
                    formResponse={formResponse}
                    setFormResponse={setFormResponse}
                    formTime={formTime}
                    setFormTime={setFormTime}
                    determineId={determineId} 
                />} 
            />
            <Route exact path="/teacher/profile" component={Profile} />
            <Route exact path="/teacher/reply" component={ReplyContainer} />
            <Route exact path="/teacher/student_request" component={StudentRequestContainer} />
        </div>
    );
};

export default Teacher;