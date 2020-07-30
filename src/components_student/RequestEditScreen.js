import React from 'react';

const RequestEditScreen = (props) => {
    // submit form
    const handleFormSubmit = (evt) => {
        evt.preventDefault();

        fetch(`http://localhost:3000/conversations/${props.convoId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                topic: props.formTopic,
                urgency: props.formUrgency,
                office_hours_date: props.formDate,
                time: props.formTime,
                description: props.formDescription
            })
        })
        .then(r => r.json())
        .then((updatedConvo) => {
            props.handleEditSubmit(updatedConvo)
            props.history.push("/student")
        });
    };

    return (
        <div className="request">
            <div className="requestformheader">
                Edit Your Request
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
                            <option value="endofday">By End of Day</option>
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
                            type="text" 
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

export default RequestEditScreen;