import React from 'react';

const ResponseCard = (props) => {
    // destructuring 
    const {response, office_hours, time} = props.response;
    const {first_name, last_name} = props.response.student
    
    // edit button 
    const handleEdit = (evt) => {
        props.setAlternateScreen(true);
        props.setViewPage("Reply");
        props.updateConvo(props.response);
        props.setFormResponse(props.response.response);
        props.setFormTime(props.response.time);
    };

    return (
        <div className="responsecard">
            <h5>Name:</h5>
            <p>{first_name} {last_name}</p>
            <h5>Response:</h5>
            <p>{response}</p>
            <h5>Scheduled Office Hour:</h5>
            <p>{office_hours ? time : "N/A"}</p>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
};

export default ResponseCard;