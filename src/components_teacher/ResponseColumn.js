import React from 'react';
import ResponseCard from './ResponseCard';

const ResponseColumn = (props) => {
    let responsesToRender = props.conversations.filter((convoPOJO) => {
        if (convoPOJO.teacher_response === true){
            return convoPOJO
        }
    })
    
    let arrayOfResponses = responsesToRender.map((responsePOJO) => {
        return <ResponseCard
            response={responsePOJO}
            key={responsePOJO.id}
        />
    })

    return (
        <div className="responsecolumn">
            <h1>Responses</h1>
            {arrayOfResponses}
        </div>
    );
};

export default ResponseColumn;