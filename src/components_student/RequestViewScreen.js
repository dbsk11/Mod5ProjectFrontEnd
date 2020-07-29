import React from 'react';

const RequestViewScreen = (props) => {
    console.log('view', props.convo)
    // destructuring props 
    let {id, description, klass, office_hours, topic, urgency, teacher_response} = props.convo;

    const handleEdit = (evt) => {
        props.history.push("/student/edit_request")
        props.setFormTopic(topic)
        props.setFormUrgency(urgency)
        props.setFormOfficeHours(office_hours)
        props.setFormDescription(description)
        props.setConvoId(id)
    };

    return (
        <div className="fullrequest">
            <div className="infodisplay">
                <h1>Class:</h1>
                <p>{klass}</p>
            </div>
            <div className="infodisplay">
                <h1>Topic:</h1>
                <p>{topic}</p>
            </div>
            <div className="infodisplay">
                <h1>Urgency:</h1>
                <p>{urgency}</p>
            </div>
            <div className="infodisplay">
                <h1>Request:</h1>
                <p>{description}</p>
            </div>
            <div className="infodisplay">
                <h1>Office Hours Requested:</h1>
                <p>{office_hours ? "Yes" : "No"}</p>
            </div>
            {teacher_response
            ?
            null
            :
            <button onClick={handleEdit}>Edit Request</button>
            }
        </div>
    );
};

export default RequestViewScreen;