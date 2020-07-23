import React from 'react';
import { withRouter } from 'react-router-dom';

const StudentRequestContainer = (props) => {
    // destructuring
    const {first_name, last_name} = props.convo.student;
    const {description, klass, office_hours, created_at, topic, urgency, teacher_response} = props.convo;

    // reply button - update state
    const handleReply = (evt) => {
        props.history.push('/teacher/reply')
        props.setFormResponse("")
        props.setFormTime("")
    };

    // edit button - update state
    const handleEdit = (evt) => {
        props.history.push('/teacher/reply')
        props.setFormResponse(props.convo.response)
        props.setFormTime(props.convo.time)
    };

    return (
        <div className="studentrequest">
            <div className="studentinfo">
                <h5>Name:</h5>
                <p>{first_name} {last_name}</p> 
                <h5>Klass:</h5>
                <p>{klass}</p>
            </div>
            <div className="klassinfo">
                <h5>Topic:</h5>
                <p>{topic}</p>
                <h5>Urgency:</h5>
                <p>{urgency}</p>
                <h5>Time Logged::</h5>
                <p>{created_at}</p>
            </div>
            <div className="requestinfo">
                <h5>Description:</h5>
                <p>{description}</p>
                <h5>Office Hours Requested:</h5>
                <p>{office_hours ? "Yes" : "No"}</p>
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

export default withRouter(StudentRequestContainer);