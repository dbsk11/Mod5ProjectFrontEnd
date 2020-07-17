import React from 'react';

const MessageCard = (props) => {
    // destructuring
    const {first_name, last_name} = props.conversation.student;
    const {urgency, office_hours} = props.conversation;
    
    //handle view button click 
    const handleViewClick = (evt) => {
        props.updateConvo(props.conversation)
        props.setAlternateScreen(true)
        props.setViewPage("View")
    };

    // handle reply button click
    const handleReplyClick = (evt) => {
        props.updateConvo(props.conversation)
        props.setAlternateScreen(true)
        props.setViewPage("Reply")
    };

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
