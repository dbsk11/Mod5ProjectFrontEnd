import React, { useState } from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// Main Imports
import MainPage from './headers/MainPage';
import Header from './headers/Header';

// Student Imports
import './components_student/stylestudent.css';
import NavBarStudent from './headers/NavBarStudent';
import MainContainer from './components_student/MainContainer';
import StudentProfile from './components_student/StudentProfile';
import RequestScreen from './components_student/RequestScreen';
import StudentLogin from './components_student/StudentLogin';
import RequestViewScreen from './components_student/RequestViewScreen';
import RequestEditScreen from './components_student/RequestEditScreen';

// Teacher Imports
import './components_teacher/styleteacher.css';
import Login from './components_teacher/Login';
import Profile from './components_teacher/Profile';
import ReplyContainer from './components_teacher/ReplyContainer';
import StudentRequestContainer from './components_teacher/StudentRequestContainer';
import NavBarTeacher from './headers/NavBarTeacher';
import MessageContainer from './components_teacher/MessageContainer';

const App = () => {
  //Initialize History
  const history = useHistory();

//TEACHER:
  // Teacher: ID
  const [teacherId, setTeacherId] = useState("");

  // Teacher: Initial Convo Array
  const [teacherConvos, setTeacherConvos] = useState([]);

  // Teacher: Initial Student Convo
  const [teacherStudentConvo, setTeacherStudentConvo] = useState([]);

  // Teacher: onChange for Reply Form / Repopulate Form for Edit
  const [teacherFormResponse, setTeacherFormResponse] = useState("");
  const [teacherFormTime, setTeacherFormTime] = useState("");
  const [teacherFormDate, setTeacherFormDate] = useState("");

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
    .then((data) => {
      console.log(data)
      handleTeacherResponse(data)
      setTeacherId(data.teacher.id)
    })
  };

  // Teacher: Stay Logged In
  // useEffect(() => {
  //   if(localStorage.token){
  //     fetch("http://localhost:3000/teachers/stay_logged_in", {
  //       headers: {
  //         "Authorization": localStorage.token
  //       }
  //     })
  //     .then(r => r.json())
  //     .then(data => {
  //       handleTeacherResponse(data)
  //     })
  //   }
  // }, [])

  // Teacher: Handle Login Response 
  const handleTeacherResponse = (resp) => {
    if(resp.teacher){
      localStorage.token = resp.token
      setTeacherUser(resp)
      history.push("/teacher")
    } else {
      alert(resp.error)
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
    );
  };

  // Teacher: Reply Container Render
  const renderReplyContainer = () => {
    return (
      <ReplyContainer 
        convo={teacherStudentConvo} 
        formResponse={teacherFormResponse}
        setFormResponse={setTeacherFormResponse}
        formDate={teacherFormDate}
        setFormDate={setTeacherFormDate}
        formTime={teacherFormTime}
        setFormTime={setTeacherFormTime}
        history={history}
      />
    );
  };

  // Teacher: Student Request Container Render
  const renderStudentRequestContainer = () => {
    return (
      <StudentRequestContainer 
        convo={teacherStudentConvo} 
        setFormResponse={setTeacherFormResponse}
        setFormTime={setTeacherFormTime}
        setFormDate={setTeacherFormDate}
        history={history}
      />
    );
  };

  // Teacher: Teacher Messages Render
  const renderTeacherMessages = () => {
    return (
      <MessageContainer 
        convos={teacherConvos}
        teacherId={teacherId}
        setConvos={setTeacherConvos}
        setFormResponse={setTeacherFormResponse}
        setFormTime={setTeacherFormTime} 
        setFormDate={setTeacherFormDate}
        setStudentConvo={setTeacherStudentConvo}
        history={history}
      />
    );
  };

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
    );
  };



