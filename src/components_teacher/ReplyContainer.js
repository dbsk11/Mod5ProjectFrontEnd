import React, {useState} from 'react';

const ReplyContainer = (props) => {
    //submit form
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        props.setTeacherResponse(true)
        props.setResponse(props.formResponse)
        props.setTime(props.formTime)
        props.determineId(props.convo.id)
    };

    // destructuring
    const {first_name, last_name} = props.convo.student;
    const {description, urgency, office_hours} = props.convo;

    console.log(props.currentTime, props.currentResponse)
    return (
        <div>
            <div>
                <h1>Name:</h1>
                <p>{first_name} {last_name}</p>
            </div>
            <div>
                <h3>Description:</h3>
                <p>{description}</p>
                <h3>Urgency:</h3>
                <p>{urgency}</p>
                <h3>Office Hours Requested:</h3>
                <p>{office_hours ? "Yes" : "No"}</p>
            </div>

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

export default ReplyContainer;