import React, { useState } from 'react';
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

function App() {
  let [userType, setUserType] = useState("")
  let [viewScreen, setViewScreen] = useState(false)

  return (
    <div className="maincontainer">
      <div>
        <Header />
      </div>
      <NavBarTeacher />
          <Route exact path="/teacher" component={MessageContainer} setViewScreen={setViewScreen}/>
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
          <NavBarTeacher />
          <Route exact path="/teacher" component={MessageContainer} />
          <Route exact path="/teacher/profile" component={Profile} />
          <Route exact path="/teacher/reply" component={ReplyContainer} />
          <Route exact path="/teacher/studentrequest" component={StudentRequestContainer} />
        </div>
        }
      </div>
      } */}
      
    </div>
  );
}

export default App;