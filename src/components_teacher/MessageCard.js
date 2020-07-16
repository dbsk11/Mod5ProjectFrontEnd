import React from 'react';

const MessageCard = (props) => {

    let {first_name, last_name} = props.conversation.student
    let {urgency, office_hours} = props.conversation
    
    const handleViewClick = (evt) => {
        props.setStudentConvo(props.conversation.id)
        props.setMainScreen(true)
    }

    const handleReplyClick = (evt) => {
        console.log(evt.target)
    }

    return (
        <div className="messagecard">
            <h5>Name:</h5>
            <p>{first_name} {last_name}</p>
            <h5>Urgency:</h5>
            <p>{urgency}</p>
            <h5>Office Hours Requested:</h5>
            <p>{office_hours ? "Yes" : "No"}</p>
            <button onClick={handleViewClick}>View Message</button>
            <button onClick={handleReplyClick}>Reply</button>
        </div>
    );
};

export default MessageCard;
