import React from 'react';
import { withRouter } from 'react-router-dom';

const ReplyContainer = (props) => {
    console.log('reply', props)
    //submit form
    const handleFormSubmit = (evt) => {
        console.log(props.formDate)
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
                office_hours_date: props.formDate,
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
        <div className="replypageinfo">
            <div className="infodisplay">
                <h3>Name:</h3>
                <p>{first_name} {last_name}</p>
            </div>
            <div className="infodisplay">
                <h3>Description:</h3>
                <p>{description}</p>
            </div>
            <div className="infodisplay">
                <h3>Urgency:</h3>
                <p>{urgency}</p>
            </div>
            <div className="infodisplay">
                <h3>Office Hours Requested:</h3>
                <p>{office_hours ? "Yes" : "No"}</p>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="replyform">
                    <label htmlFor="description">
                        Description:
                        <input 
                            type="textarea" 
                            name="description" 
                            autoComplete="off" 
                            value={props.formResponse} 
                            onChange={(e) => props.setFormResponse(e.target.value)} 
                        />
                    </label>
                    {office_hours 
                    ?
                    <div className="timeanddate">
                        <label className="officehours" htmlFor="office_hours">
                        Office Hour Date:
                            <input 
                                type="date" 
                                name="date" 
                                autoComplete="off" 
                                value={props.formDate} 
                                onChange={(e) => props.setFormDate(e.target.value)} 
                            />
                        </label>
                        <label htmlFor="office_hours">
                            Office Hour Time:
                            <input 
                                type="time" 
                                name="time" 
                                autoComplete="off" 
                                value={props.formTime} 
                                onChange={(e) => props.setFormTime(e.target.value)} 
                            />
                        </label>
                    </div>
                    :
                    <div className="noofficehours">
                        No Office Hours Requested
                    </div>
                    }
                    <input className="replysubmitbutton" type="submit" value="Submit" />
                </div>
            </form>
        </div>
        
    );
};

export default withRouter(ReplyContainer);