import React from 'react';

const RequestCard = (props) => {

    const handleClick = (evt) => {
        props.setAlternateScreen(true)
        props.setViewPage("Full Request")
        props.updateConvo(props.conversation)
    }
    
    let {klass, description, teacher_response, office_hours, response, time, teacher_id} = props.conversation

    return (
        <div className="conversation">
            <div className="studentconvo">
                <h5>Request:</h5>
                <p>{description}</p>
                <button onClick={handleClick}>See Entire Request</button>
                <button>Edit Request</button>
                <button>Delete Request</button>
            </div>
            <div className="teacherconvo">
                <h5>Teacher Response: </h5>
                <p>{response}</p>
                <h5>Office Hours: </h5>
                <p>{office_hours ? time : "N/A"}</p>
                <button>Acknowledge</button>
            </div>
        </div>
    );
};

export default RequestCard;