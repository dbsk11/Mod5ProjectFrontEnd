import React from 'react';

const ResponseCard = (props) => {
    // destructuring 
    const {response, office_hours, time, office_hours_date, acknowledged} = props.response;
    const {first_name, last_name} = props.response.student;
    
    // edit button 
    const handleEdit = (evt) => {
        props.setStudentConvo(props.response);
        props.setFormResponse(props.response.response);
        props.setFormTime(props.response.time);
        props.setFormDate(props.response.office_hours_date);
        props.history.push('/teacher/reply')
    };

    return (
        <div className={acknowledged ? "responsecardtrue" : "responsecardfalse"}>
            <h5>Name:</h5>
            <p>{first_name} {last_name}</p>
            <h5>Response:</h5>
            <p>{response}</p>
            {office_hours 
            ?
            <div>
                <h5>Scheduled Office Hour:</h5>
                <p>Date: {office_hours ? office_hours_date : "N/A"}</p>
                <p>Time: {office_hours ? time : "N/A"}</p>
            </div>
            :
            <div>
                <h5>Office Hours Requested:</h5>
                <p>No</p>
            </div>
            }
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
};

export default ResponseCard;