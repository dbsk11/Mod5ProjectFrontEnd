import React, { useState, useEffect } from 'react';
import RequestViewScreen from './RequestViewScreen'
import RequestScreen from './RequestScreen'
import RequestColumn from './RequestColumn'
import RequestEditScreen from './RequestEditScreen'

const MainContainer = (props) => {
    // Initial State: View Page
    const [viewPage, setViewPage] = useState("");

    // Initial State: Convo with Teacher
    const [teacherConvo, setTeacherConvo] = useState([]);

    // Initial State: Student Classes
    const [klass, setKlass] = useState([]);

    // set conversation to display
    const updateConvo = (convoPOJO) => {
        setTeacherConvo(convoPOJO)
    };

    // set convoId
    const [convoId, setConvoId] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/students/1')
        .then(r => r.json())
        .then(data => {
            props.setConvos(data.conversations)
            setKlass(data.student_classes)
            props.setStudentId(data.id)
        })
    }, []);

    const klasses = klass.map((klassPOJO) => {
        return klassPOJO.teacher_class
    });

    const handleSubmit = (newRequest) => {
        let copyOfConvoList = [...props.convos, newRequest]
        props.setConvos(copyOfConvoList)
    };

    const deleteConvoFromArray = (deletedConvoId) => {
        let copyOfConvoList = props.convos.filter((convo) => {
            return convo.id !== deletedConvoId
        })
        props.setConvos(copyOfConvoList)
    };

    const handleEditSubmit = (updatedConvo) => {
        let copyOfConvoList = props.convos.map((convo) => {
            if(convo.id === updatedConvo.id){
                return updatedConvo
            } else {
                return convo
            }
        })
        props.setConvos(copyOfConvoList)
    };

    const arrayToRender = klasses.map((klass) => {
        let array = props.convos.filter((convo) => convo.klass === klass.klass.name)
        return (
            <RequestColumn 
                klass={klass.klass.name}
                key={klass.klass.id}
                convos={array}
                setAlternateScreen={props.setAlternateScreen}
                setViewPage={setViewPage}
                updateConvo={updateConvo}
                setTeacherId={props.setTeacherId}
                setFormKlass={props.setFormKlass}
                deleteConvoFromArray={deleteConvoFromArray}
                setFormTopic={props.setFormTopic}
                setFormUrgency={props.setFormUrgency}
                setFormOfficeHours={props.setFormOfficeHours}
                setFormDescription={props.setFormDescription}
                setConvoId={setConvoId}
            />
        );
    });

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
                <div>
                    {viewPage === "Edit Screen" 
                    ?
                    <div>
                        <RequestEditScreen 
                            formTopic={props.formTopic}
                            setFormTopic={props.setFormTopic}
                            formUrgency={props.formUrgency}
                            setFormUrgency={props.setFormUrgency}
                            formOfficeHours={props.formOfficeHours}
                            setFormOfficeHours={props.setFormOfficeHours}
                            formDescription={props.formDescription}
                            setFormDescription={props.setFormDescription}
                            convoId={convoId}
                            setAlternateScreen={props.setAlternateScreen}
                            handleEditSubmit={handleEditSubmit}
                        />
                    </div>
                    :
                    <div>
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
                    </div>
                    }
                </div>
                
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