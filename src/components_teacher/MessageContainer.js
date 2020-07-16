import React, { useState, useEffect } from 'react';
import MessageColumn from './MessageColumn';
import ResponseColumn from './ResponseColumn';
import ReplyContainer from './ReplyContainer';
import StudentRequestContainer from './StudentRequestContainer'


const MessageContainer = (props) => {
    let [convo, setConvo] = useState([]);
    let [klass, setKlass] = useState([]);
    let [screen, setScreen] = useState("")
    let [studentConvo, setStudentConvo] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/teachers/1')
        .then(r => r.json())
        .then(data => {
            setConvo(data.conversations)
            setKlass(data.teacher_classes)
        })
    }, []);
 
    const klasses = klass.map((klassPOJO) => {
        return klassPOJO.klass.name
    })

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
        } 
    })

    // array for 2nd class
    const array2 = convo.filter((convoObj) => {
        if(convoObj.klass === klasses[1]){
            return convoObj
        } 
    })

    // array for 3rd class
    const array3 = convo.filter((convoObj) => {
        if(convoObj.klass === klasses[2]){
            return convoObj
        } 
    })

    // array for 4th class
    const array4 = convo.filter((convoObj) => {
        if(convoObj.klass === klasses[3]){
            return convoObj
        } 
    })

    return (
        <div className="messagecontainer">
            {/* {arrayOfConversations.map((convoArray) => {
                return <MessageColumn conversations={convoArray} key={convoArray.id}/>
            })} */}

            <div className="allconvos">
                <MessageColumn klass={klasses[0]} conversations={array1} setViewScreen={props.setViewScreen} setStudentConvo={setStudentConvo} />
                <MessageColumn klass={klasses[1]} conversations={array2} setViewScreen={props.setViewScreen} setStudentConvo={setStudentConvo} />
                <MessageColumn klass={klasses[2]} conversations={array3} setViewScreen={props.setViewScreen} setStudentConvo={setStudentConvo} />
                <MessageColumn klass={klasses[3]} conversations={array4} setViewScreen={props.setViewScreen} setStudentConvo={setStudentConvo} />
                <ResponseColumn conversations={convo}/>
            </div>

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