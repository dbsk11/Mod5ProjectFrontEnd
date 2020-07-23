import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// main imports
import MainPage from './headers/MainPage';
import Header from './headers/Header';
import Teacher from './Teacher';
import Student from './Student';
import Login from './components_teacher/Login'
import Profile from './components_teacher/Profile'
import ReplyContainer from './components_teacher/ReplyContainer'
import StudentRequestContainer from './components_teacher/StudentRequestContainer'
import NavBarTeacher from './headers/NavBarTeacher'

import { useHistory } from 'react-router-dom'

const App = () => {
  // Update user state 
  const [userType, setUserType] = useState("");

  // Initial State: Alternate Screen
  const [alternateScreen, setAlternateScreen] = useState(false);

  // set boolean for alternate screen
  const setAlternateScreen2 = (boolean) => {
    setAlternateScreen(boolean)
  };

  // Username and Password Initial State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Login Form - username, password iniital state
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");

  //Initialize History
  const history = useHistory();

  // Initialize teacherUser
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

  // Login 
  const handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:3000/teachers/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(handleResponse)
  };

  // Handle Login Response 
  const handleResponse = (resp) => {
    if(resp.message){
        alert(resp.message)
    } else {
        localStorage.token = resp.token
        setTeacherUser(resp)
        history.push("/teacher")
    };
  };

  // clear Teacher User Info
  const clearTeacherUser = () => {
    localStorage.clear();
    setFormUsername("")
    setFormPassword("");
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

  
  return (
    <div className="maincontainer">
      <div>
        <Header />
      </div>
      <Route exact path="/" render={() => <MainPage setUserType={setUserType}/>} />
      {teacherUser.token 
        ?
        <div>
          <NavBarTeacher 
            setAlternateScreen={setAlternateScreen2}
            clearTeacherUser={clearTeacherUser}
            history={history}
          />
          <Route exact path="/teacher" render={() => 
            <Teacher 
              setAlternateScreen2={setAlternateScreen2}
              setAlternateScreen={setAlternateScreen}
            />} 
          />
          <Route exact path="/teacher/profile" render={() => 
            <Profile 
                teacherUser={teacherUser}
            />}
          />
          {/* <Route exact path="/teacher/reply" component={ReplyContainer} />
          <Route exact path="/teacher/student_request" component={StudentRequestContainer} /> */}
        </div>
        :
          <Route exact path="/teacher/login" render={() => 
            <Login 
                setUsername={setUsername} 
                setPassword={setPassword} 
                password={password} 
                username={username}
                formUsername={formUsername}
                formPassword={formPassword}
                setFormUsername={setFormUsername}
                setFormPassword={setFormPassword}
                handleLoginSubmit={handleLoginSubmit}
            />}
          />
      }
      
    </div>
  );
};

export default App;



{/* <Student />/ */}
      {/* <Teacher /> */}
        {/* {userType === ""
        ?
        <Route exact path="/" render={() => <MainPage setUserType={setUserType}/>} />
        :
        <div>
          {userType === "Student"
          ?
          <Route exact path="/student" render={() => <StudentPage />}/>
          :
          <Route exact path="/teacher" render={() => <TeacherPage />}/>
          }
        </div>
        } */}