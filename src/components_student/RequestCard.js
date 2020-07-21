import React from 'react';

const RequestCard = (props) => {

    const handleClick = (evt) => {
        props.setAlternateScreen(true)
        props.setViewPage("Full Request")
        props.updateConvo(props.conversation)
    }
    
    console.log('card', props)
    const handleAcknowledgeClick = (evt) => {
        fetch(`http://localhost:3000/conversations/${props.conversation.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                acknowledged: true
            })
        })
        .then(r => r.json())
        .then((updatedConvo) => {
            console.log(updatedConvo)
            // props.acknowledgeConvo(updatedConvo)
            props.setAlternateScreen(false)
        })
    }

    const handleEditClick = (evt) => {
        props.setAlternateScreen(true)
        props.setViewPage("Edit Screen")
        props.updateConvo(props.conversation)
        props.setFormTopic(props.conversation.topic)
        props.setFormUrgency(props.conversation.urgency)
        props.setFormOfficeHours(props.conversation.office_hours)
        props.setFormDescription(props.conversation.description)
        props.setConvoId(props.conversation.id)
    }

    const handleDeleteClick = (evt) => {
        fetch(`http://localhost:3000/conversations/${props.conversation.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((deletedConvo) => {
            props.deleteConvoFromArray(deletedConvo.id)
        })
    }

    let {description, teacher_response, office_hours, response, time, topic, urgency} = props.conversation

    return (
        <div className="conversation">
            <div className="studentconvo">
                <h5>Request:</h5>
                <p>{description}</p>
                <button className="button" onClick={handleClick}>View Request</button>
                <button className="button" onClick={handleEditClick}>Edit Request</button>
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