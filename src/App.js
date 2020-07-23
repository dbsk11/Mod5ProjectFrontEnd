import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

// Main Imports
import MainPage from './headers/MainPage';
import Header from './headers/Header';

// Student Imports
import Student from './Student';

// Teacher Imports
import './components_teacher/styleteacher.css';
import Login from './components_teacher/Login'
import Profile from './components_teacher/Profile'
import ReplyContainer from './components_teacher/ReplyContainer'
import StudentRequestContainer from './components_teacher/StudentRequestContainer'
import NavBarTeacher from './headers/NavBarTeacher'
import MessageContainer from './components_teacher/MessageContainer'



const App = () => {
  //Initialize History
  const history = useHistory();

//TEACHER:
  // Teacher: Initial Convo Array
  const [teacherConvos, setTeacherConvos] = useState([]);

  // Teacher: Initial Student Convo
  const [teacherStudentConvo, setTeacherStudentConvo] = useState([]);

  // Teacher: onChange for Reply Form / Repopulate Form for Edit
  const [teacherFormResponse, setTeacherFormResponse] = useState("");
  const [teacherFormTime, setTeacherFormTime] = useState("");

  // Teacher: Login Form Username/Password Initial State
  const [teacherFormUsername, setTeacherFormUsername] = useState("");
  const [teacherFormPassword, setTeacherFormPassword] = useState("");

  // Teacher: Initialize TeacherUser
  const [teacherUser, setTeacherUser] = useState({
    teacherUser: {
        id: 0, 
        first_name: "", 
        last_name: "",
        subject: "",
        email: "",
        username: "",
        display_name: "",
        teacher_classes: [],
        converstions: []
    },
    token: ""
  });

  // Teacher: Login 
  const handleTeacherLoginSubmit = (userInfo) => {
    fetch("http://localhost:3000/teachers/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(handleTeacherResponse)
  };

  // Teacher: Handle Login Response 
  const handleTeacherResponse = (resp) => {
    if(resp.message){
        alert(resp.message)
    } else {
        localStorage.token = resp.token
        setTeacherUser(resp)
        history.push("/teacher")
    };
  };

  // Teacher: Clear Teacher User Info
  const clearTeacherUser = () => {
    localStorage.clear();
    setTeacherFormUsername("")
    setTeacherFormPassword("");
    setTeacherUser({
        teacherUser: {
            id: 0, 
            first_name: "", 
            last_name: "",
            subject: "",
            email: "",
            username: "",
            display_name: "",
            teacher_classes: [],
            converstions: []
        },
        token: ""
    });
  };

  // Teacher: Profile Render
  const renderTeacherProfile = () => {
    return(
      <Profile 
        teacherUser={teacherUser}
      />
    )
  }

  // Teacher: Reply Container Render
  const renderReplyContainer = () => {
    return (
      <ReplyContainer 
        convo={teacherStudentConvo} 
        formResponse={teacherFormResponse}
        setFormResponse={setTeacherFormResponse}
        formTime={teacherFormTime}
        setFormTime={setTeacherFormTime}
        history={history}
      />
    )
  }

  // Teacher: Student Request Container Render
  const renderStudentRequestContainer = () => {
    return (
      <StudentRequestContainer 
        convo={teacherStudentConvo} 
        setFormResponse={setTeacherFormResponse}
        setFormTime={setTeacherFormTime}
        history={history}
      />
    )
  }

  // Teacher: Teacher Messages Render
  const renderTeacherMessages = () => {
    return (
      <MessageContainer 
        convos={teacherConvos}
        setConvos={setTeacherConvos}
        setFormResponse={setTeacherFormResponse}
        setFormTime={setTeacherFormTime} 
        setStudentConvo={setTeacherStudentConvo}
        history={history}
      />
    ) 
  }

  // Teacher: Login Render
  const renderTeacherLogin = () => {
    return (
      <Login 
        formUsername={teacherFormUsername}
        formPassword={teacherFormPassword}
        setFormUsername={setTeacherFormUsername}
        setFormPassword={setTeacherFormPassword}
        handleLoginSubmit={handleTeacherLoginSubmit}
      />
    )
  }

// STUDENT 
  
// RETURN
  return (
    <div className="maincontainer">
      <Header />
      <Route exact path="/" render={() => <MainPage history={history} />} />
      {teacherUser.token 
        ?
        <NavBarTeacher 
          clearTeacherUser={clearTeacherUser}
          history={history}
        />
        :
        null 
      }
      <Switch>
        <Route exact path="/teacher/login" render={() => renderTeacherLogin() }/>
        <Route exact path="/teacher" render={() => renderTeacherMessages() }/>
        <Route exact path="/teacher/reply" render={() => renderReplyContainer() }/>
        <Route exact path="/teacher/student_request" render={() => renderStudentRequestContainer() }/>
        <Route exact path="/teacher/profile" render={() => renderTeacherProfile() }/>
      </Switch>
    </div>
  );
};

export default App;