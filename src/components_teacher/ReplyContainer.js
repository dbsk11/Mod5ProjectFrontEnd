import React from 'react';

const ReplyContainer = (props) => {
    
    //submit form
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value)
        // const replyInfo = {
        //     e.target.value: e.target.description
        // }
        // props.handleReply(replyInfo)
        // props.determineId(props.teacher.id)
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
                        <input type="text" name="description" value={props.setResponse} onChange={props.handleInputResponse} />
                    </label>
                    <label>
                        Office Hours:
                        <input type="text" name="office_hours" value={props.setTime} onChange={props.handleInputTime} />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
                
            </form>
        </div>
        
    );
};

export default ReplyContainer;