import React from 'react';
import MessageCard from './MessageCard'

const MessageColumn = (props) => {
    let arrayOfConvos = props.conversations.map((convoPOJO) => {
        return <MessageCard
            conversation={convoPOJO}
            key={convoPOJO.id}
            setMainScreen={props.setMainScreen}
            setStudentConvo={props.setStudentConvo}
        />
    })

    return (
        <div className="messagecolumn">
            <h1>{props.klass}</h1>
            {arrayOfConvos}
        </div>
    );
};

export default MessageColumn;
