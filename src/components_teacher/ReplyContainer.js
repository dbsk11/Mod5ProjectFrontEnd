import React, {useState} from 'react';

const ReplyContainer = (props) => {
    const [formResponse, setFormResponse] = useState("")
    const [formTime, setFormTime] = useState("")

    const handleInput = (evt) => {
        if (evt.target.name === "description"){
            setFormResponse(evt.target.value)
        }
        if (evt.target.name === "office_hours"){
            setFormTime(evt.target.value)
        }
    };

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
                    <label>
                        Description:
                        <input type="text" name="description" value={formResponse} onChange={handleInput} />
                    </label>
                    <label>
                        Office Hours:
                        <input type="text" name="office_hours" value={formTime} onChange={handleInput} />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
                
            </form>
        </div>
        
    );
};

export default ReplyContainer;