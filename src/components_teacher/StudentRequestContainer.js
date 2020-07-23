import React from 'react';

const StudentRequestContainer = (props) => {
    // destructuring
    const {first_name, last_name} = props.convo.student;
    const {description, klass, office_hours, created_at, topic, urgency, teacher_response} = props.convo;

    // reply button - update state
    const handleReply = (evt) => {
        props.setAlternateScreen(true)
        props.setViewPage("Reply")
        props.setFormResponse("")
        props.setFormTime("")
    };

    // edit button - update state
    const handleEdit = (evt) => {
        props.setAlternateScreen(true)
        props.setViewPage("Reply")
        props.setFormResponse(props.convo.response)
        props.setFormTime(props.convo.time)
    };

    return (
        <div className="studentrequest">
            <div className="studentinfo">
                <div>
                    <h5>Name:</h5>
                    <p>{first_name} {last_name}</p> 
                </div>
                <div>
                    <h5>Klass:</h5>
                    <p>{klass}</p>
                </div>
                
            </div>
            <div className="klassinfo">
                <div>
                    <h5>Topic:</h5>
                    <p>{topic}</p>
                </div>
                <div>
                    <h5>Urgency:</h5>
                    <p>{urgency}</p>
                </div>
                <div>
                    <h5>Time Logged::</h5>
                    <p>{created_at}</p>
                </div>
            </div>
            <div className="requestinfo">
                <div>
                    <h5>Description:</h5>
                    <p>{description}</p>
                </div>
                <div>
                    <h5>Office Hours Requested:</h5>
                    <p>{office_hours ? "Yes" : "No"}</p>
                </div>
            </div>
            <div className="studentrequestcontainerbutton">
                {teacher_response
                ?
                <button onClick={handleEdit}>Edit Reply</button>
                :
                <button onClick={handleReply}>Reply</button>
                }
            </div>
        </div>
    );
};

export default StudentRequestContainer;