import React from 'react';

const MessageCard = (props) => {
    // destructuring
    const {first_name, last_name} = props.conversation.student;
    const {urgency, office_hours, teacher_response} = props.conversation;
    
    //handle view button click 
    const handleViewClick = (evt) => {
        props.history.push('/teacher/student_request')
        props.setStudentConvo(props.conversation)
    };

    // handle reply button click
    const handleReplyClick = (evt) => {
        props.history.push('/teacher/reply')
        props.setStudentConvo(props.conversation)
        props.setFormResponse("")
        props.setFormTime("")
        props.setFormDate("")
    };

    // Edit Reply
    const handleEdit = (evt) => {
        props.history.push('/teacher/reply')
        props.setFormResponse(props.conversation.response)
        props.setFormTime(props.conversation.time)
        props.setFormDate(props.conversation.office_hours_date)
    };

    return (
        <div className={teacher_response ? "messagecardtrue" : "messagecardfalse"}>
            <div className="cardcontent">
                <h5>Name:</h5>
                <p>{first_name} {last_name}</p>
                <h5>Urgency:</h5>
                <p>{urgency}</p>
                <h5 className="offhours">Office Hours Requested:</h5>
                <p>{office_hours ? "Yes" : "No"}</p>
            </div>
            
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
