import React from 'react';

const MessageCard = (props) => {
    console.log('card', props)
    // destructuring
    const {first_name, last_name} = props.conversation.student;
    const {urgency, office_hours, teacher_response} = props.conversation;
    
    //handle view button click 
    const handleViewClick = (evt) => {
        props.setViewPage("View")
        props.updateConvo(props.conversation)
        props.setAlternateScreen(true)
        console.log('EDITclick', props.viewPage)
    }

    // handle reply button click
    const handleReplyClick = (evt) => {
        props.setViewPage("Reply")
        props.updateConvo(props.conversation)
        props.setAlternateScreen(true)
        props.setFormResponse("")
        props.setFormTime("")
        console.log('REPLYclick', props.viewPage)
    };

    // Edit Reply
    const handleEdit = (evt) => {
        props.setViewPage("Reply")
        props.setAlternateScreen(true)
        props.updateConvo(props.conversation)
        props.setFormResponse(props.conversation.response)
        props.setFormTime(props.conversation.time)
        console.log('REPLYclick', props.viewPage)
    };

    return (
        <div className="messagecard" 
            style={{backgroundColor: teacher_response ? 'lightgreen' : 'yellow'}}
        >
            <h5>Name:</h5>
            <p>{first_name} {last_name}</p>
            <h5>Urgency:</h5>
            <p>{urgency}</p>
            <h5>Office Hours Requested:</h5>
            <p>{office_hours ? "Yes" : "No"}</p>
            <button onClick={handleViewClick}>View Message</button>
            <div>
                {teacher_response 
                ?
                <button onClick={handleEdit}>Edit Reply</button>
                :
                <button onClick={handleReplyClick}>Reply</button>
                }
            </div>
        </div>
    );
};

export default MessageCard;
