import React, { useState } from 'react';
import './components_student/stylestudent.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//student pages
import NavBarStudent from './headers/NavBarStudent';
import MainContainer from './components_student/MainContainer'
import StudentProfile from './components_student/StudentProfile'
import RequestScreen from './components_student/RequestScreen'

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

    const setAlternateScreen2 = (boolean) => {
        setAlternateScreen(boolean)
    };

    return (
        <div className="studentcontainer">
            <NavBarStudent 
                setAlternateScreen={setAlternateScreen2}
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
    );
};

export default Student;