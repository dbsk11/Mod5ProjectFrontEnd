import React, { useState, useEffect } from 'react';
import RequestColumn from './RequestColumn';

const MainContainer = (props) => {
    // Initial State: Student Classes
    const [klass, setKlass] = useState([]);

    // fetch a students conversations
    useEffect(() => {
        fetch('http://localhost:3000/students/1')
        .then(r => r.json())
        .then(data => {
            props.setConvos(data.conversations)
            setKlass(data.student_classes)
            props.setStudentId(data.id)
        })
    }, []);

    // all students classes
    const klasses = klass.map((klassPOJO) => {
        return klassPOJO.teacher_class
    });

    // remove deleted convo from convos being rendered
    const deleteConvoFromArray = (deletedConvoId) => {
        let copyOfConvoList = props.convos.filter((convo) => {
            return convo.id !== deletedConvoId
        })
        props.setConvos(copyOfConvoList)
    };

    // render request column
    const arrayToRender = klasses.map((klass) => {
        let array = props.convos.filter((convo) => convo.klass === klass.klass.name)
        console.log('main', klass, array, props.convos)
        return (
            <RequestColumn 
                klass={klass.klass.name}
                key={klass.klass.id}
                convos={array}
                setTeacherConvo={props.setTeacherConvo}
                teacherId={klass.teacher_id}
                setTeacherId={props.setTeacherId}
                setFormKlass={props.setFormKlass}
                deleteConvoFromArray={deleteConvoFromArray}
                setFormTopic={props.setFormTopic}
                setFormUrgency={props.setFormUrgency}
                setFormOfficeHours={props.setFormOfficeHours}
                setFormDescription={props.setFormDescription}
                setConvoId={props.setConvoId}
                history={props.history}
                handleAcknowledge={props.handleAcknowledge}
            />
        );
    });

    return (
        <div className="messages">
            {arrayToRender}
        </div>
    );
};

export default MainContainer;