import React, { useState, useEffect } from 'react';
import MessageColumn from './MessageColumn';
import ResponseColumn from './ResponseColumn';
import ReplyContainer from './ReplyContainer';
import StudentRequestContainer from './StudentRequestContainer'


const MessageContainer = (props) => {
    // set State
    const [convo, setConvo] = useState([]);
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
            setConvo(data.conversations)
            setKlass(data.teacher_classes)
        })
    }, []);
 
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
    const array1 = convo.filter((convoObj) => {
        if(convoObj.klass === klasses[0]){
            return convoObj
        };
    });

    // array for 2nd class
    const array2 = convo.filter((convoObj) => {
        if(convoObj.klass === klasses[1]){
            return convoObj
        };
    });

    // array for 3rd class
    const array3 = convo.filter((convoObj) => {
        if(convoObj.klass === klasses[2]){
            return convoObj
        };
    });

    // array for 4th class
    const array4 = convo.filter((convoObj) => {
        if(convoObj.klass === klasses[3]){
            return convoObj
        }; 
    });
    

    return (
        <div className="messagecontainer">
            {/* {arrayOfConversations.map((convoArray) => {
                return <MessageColumn conversations={convoArray} key={convoArray.id}/>
            })} */}
            { props.alternateScreen
            ? 
            <div>
                {viewPage === "View" 
                ?
                <StudentRequestContainer convo={studentConvo} setAlternateScreen={props.setAlternateScreen} updateConvo={updateConvo} setViewPage={setViewPage} />
                :
                <ReplyContainer 
                    convo={studentConvo} 
                    handleReply={props.handleReply} 
                    determineId={props.determineId} 
                    setTime={props.setTime} 
                    setResponse={props.setResponse} 
                    setTeacherResponse={props.setTeacherResponse}
                />
                }
            </div>
            :
            <div className="allconvos">
                <MessageColumn klass={klasses[0]} conversations={array1} setAlternateScreen={props.setAlternateScreen} updateConvo={updateConvo} setViewPage={setViewPage} />
                <MessageColumn klass={klasses[1]} conversations={array2} setAlternateScreen={props.setAlternateScreen} updateConvo={updateConvo} setViewPage={setViewPage} />
                <MessageColumn klass={klasses[2]} conversations={array3} setAlternateScreen={props.setAlternateScreen} updateConvo={updateConvo} setViewPage={setViewPage} />
                <MessageColumn klass={klasses[3]} conversations={array4} setAlternateScreen={props.setAlternateScreen} updateConvo={updateConvo} setViewPage={setViewPage} />
                <ResponseColumn conversations={convo} />
            </div>
            }
            {/* {setMainScreen === false 
            ?
            <div className="allconvos">
                <MessageColumn klass={klasses[0]} conversations={array1} setMainScreen={setMainScreen} setStudentConvo={setStudentConvo} />
                <MessageColumn klass={klasses[1]} conversations={array2} setMainScreen={setMainScreen} setStudentConvo={setStudentConvo} />
                <MessageColumn klass={klasses[2]} conversations={array3} setMainScreen={setMainScreen} setStudentConvo={setStudentConvo} />
                <MessageColumn klass={klasses[3]} conversations={array4} setMainScreen={setMainScreen} setStudentConvo={setStudentConvo} />
                <ResponseColumn/>
            </div>
            :
            <div>
                {setScreen === ""
                ?
                <StudentRequestContainer />
                :
                <ReplyContainer />
                }
            </div>
            } */}
        </div>
    );
};

export default MessageContainer;