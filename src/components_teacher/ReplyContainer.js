import React from 'react';
import { withRouter } from 'react-router-dom';

const ReplyContainer = (props) => {
    //submit form
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        fetch(`http://localhost:3000/conversations/${props.convo.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                teacher_response: true,
                response: props.formResponse,
                time: props.formTime
            })
        })
        .then(r => r.json())
        .then(props.history.push('/teacher'))
    };

    // destructuring
    const {first_name, last_name} = props.convo.student;
    const {description, urgency, office_hours} = props.convo;

    return (
        <div>
            <h1>Name:</h1>
            <p>{first_name} {last_name}</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <h3>Urgency:</h3>
            <p>{urgency}</p>
            <h3>Office Hours Requested:</h3>
            <p>{office_hours ? "Yes" : "No"}</p>

            <form onSubmit={handleFormSubmit}>
                <div className="replyform">
                    <label htmlFor="description">
                        Description:
                        <input 
                            type="text" 
                            name="description" 
                            autoComplete="off" 
                            value={props.formResponse} 
                            onChange={(e) => props.setFormResponse(e.target.value)} 
                        />
                    </label>
                    <label htmlFor="office_hours">
                        Office Hours:
                        <input 
                            type="text" 
                            name="office_hours" 
                            autoComplete="off" 
                            value={props.formTime} 
                            onChange={(e) => props.setFormTime(e.target.value)} 
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
        
    );
};

export default withRouter(ReplyContainer);