// STUDENT 
  // Student: set Student ID 
  const [studentId, setStudentId] = useState([]);

  // Student: Initial Conversations Array
  const [studentConvos, setStudentConvos] = useState([]);

  // Student: set Teacher ID
  const [studentTeacherId, setStudentTeacherId] = useState([]);

  // Student: set convoId
  const [studentConvoId, setStudentConvoId] = useState([]);

  // Student: Initial State of Convo with Teacher
  const [studentTeacherConvo, setStudentTeacherConvo] = useState([]);

  // Student: set class for Form
  const [studentFormKlass, setStudentFormKlass] = useState([]);

  // Student: Request Form Initial State
  const [studentTopic, setStudentTopic] = useState("Lecture");
  const [studentUrgency, setStudentUrgency] = useState("Immediate Response Requested");
  const [studentOfficeHours, setStudentOfficeHours] = useState(false);
  const [studentDescription, setStudentDescription] = useState("");

  // Student: onChange for Request Form / Repopulate Form for Edit
  const [studentFormTopic, setStudentFormTopic] = useState("Lecture");
  const [studentFormUrgency, setStudentFormUrgency] = useState("Immediate Response Requested");
  const [studentFormOfficeHours, setStudentFormOfficeHours] = useState(true);
  const [studentFormDescription, setStudentFormDescription] = useState("");

  // Student: Login Form - Username, Password Initial State
  const [studentFormUsername, setStudentFormUsername] = useState("");
  const [studentFormPassword, setStudentFormPassword] = useState("");

  // Student: Initialize StudentUser
  const [studentUser, setStudentUser] = useState({
    studentUser: {
        id: 0, 
        first_name: "", 
        last_name: "",
        username: "",
        email: "",
        dob: "",
        display_age: "",
        fullname: "",
        student_classes: [],
        converstions: []
    },
    token: ""
  });

  // Student: Login 
  const handleStudentLoginSubmit = (userInfo) => {
    fetch("http://localhost:3000/students/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(handleStudentResponse)
  };

  // Student: Stay Logged in 
  // useEffect(() => {
  //   if(localStorage.token){
  //     fetch("http://localhost:3000/students/stay_logged_in", {
  //       headers: {
  //         "Authorization": localStorage.token
  //       }
  //     })
  //     .then(r => r.json())
  //     .then(data => {
  //       handleStudentResponse(data)
  //     })
  //   }
  // }, [])

  // Student: Handle Login Response 
  const handleStudentResponse = (resp) => {
    if(resp.student){
      localStorage.token = resp.token
      setStudentUser(resp)
      history.push("/student")
    } else {
      alert(resp.error) 
    };
  };

  // Student: clear Student User Info
  const clearStudentUser = () => {
    localStorage.clear();
    setStudentFormUsername("");
    setStudentFormPassword("");
    setStudentUser({
        teacherUser: {
            id: 0, 
            first_name: "", 
            last_name: "",
            username: "",
            email: "",
            dob: "",
            display_age: "",
            fullname: "",
            student_classes: [],
            converstions: []
        },
        token: ""
    });
  };

  // create updated convo list to include new convo
  const handleStudentSubmit = (newRequest) => {
    let copyOfConvoList = [...studentConvos, newRequest]
    setStudentConvos(copyOfConvoList)
  };

   // render convo list with updated convo
   const handleStudentEditSubmit = (updatedConvo) => {
    let copyOfConvoList = studentConvos.map((convo) => {
        if(convo.id === updatedConvo.id){
            return updatedConvo
        } else {
            return convo
        }
    })
    setStudentConvos(copyOfConvoList)
  };

  // render convo list with acknowledge update
  const handleAcknowledge = (updatedConvo) => {
    let copyOfConvoList = studentConvos.map((convo) => {
      if(convo.id === updatedConvo.id){
        return updatedConvo
      } else {
        return convo
      }
    })
    setStudentConvos(copyOfConvoList)
  };

  const renderStudentMainContainer = () => {
    return (
      <MainContainer 
        convos={studentConvos}
        setConvos={setStudentConvos}
        setTeacherId={setStudentTeacherId}
        setStudentId={setStudentId}
        formTopic={studentFormTopic}
        setFormTopic={setStudentFormTopic}
        formUrgency={studentFormUrgency}
        setFormUrgency={setStudentFormUrgency}
        formOfficeHours={studentFormOfficeHours}
        setFormOfficeHours={setStudentFormOfficeHours}
        formDescription={studentFormDescription}
        setFormDescription={setStudentFormDescription}
        setFormKlass={setStudentFormKlass}
        history={history}
        setTeacherConvo={setStudentTeacherConvo}
        setConvoId={setStudentConvoId}
        handleAcknowledge={handleAcknowledge}
      />
    );
  };

  const renderStudentProfile = () => {
    return(
      <StudentProfile
        studentUser={studentUser}
      />
    );
  };
  
  const renderStudentLogin = () => {
    return (
      <StudentLogin 
        formUsername={studentFormUsername}
        formPassword={studentFormPassword}
        setFormUsername={setStudentFormUsername}
        setFormPassword={setStudentFormPassword}
        handleLoginSubmit={handleStudentLoginSubmit}
      />
    );
  };

  const renderStudentRequestScreen = () => {
    return (
      <RequestScreen 
        setTopic={setStudentTopic}
        setUrgency={setStudentUrgency}
        setOfficeHours={setStudentOfficeHours}
        setDescription={setStudentDescription}
        formTopic={studentFormTopic}
        setFormTopic={setStudentFormTopic}
        formUrgency={studentFormUrgency}
        setFormUrgency={setStudentFormUrgency}
        formOfficeHours={studentFormOfficeHours}
        setFormOfficeHours={setStudentFormOfficeHours}
        formDescription={studentFormDescription}
        setFormDescription={setStudentFormDescription}
        studentId={studentId}
        teacherId={studentTeacherId}
        formKlass={studentFormKlass}
        handleSubmit={handleStudentSubmit}
        history={history}
      />
    );
  };

  const renderStudentRequestViewScreen = () => {
    return (
      <RequestViewScreen
        convo={studentTeacherConvo}
        key={studentTeacherConvo.id}
        formTopic={studentFormTopic}
        setFormTopic={setStudentFormTopic}
        formUrgency={studentFormUrgency}
        setFormUrgency={setStudentFormUrgency}
        formOfficeHours={studentFormOfficeHours}
        setFormOfficeHours={setStudentFormOfficeHours}
        formDescription={studentFormDescription}
        setFormDescription={setStudentFormDescription}
        history={history}
        setConvoId={setStudentConvoId}
      />
    );
  };

  const renderStudentRequestEditScreen = () => {
    return (
      <RequestEditScreen 
        formTopic={studentFormTopic}
        setFormTopic={setStudentFormTopic}
        formUrgency={studentFormUrgency}
        setFormUrgency={setStudentFormUrgency}
        formOfficeHours={studentFormOfficeHours}
        setFormOfficeHours={setStudentFormOfficeHours}
        formDescription={studentFormDescription}
        setFormDescription={setStudentFormDescription}
        convoId={studentConvoId}
        handleEditSubmit={handleStudentEditSubmit}
        history={history}
      />
    );
  };


// RETURN
  return (
    <div className="maincontainer">
      <Header />
      <Route exact path="/" render={() => <MainPage history={history} />} />
      
      {/* TEACHER */}
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
    

      {/* STUDENT */}
        {studentUser.token
          ?
          <NavBarStudent 
            clearStudentUser={clearStudentUser}
            history={history}
          />
          :
          null
        }
        <Switch>
          <Route exact path="/student" render={() => renderStudentMainContainer() }/>
          <Route exact path="/student/profile" render={() => renderStudentProfile() }/>
          <Route exact path="/student/make_request" render={() => renderStudentRequestScreen() }/>
          <Route exact path="/student/view_request" render={() => renderStudentRequestViewScreen() }/>
          <Route exact path="/student/edit_request" render={() => renderStudentRequestEditScreen() }/>
          <Route exact path="/student/login" render={() => renderStudentLogin() }/>
        </Switch>
    
    </div>
  );
};

let RouterComponent = withRouter(App);
export default RouterComponent;