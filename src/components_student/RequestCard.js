import React from 'react';

const RequestCard = (props) => {

    const handleClick = (evt) => {
        props.setAlternateScreen(true)
        props.setViewPage("Full Request")
        props.updateConvo(props.conversation)
    }
    
    const handleAcknowledgeClick = (evt) => {
        //patch request acknowledge
    }

    const handleDeleteClick = (evt) => {
        console.log(evt.target)
    }

    let {klass, description, teacher_response, office_hours, response, time, teacher_id} = props.conversation

    return (
        <div className="conversation">
            <div className="studentconvo">
                <h5>Request:</h5>
                <p>{description}</p>
                <button className="button" onClick={handleClick}>View Request</button>
                <button className="button" onClick={handleDeleteClick}>Delete Request</button>
            </div>
            <div className="teacherconvo">
                {teacher_response
                ?
                <div>
                    <h5>Teacher Response: </h5>
                    <p>{response}</p>
                    <h5>Office Hours: </h5>
                    <p>{office_hours ? time : "N/A"}</p>
                    <button onClick={handleAcknowledgeClick}>Acknowledge</button>
                </div>
                :
                <div className="waitingalert">
                    Waiting for Response
                </div>
                }
            </div>
        </div>
    );
};

export default RequestCard;