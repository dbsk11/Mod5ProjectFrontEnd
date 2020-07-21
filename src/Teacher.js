import React, { useState,  useEffect } from 'react';
import './components_teacher/styleteacher.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

// teacher pages
import NavBarTeacher from './headers/NavBarTeacher';
import MessageContainer from './components_teacher/MessageContainer'
import Profile from './components_teacher/Profile'
import ReplyContainer from './components_teacher/ReplyContainer'
import StudentRequestContainer from './components_teacher/StudentRequestContainer'

const Teacher = (props) => {
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

    // Username and Password Initial State
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // Login Form - username, password iniital state
    const [formUsername, setFormUsername] = useState("")
    const [formPassword, setFormPassword] = useState("")

    //Initialize History
    // const history = useHistory();

    // Initialize teacherUser
    // const [teacherUser, setTeacherUser] = useState({
    //     teacherUser: {
    //         id: 0, 
    //         // first_name: "", 
    //         // last_name: "",
    //         // subject: "",
    //         // email: "",
    //         username: "",
    //     //     teacher_classes: [],
    //     //     converstions: []
    //     },
    //     token: ""
    // })

    // set boolean for alternate screen
    const setAlternateScreen2 = (boolean) => {
        setAlternateScreen(boolean)
    };

    // set converesation ID
    const determineId = (idFromChild) => {
        setConvoId(idFromChild)
    };

    // const handleLoginSubmit = (userInfo) => {
    //     console.log('fetch', userInfo)
    //     fetch("http://localhost:3000/teachers/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(userInfo)
    //     })
    //     .then(r => r.json())
    //     .then(console.log)
    // }

    // const handleResponse = (resp) => {
    //     if(resp.message){
    //         alert(resp.error)
    //     } else {
    //         localStorage.token = resp.token
    //         setTeacherUser(resp)
    //         history.push("/teacher")
    //     }
    // }

    // patch request for conversation from teacher
    useEffect(()=>{
        console.log(convoId)
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
            <div>
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
            {/* {props.teacherView === "Login"
            ?
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
            />
            :
            <div>
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
            } */}
        </div>
    );
};

export default Teacher;