import React, { useState } from 'react';
import './components_teacher/styleteacher.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

// teacher pages
import NavBarTeacher from './headers/NavBarTeacher';
import MessageContainer from './components_teacher/MessageContainer'
import Profile from './components_teacher/Profile'
import ReplyContainer from './components_teacher/ReplyContainer'
import StudentRequestContainer from './components_teacher/StudentRequestContainer'
import Login from './components_teacher/Login'

const Teacher = (props) => {
    // // Initial State: Alternate Screen
    // const [alternateScreen, setAlternateScreen] = useState(false);

    // // onChange for Reply Form / Repopulate Form for Edit
    // const [formResponse, setFormResponse] = useState("");
    // const [formTime, setFormTime] = useState("");

    // // Initial State: Conversations Array
    // const [convos, setConvos] = useState([]);

    // const [studentConvo, setStudentConvo] = useState([]);
    
    // const [viewPage, setViewPage] = useState("");
    // // Username and Password Initial State
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // // Login Form - username, password iniital state
    // const [formUsername, setFormUsername] = useState("");
    // const [formPassword, setFormPassword] = useState("");

    // // set boolean for alternate screen
    // const setAlternateScreen2 = (boolean) => {
    //     setAlternateScreen(boolean)
    // };

    //Initialize History
    // const history = useHistory();

    // Initialize teacherUser
    // const [teacherUser, setTeacherUser] = useState({
    //     teacherUser: {
    //         id: 0, 
    //         first_name: "", 
    //         last_name: "",
    //         subject: "",
    //         email: "",
    //         username: "",
    //         display_name: "",
    //         teacher_classes: [],
    //         converstions: []
    //     },
    //     token: ""
    // });

    // // Login 
    // const handleLoginSubmit = (userInfo) => {
    //     fetch("http://localhost:3000/teachers/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(userInfo)
    //     })
    //     .then(r => r.json())
    //     .then(handleResponse)
    // };

    // // Handle Login Response 
    // const handleResponse = (resp) => {
    //     if(resp.message){
    //         alert(resp.message)
    //     } else {
    //         localStorage.token = resp.token
    //         setTeacherUser(resp)
    //         history.push("/teacher")
    //     };
    // };

    // // clear Teacher User Info
    // const clearTeacherUser = () => {
    //     localStorage.clear();
    //     setFormPassword("");
    //     setTeacherUser({
    //         teacherUser: {
    //             id: 0, 
    //             first_name: "", 
    //             last_name: "",
    //             subject: "",
    //             email: "",
    //             username: "",
    //             display_name: "",
    //             teacher_classes: [],
    //             converstions: []
    //         },
    //         token: ""
    //     });
    // };

    return (
        <div className="teachercontainer">
            {props.viewPage === "View" 
            ?
            <Route exact path="/teacher/student_request" render={() => 
                <StudentRequestContainer 
                    convo={props.studentConvo} 
                    setAlternateScreen={props.setAlternateScreen} 
                    setViewPage={props.setViewPage} 
                    setFormResponse={props.setFormResponse}
                    setFormTime={props.setFormTime}
                />}
            />
            :
            <Route exact path="/teacher/reply" render={() =>  
                <ReplyContainer 
                    convo={props.studentConvo} 
                    formResponse={props.formResponse}
                    setFormResponse={props.setFormResponse}
                    formTime={props.formTime}
                    setFormTime={props.setFormTime}
                    setAlternateScreen={props.setAlternateScreen}
                />}
            />
            }
        </div>
    );
};

export default Teacher;