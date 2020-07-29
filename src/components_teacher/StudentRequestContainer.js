import React from 'react';
import { withRouter } from 'react-router-dom';

const StudentRequestContainer = (props) => {
    // destructuring
    const {first_name, last_name} = props.convo.student;
    const {description, klass, office_hours, date_created, topic, urgency, teacher_response} = props.convo;

    // reply button - update state
    const handleReply = (evt) => {
        props.history.push('/teacher/reply')
        props.setFormResponse("")
        props.setFormTime("")
        props.setFormDate("")
    };

    // edit button - update state
    const handleEdit = (evt) => {
        props.history.push('/teacher/reply')
        props.setFormResponse(props.convo.response)
        props.setFormTime(props.convo.time)
        props.setFormDate(props.convo.office_hours_date)
    };

    return (
        <div className="studentrequest">
            <div className="studentinfo">
                <div className="infodisplay">
                    <h5>Name:</h5>
                    <p>{first_name} {last_name}</p> 
                </div>
                <div className="infodisplay">
                    <h5>Klass:</h5>
                    <p>{klass}</p>
                </div>
            </div>
            <div className="klassinfo">
                <div className="infodisplay">
                    <h5>Topic:</h5>
                    <p>{topic}</p>
                </div>
                <div className="infodisplay">
                    <h5>Urgency:</h5>
                    <p>{urgency}</p>
                </div>
                <div className="infodisplay">
                    <h5>Created at:</h5>
                    <p>{date_created}</p>
                </div>
            </div>
            <div className="requestinfo">
                <div className="infodisplay">
                    <h5>Description:</h5>
                    <p>{description}</p>
                </div>
                <div className="infodisplay">
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

export default withRouter(StudentRequestContainer);