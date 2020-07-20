import React from 'react';
import RequestCard from './RequestCard';

const RequestColumn = (props) => {
    // create array to render   
    const arrayToRender = props.convos.map((convoPOJO) => {
        return <RequestCard
            conversation={convoPOJO}
            key={convoPOJO.id}
            setAlternateScreen={props.setAlternateScreen}
            setViewPage={props.setViewPage}
            updateConvo={props.updateConvo}
        />
    })

    const handleNewRequest = (evt) => {
        props.setAlternateScreen(true)
        props.setViewPage("Make Request")
        props.setTeacherId(props.teacherid)
        props.setFormKlass(props.klass)
    }

    return (
        <div className="requestcolumn">
            <h1>{props.klass}</h1>
            <button className="newrequest" onClick={handleNewRequest}>Create a Request</button>
            {arrayToRender}
        </div>
    );
};

export default RequestColumn;
