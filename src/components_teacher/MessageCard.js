import React from 'react';

const MessageCard = (props) => {

    let {first_name, last_name} = props.conversation.student
    let {urgency, office_hours} = props.conversation
    
    const handleClick = (evt) => {
        props.setStudentConvo(props.conversation.id)
        props.setMainScreen(true)
    }


    return (
        <div className="messagecard" onClick={handleClick}>
            <h5>Name:</h5>
            <p>{first_name} {last_name}</p>
            <h5>Urgency:</h5>
            <p>{urgency}</p>
            <h5>Office Hours Requested:</h5>
            <p>{office_hours ? "Yes" : "No"}</p>
        </div>
    );
};

export default MessageCard;
