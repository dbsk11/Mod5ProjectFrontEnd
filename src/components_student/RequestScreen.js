import React from 'react';

const RequestScreen = (props) => {
    // submit form
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        props.setTopic(props.formTopic)
        props.setUrgency(props.formUrgency)
        props.setOfficeHours(props.formOfficeHours)
        props.setDescription(props.formDescription)

        fetch("http://localhost:3000/conversations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student_id: props.studentId,
                teacher_id: props.teacherId,
                klass: props.formKlass,
                topic: props.formTopic,
                urgency: props.formUrgency,
                office_hours: props.formOfficeHours,
                description: props.formDescription
            })
        })
        .then(r => r.json())
        .then(newRequest => {
            props.handleSubmit(newRequest)
            props.history.push("/student")
            props.setFormDescription("")
        });
    };

    return (
        <div className="newrequest">
            <div className="newrequestformheader">
                Create A New Request
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="requestform">
                    <label className="topic">
                        Topic:
                        <select value={props.formTopic} onChange={(e) => props.setFormTopic(e.target.value)}>
                            <option value="lecture">Lecture</option>
                            <option value="classwork">Classwork</option>
                            <option value="homework">Homework</option>
                        </select>
                    </label>
                    <label className="urgency">
                        Urgency:
                        <select value={props.formUrgency} onChange={(e) => props.setFormUrgency(e.target.value)}>
                            <option value="immediate">Immediate Response Requested</option>
                            <option value="end of day">By End of Day</option>
                        </select>
                    </label>
                    <label className="requestofficehours">
                        Request Office Hours:
                        <select value={props.formOfficeHours} onChange={(e) => props.setFormOfficeHours(e.target.value)}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>
                    <label className="description" htmlFor="description">
                        Description:
                        <input 
                            type="textfield" 
                            name="description" 
                            autoComplete="off" 
                            value={props.formDescription} 
                            onChange={(e) => props.setFormDescription(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default RequestScreen;