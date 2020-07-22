import React, { useState, useEffect } from 'react';
import MessageColumn from './MessageColumn';
import ResponseColumn from './ResponseColumn';
import ReplyContainer from './ReplyContainer';
import StudentRequestContainer from './StudentRequestContainer';

const MessageContainer = (props) => {
    // set State
    const [klass, setKlass] = useState([]);
    const [studentConvo, setStudentConvo] = useState([]);
    const [viewPage, setViewPage] = useState("");

    // set conversation
    const updateConvo = (convoPOJO) => {
        setStudentConvo(convoPOJO)
    };

    // fetch teacher information
    useEffect(() => {
        fetch('http://localhost:3000/teachers/1')
        .then(r => r.json())
        .then(data => {
            props.setConvos(data.conversations)
            setKlass(data.teacher_classes)
            
        })
    }, [props.alternateScreen]);
 
    // determine teacher classes
    const klasses = klass.map((klassPOJO) => {
        return klassPOJO.klass.name
    });
 
    // determine array to render
    const arrayToRender = klasses.map((klass) => {
        let array = props.convos.filter((convo) => convo.klass === klass)
        return (
            <MessageColumn 
                klass={klass} 
                conversations={array} 
                setAlternateScreen={props.setAlternateScreen} 
                updateConvo={updateConvo} 
                setViewPage={setViewPage} 
                setFormResponse={props.setFormResponse}
                setFormTime={props.setFormTime}
            />
        )
    })

    return (
        <div className="messagecontainer">
            { props.alternateScreen
            ? 
            <div>
                {viewPage === "View" 
                ?
                <StudentRequestContainer 
                    convo={studentConvo} 
                    setAlternateScreen={props.setAlternateScreen} 
                    setViewPage={setViewPage} 
                    setFormResponse={props.setFormResponse}
                    setFormTime={props.setFormTime}
                />
                :
                <ReplyContainer 
                    convo={studentConvo} 
                    // determineId={props.determineId} 
                    // setTeacherResponse={props.setTeacherResponse}
                    // setTime={props.setTime} 
                    // setResponse={props.setResponse} 
                    formResponse={props.formResponse}
                    setFormResponse={props.setFormResponse}
                    formTime={props.formTime}
                    setFormTime={props.setFormTime}
                    setAlternateScreen={props.setAlternateScreen}
                />
                }
            </div>
            :
            <div className="allconvos">
                {arrayToRender}
                <ResponseColumn 
                    conversations={props.convos} 
                    setAlternateScreen={props.setAlternateScreen} 
                    setViewPage={setViewPage} 
                    updateConvo={updateConvo} 
                    setFormResponse={props.setFormResponse}
                    setFormTime={props.setFormTime}
                />
            </div>
            }
        </div>
    );
};

export default MessageContainer;