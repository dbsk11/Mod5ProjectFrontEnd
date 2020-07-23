import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

// main imports
import MainPage from './headers/MainPage';
import Header from './headers/Header';
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
  // Update user state 
  const [userType, setUserType] = useState("");

  //Initialize History
  const history = useHistory();


//TEACHER:
  // Teacher: Alternate Screen Initial State
  const [teacherAlternateScreen, setTeacherAlternateScreen] = useState(false);

  // Teacher: set boolean for alternate screen
  const setTeacherAlternateScreen2 = (boolean) => {
    setTeacherAlternateScreen(boolean)
  };

  // Teacher: Teacher View Page Initial State
  const [teacherViewPage, setTeacherViewPage] = useState("");

  // Teacher: Conversations Array Initial State
  const [teacherConvos, setTeacherConvos] = useState([]);

  // Teacher: Student Conversations Initial State
  const [teacherStudentConvo, setTeacherStudentConvo] = useState([]);

  // Teacher: onChange for Reply Form / Repopulate Form for Edit
  const [teacherFormResponse, setTeacherFormResponse] = useState("");
  const [teacherFormTime, setTeacherFormTime] = useState("");

  // Teacher: Username and Password Initial State
  const [teacherUsername, setTeacherUsername] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");

  // Teacher: Login Form - username, password iniital state
  const [teacherFormUsername, setTeacherFormUsername] = useState("");
  const [teacherFormPassword, setTeacherFormPassword] = useState("");

  // Teacher: Initialize teacherUser
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

  // Teacher: clear Teacher User Info
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

  
// STUDENT 
  

  console.log('app', teacherViewPage)
  console.log('app', teacherAlternateScreen)
// RETURN
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
            setAlternateScreen={setTeacherAlternateScreen2}
            clearTeacherUser={clearTeacherUser}
            history={history}
          />

          <Route exact path="/teacher/profile" render={() => 
            <Profile 
                teacherUser={teacherUser}
            />}
          />
          {teacherAlternateScreen 
          ?
          <div>
            {teacherViewPage === "View"
            ?
            <Route exact path="/teacher/student_request" render={() => 
              <StudentRequestContainer
                convo={teacherStudentConvo} 
                setAlternateScreen={setTeacherAlternateScreen} 
                setViewPage={setTeacherViewPage} 
                setFormResponse={setTeacherFormResponse}
                setFormTime={setTeacherFormTime}
              />} 
            />
            :
            <Route exact path="/teacher/reply" render={() =>  
              <ReplyContainer 
                  convo={teacherStudentConvo} 
                  formResponse={teacherFormResponse}
                  setFormResponse={setTeacherFormResponse}
                  formTime={teacherFormTime}
                  setFormTime={setTeacherFormTime}
                  setAlternateScreen={setTeacherAlternateScreen}
              />}
          />
            }
          </div>
          :
          <div className="teachercontainer">
            <Route exact path="/teacher" render={() => 
              <MessageContainer 
                setAlternateScreen2={setTeacherAlternateScreen2}
                setAlternateScreen={setTeacherAlternateScreen}
                convos={teacherConvos}
                setConvos={setTeacherConvos}
                formResponse={teacherFormResponse}
                setFormResponse={setTeacherFormResponse}
                formTime={teacherFormTime}
                setFormTime={setTeacherFormTime} 
                setStudentConvo={setTeacherStudentConvo}
                setViewPage={setTeacherViewPage}
                viewPage={teacherViewPage}
              />} 
            />
          </div>
          }
        </div>
        :
          <Route exact path="/teacher/login" render={() => 
            <Login 
                setUsername={setTeacherUsername} 
                setPassword={setTeacherPassword} 
                password={teacherPassword} 
                username={teacherUsername}
                formUsername={teacherFormUsername}
                formPassword={teacherFormPassword}
                setFormUsername={setTeacherFormUsername}
                setFormPassword={setTeacherFormPassword}
                handleLoginSubmit={handleTeacherLoginSubmit}
            />}
          />
      }
      
    </div>
  );
};

export default App;