import React, { useState,  useEffect, useRef } from 'react';
import './App.css';
import './style.css';
// main imports
import MainPage from './MainPage'
import Header from './headers/Header';
import Login from './headers/Login';
import Logout from './headers/Logout';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// teacher pages
import NavBarTeacher from './headers/NavBarTeacher';
import MessageContainer from './components_teacher/MessageContainer'
import Profile from './components_teacher/Profile'
import ReplyContainer from './components_teacher/ReplyContainer'
import StudentRequestContainer from './components_teacher/StudentRequestContainer'

//student pages
import NavBarStudent from './headers/NavBarStudent';
import MainContainer from './components_student/MainContainer'
import StudentProfile from './components_student/StudentProfile'
import RequestScreen from './components_student/RequestScreen'
import ResponseScreen from './components_student/ResponseScreen'

const App = () => {
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
    <div className="maincontainer">
      <div>
        <Header />
      </div>
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
      
      {/* {userType === ""
      ?
      <Route exact path="/" render={()=><MainPage userType={userType} setUserType={setUserType}/>} />
      :
      <div>
        {userType === "Student"
        ?
        <div>
          <NavBarStudent />
          <Route exact path="/student" component={MainContainer} />
          <Route exact path="/student/profile" component={StudentProfile} />
          <Route exact path="/student/request" component={RequestScreen} />
          <Route exact path="/student/response" component={ResponseScreen} />
        </div>
        :
        <div>
          <NavBarTeacher setAlternateScreen={setAlternateScreen2}/>
          <Route exact path="/teacher" render={() => <MessageContainer alternateScreen={alternateScreen} setAlternateScreen={setAlternateScreen2}/>} />
          <Route exact path="/teacher/profile" component={Profile} />
          <Route exact path="/teacher/reply" render={() => <ReplyContainer handleReply={handleReply} determineId={determineId}/>} />
          <Route exact path="/teacher/studentrequest" component={StudentRequestContainer} />
        </div>
        }
      </div>
      } */}
      
    </div>
  );
};

export default App;