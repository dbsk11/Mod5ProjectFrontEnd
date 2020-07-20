import React, { useState, useEffect } from 'react';
import RequestViewScreen from './RequestViewScreen'
import RequestScreen from './RequestScreen'
import RequestColumn from './RequestColumn'

const MainContainer = (props) => {
    // Initial State: View Page
    const [viewPage, setViewPage] = useState("");

    // Initial State: Convo with Teacher
    const [teacherConvo, setTeacherConvo] = useState([])

    // Initial State: Student Classes
    const [klass, setKlass] = useState([]);

    // set conversation to display
    const updateConvo = (convoPOJO) => {
        setTeacherConvo(convoPOJO)
    }

    useEffect(() => {
        fetch('http://localhost:3000/students/1')
        .then(r => r.json())
        .then(data => {
            props.setConvos(data.conversations)
            setKlass(data.student_classes)
            props.setStudentId(data.id)
        })
    }, [])

    const klasses = klass.map((klassPOJO) => {
        return klassPOJO.teacher_class
    })

    const arrayToRender = klasses.map((klass) => {
        let array = props.convos.filter((convo) => convo.klass === klass.klass.name)
        return (
            <RequestColumn 
                klass={klass.klass.name}
                key={klass.klass.id}
                convos={array}
                studentId={props.studentId}
                teacherid={klass.teacher_id}
                setAlternateScreen={props.setAlternateScreen}
                setViewPage={setViewPage}
                updateConvo={updateConvo}
                setTeacherId={props.setTeacherId}
                setFormKlass={props.setFormKlass}
                formKlass={props.formKlass}
            />
        )
    })

    const handleSubmit = (newRequest) => {
        let copyOfConvoList = [...props.convos, newRequest]
        props.setConvos(copyOfConvoList)
    }

    return (
        <div className="studentmain">
            {props.alternateScreen 
            ?
            <div>
                {viewPage === "Full Request"
                ?
                <RequestViewScreen
                    convo={teacherConvo}
                    key={teacherConvo.id}
                    teacherId={props.teacherId}
                    studentId={props.studentId}
                />
                : 
                <RequestScreen 
                    setTopic={props.setTopic}
                    setUrgency={props.setUrgency}
                    setOfficeHours={props.setOfficeHours}
                    setDescription={props.setDescription}
                    formTopic={props.formTopic}
                    setFormTopic={props.setFormTopic}
                    formUrgency={props.formUrgency}
                    setFormUrgency={props.setFormUrgency}
                    formOfficeHours={props.formOfficeHours}
                    setFormOfficeHours={props.setFormOfficeHours}
                    formDescription={props.formDescription}
                    setFormDescription={props.setFormDescription}
                    studentId={props.studentId}
                    teacherId={props.teacherId}
                    formKlass={props.formKlass}
                    handleSubmit={handleSubmit}
                    setAlternateScreen={props.setAlternateScreen}
                />
                }
            </div>
            :
            <div className="messages">
                {arrayToRender}
            </div> 
            }
        </div>
    );
};

export default MainContainer;