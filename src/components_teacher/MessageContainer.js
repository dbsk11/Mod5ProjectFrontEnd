import React, { useState, useEffect } from 'react';
import MessageColumn from './MessageColumn';
import ResponseColumn from './ResponseColumn';
import ReplyContainer from './ReplyContainer';
import StudentRequestContainer from './StudentRequestContainer'


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

    // counter to allow for inconsistent numbers of classes
    // const arrayOfConversations = convo.filter((convoObj) => {
    //     let arrayToRender = []
    //     for (let i = 0; i < klasses.length; i++) {
    //         if(convoObj.klass === klasses[i]){
    //             arrayToRender[klasses[i]] = convoObj
    //         }
    //     }return arrayToRender
    // })
    
    // array for 1st class
    const array1 = props.convos.filter((convoObj) => {
        if(convoObj.klass === klasses[0]){
            return convoObj
        };
    });

    // array for 2nd class
    const array2 = props.convos.filter((convoObj) => {
        if(convoObj.klass === klasses[1]){
            return convoObj
        };
    });

    // array for 3rd class
    const array3 = props.convos.filter((convoObj) => {
        if(convoObj.klass === klasses[2]){
            return convoObj
        };
    });

    // array for 4th class
    const array4 = props.convos.filter((convoObj) => {
        if(convoObj.klass === klasses[3]){
            return convoObj
        }; 
    });

    console.log("current", props.currentResponse, props.currentTime)
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
                    determineId={props.determineId} 
                    setTeacherResponse={props.setTeacherResponse}
                    setTime={props.setTime} 
                    setResponse={props.setResponse} 
                    formResponse={props.formResponse}
                    setFormResponse={props.setFormResponse}
                    formTime={props.formTime}
                    setFormTime={props.setFormTime}
                />
                }
            </div>
            :
            <div className="allconvos">
                <MessageColumn 
                    klass={klasses[0]} 
                    conversations={array1} 
                    setAlternateScreen={props.setAlternateScreen} 
                    updateConvo={updateConvo} 
                    setViewPage={setViewPage} 
                    setFormResponse={props.setFormResponse}
                    setFormTime={props.setFormTime}
                />
                <MessageColumn 
                    klass={klasses[1]} 
                    conversations={array2} 
                    setAlternateScreen={props.setAlternateScreen} 
                    updateConvo={updateConvo} 
                    setViewPage={setViewPage} 
                    setFormResponse={props.setFormResponse}
                    setFormTime={props.setFormTime}
                />
                <MessageColumn 
                    klass={klasses[2]} 
                    conversations={array3} 
                    setAlternateScreen={props.setAlternateScreen} 
                    updateConvo={updateConvo} 
                    setViewPage={setViewPage} 
                    setFormResponse={props.setFormResponse}
                    setFormTime={props.setFormTime}
                />
                <MessageColumn 
                    klass={klasses[3]} 
                    conversations={array4} 
                    setAlternateScreen={props.setAlternateScreen} 
                    updateConvo={updateConvo} 
                    setViewPage={setViewPage} 
                    setFormResponse={props.setFormResponse}
                    setFormTime={props.setFormTime}
                />
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