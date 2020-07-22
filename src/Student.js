import React, { useState } from 'react';
import './components_student/stylestudent.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

//student pages
import NavBarStudent from './headers/NavBarStudent';
import MainContainer from './components_student/MainContainer'
import StudentProfile from './components_student/StudentProfile'
import RequestScreen from './components_student/RequestScreen'
import StudentLogin from './components_student/StudentLogin'

const Student = (props) => {
    // Initial State: Alternate Screen
    const [alternateScreen, setAlternateScreen] = useState(false);

    // Initial State: Conversations Array
    const [convos, setConvos] = useState([]);

    // set Teacher ID
    const [teacherId, setTeacherId] = useState([]);

    // set Student ID 
    const [studentId, setStudentId] = useState([]);

    // set class for Form
    const [formKlass, setFormKlass] = useState([])

    // Initial State: Request Form
    const [topic, setTopic] = useState("Lecture")
    const [urgency, setUrgency] = useState("Immediate Response Requested")
    const [officeHours, setOfficeHours] = useState(false)
    const [description, setDescription] = useState("")

    // onChange for Request Form / Repopulate Form for Edit
    const [formTopic, setFormTopic] = useState("Lecture")
    const [formUrgency, setFormUrgency] = useState("Immediate Response Requested")
    const [formOfficeHours, setFormOfficeHours] = useState(true)
    const [formDescription, setFormDescription] = useState("")

    // Username and Password Initial State
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Login Form - username, password iniital state
    const [formUsername, setFormUsername] = useState("");
    const [formPassword, setFormPassword] = useState("");

    // set boolean for alternate screen
    const setAlternateScreen2 = (boolean) => {
        setAlternateScreen(boolean)
    };

    //Initialize History
    const history = useHistory();

    // Initialize studentUser
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

    // Login 
    const handleLoginSubmit = (userInfo) => {
        fetch("http://localhost:3000/students/login", {
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
            setStudentUser(resp)
            history.push("/student")
        };
    };

    // clear Student User Info
    const clearStudentUser = () => {
        localStorage.clear();
        setFormPassword("");
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

    return (
        <div className="studentcontainer">
            {studentUser.token
            ?
            <div>
                <NavBarStudent 
                    setAlternateScreen={setAlternateScreen2}
                    clearStudentUser={clearStudentUser}
                    history={history}
                />
                <Route exact path="/student" render={() => 
                    <MainContainer 
                        convos={convos}
                        setConvos={setConvos}
                        alternateScreen={alternateScreen}
                        setAlternateScreen={setAlternateScreen2}
                        teacherId={teacherId}
                        setTeacherId={setTeacherId}
                        studentId={studentId}
                        setStudentId={setStudentId}
                        topic={topic}
                        setTopic={setTopic}
                        urgency={urgency}
                        setUrgency={setUrgency}
                        officeHours={officeHours}
                        setOfficeHours={setOfficeHours}
                        description={description}
                        setDescription={setDescription}
                        formTopic={formTopic}
                        setFormTopic={setFormTopic}
                        formUrgency={formUrgency}
                        setFormUrgency={setFormUrgency}
                        formOfficeHours={formOfficeHours}
                        setFormOfficeHours={setFormOfficeHours}
                        formDescription={formDescription}
                        setFormDescription={setFormDescription}
                        formKlass={formKlass}
                        setFormKlass={setFormKlass}
                        setAcknowledged={props.setAcknowledged}
                    />} 
                />
                <Route exact path="/student/profile" component={StudentProfile}/>
                <Route exact path="/student/make_request" component={RequestScreen}/>
            </div>
            :
            <StudentLogin 
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
            }
        </div>
    );
};

export default Student;