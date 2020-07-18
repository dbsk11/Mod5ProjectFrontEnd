import React from 'react';

const ResponseCard = (props) => {
    console.log(props)
    // destructuring 
    const {response, office_hours, time} = props.response;
    
    // edit button 
    const handleEdit = (evt) => {
        console.log("evt", evt.target)
        props.setAlternateScreen(true)
        props.setViewPage("Reply")
        props.updateConvo(props.response)
        props.setCurrentResponse(props.response.response)
        props.setCurrentTime(props.response.time)
    };

    return (
        <div className="responsecard">
            <h5>Name:</h5>
            <h5>Response:</h5>
            <p>{response}</p>
            <h5>Scheduled Office Hour:</h5>
            <p>{office_hours ? time : "N/A"}</p>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
};

export default ResponseCard;