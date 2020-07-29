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
            <h1>Request</h1>
            <div className="infodisplay">
                <h2>Class:</h2>
                <p>{klass}</p>
            </div>
            <div className="infodisplay">
                <h2>Topic:</h2>
                <p>{topic}</p>
            </div>
            <div className="infodisplay">
                <h2>Urgency:</h2>
                <p>{urgency}</p>
            </div>
            <div className="infodisplay">
                <h2>Request:</h2>
                <p>{description}</p>
            </div>
            <div className="infodisplay">
                <h2>Office Hours Requested:</h2>
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