import React from 'react';
import ResponseCard from './ResponseCard';

const ResponseColumn = (props) => {
    // filter conversations with responses
    const responsesToRender = props.conversations.filter((convoPOJO) => {
        if (convoPOJO.teacher_response === true){
            return convoPOJO
        };
    });
    
    // sort responses by updated_at
    const sortedResponsesToRender = responsesToRender.sort((convoA, convoB) => {
        return convoB.updated_at.localeCompare(convoA.updated_at)
    })

    // create array of responses
    const arrayOfResponses = sortedResponsesToRender.map((responsePOJO) => {
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