import React, {useState} from 'react';

const ReplyContainer = (props) => {
    const [formResponse, setFormResponse] = useState("")
    const [formTime, setFormTime] = useState("")

    //submit form
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        props.setTeacherResponse(true)
        props.setResponse(formResponse)
        props.setTime(formTime)
        props.determineId(props.convo.id)
    };

    // destructuring
    const {first_name, last_name} = props.convo.student;
    const {description, urgency, office_hours} = props.convo;

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
                            value={formResponse} 
                            onChange={(e) => setFormResponse(e.target.value)} 
                        />
                    </label>
                    <label htmlFor="office_hours">
                        Office Hours:
                        <input 
                            type="text" 
                            name="office_hours" 
                            autoComplete="off" 
                            value={formTime} 
                            onChange={(e) => setFormTime(e.target.value)} 
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
                
            </form>
        </div>
        
    );
};

export default ReplyContainer;