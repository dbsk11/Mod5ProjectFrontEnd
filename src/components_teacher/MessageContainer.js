import React, { useState, useEffect } from 'react';
import MessageColumn from './MessageColumn';
import ResponseColumn from './ResponseColumn';
import { withRouter } from 'react-router-dom';

const MessageContainer = (props) => {
    console.log('container teacher ID', props.teacherId)
    // console.log('container', props)
    // set State
    const [klass, setKlass] = useState([]);

    // fetch teacher information
    useEffect(() => {
        if (props.teacherId){
            fetch(`http://localhost:3000/teachers/${props.teacherId}`)
            .then(r => r.json())
             .then(data => {
            props.setConvos(data.conversations)
            setKlass(data.teacher_classes)
            
        })
            // .then(data => console.log('fetch', data))
        }
       
    }, [props.teacherId]);
    
    
    // useEffect(() => {
    //     fetch("http://localhost:3000/teachers/1")
    //     .then(r => r.json())
    //     .then(data => {
    //         props.setConvos(data.conversations)
    //         setKlass(data.teacher_classes) 
    //     })
    // }, []);

    // determine teacher classes
    const klasses = klass.map((klassPOJO) => {
        return klassPOJO.klass.name
    });
 
    // determine array to render
    const arrayToRender = klasses.map((klass, i) => {
        let array = props.convos.filter((convo) => convo.klass === klass)
        return (
            <MessageColumn 
                klass={klass} 
                conversations={array} 
                key={i}
                setStudentConvo={props.setStudentConvo}
                setFormResponse={props.setFormResponse}
                setFormDate={props.setFormDate}
                setFormTime={props.setFormTime}
                history={props.history}
            />
        )
    })

    return (
        <div className="messagecontainer">
            {arrayToRender}
            <ResponseColumn 
                conversations={props.convos} 
                setStudentConvo={props.setStudentConvo} 
                setFormResponse={props.setFormResponse}
                setFormTime={props.setFormTime}
                setFormDate={props.setFormDate}
                history={props.history}
            />
        </div>
    );
};

export default withRouter(MessageContainer);