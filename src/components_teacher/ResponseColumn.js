import React from 'react';
import ResponseCard from './ResponseCard';

const ResponseColumn = (props) => {
    // console.log('column', props)
    // filter conversations with responses
    const responsesToRender = props.conversations.filter((convoPOJO) => {
        if (convoPOJO.teacher_response === true){
            return convoPOJO
        };
    });
    
    // create array of responses
    const arrayOfResponses = responsesToRender.map((responsePOJO) => {
        return <ResponseCard
            response={responsePOJO}
            key={responsePOJO.id}
            setStudentConvo={props.setStudentConvo} 
            setFormResponse={props.setFormResponse}
            setFormTime={props.setFormTime}
            setFormDate={props.setFormDate}
            history={props.history}
        />
    });

    return (
        <div className="responsecolumn">
            <h1>Responses</h1>
            {arrayOfResponses}
        </div>
    );
};

export default ResponseColumn;