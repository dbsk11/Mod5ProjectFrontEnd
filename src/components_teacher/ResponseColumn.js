import React from 'react';
import ResponseCard from './ResponseCard';

const ResponseColumn = (props) => {
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
            conversations={props.convos} 
            setAlternateScreen={props.setAlternateScreen} 
            setViewPage={props.setViewPage} 
            updateConvo={props.updateConvo} 
            setCurrentResponse={props.setCurrentResponse}
            setCurrentTime={props.setCurrentTime}
        />
    });

    console.log("column", props)
    return (
        <div className="responsecolumn">
            <h1>Responses</h1>
            {arrayOfResponses}
        </div>
    );
};

export default ResponseColumn;