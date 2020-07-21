import React from 'react';

const RequestViewScreen = (props) => {
    // destructuring props 
    let {description, klass, office_hours, topic, urgency} = props.convo;

    return (
        <div className="fullrequest">
            <h1>Class:</h1>
            <p>{klass}</p>
            <h1>Topic:</h1>
            <p>{topic}</p>
            <h1>Urgency:</h1>
            <p>{urgency}</p>
            <h1>Request:</h1>
            <p>{description}</p>
            <h1>Office Hours Requested</h1>
            <p>{office_hours ? "Yes" : "No"}</p>
        </div>
    );
};

export default RequestViewScreen;