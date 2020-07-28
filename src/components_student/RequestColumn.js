import React from 'react';
import RequestCard from './RequestCard';

const RequestColumn = (props) => {
    console.log('column', props)
    // create array to render   
    const arrayToRender = props.convos.map((convoPOJO) => {
        return <RequestCard
            conversation={convoPOJO}
            key={convoPOJO.id}
            setTeacherConvo={props.setTeacherConvo}
            deleteConvoFromArray={props.deleteConvoFromArray}
            setFormTopic={props.setFormTopic}
            setFormUrgency={props.setFormUrgency}
            setFormOfficeHours={props.setFormOfficeHours}
            setFormDescription={props.setFormDescription}
            setConvoId={props.setConvoId}
            history={props.history}
            handleAcknowledge={props.handleAcknowledge}
        />
    })

    // Create a new request
    const handleNewRequest = (evt) => {
        props.history.push("/student/make_request")
        props.setTeacherId(props.teacherId)
        props.setFormKlass(props.klass)
        props.setFormTopic("Lecture")
        props.setFormUrgency("Immediate Response Requested")
        props.setFormOfficeHours(true)
        props.setFormDescription("")
    }

    return (
        <div className="requestcolumn">
            <h1>{props.klass}</h1>
            <button className="newrequest" onClick={handleNewRequest}>Create a Request</button>
            {arrayToRender}
        </div>
    );
};

export default RequestColumn;
