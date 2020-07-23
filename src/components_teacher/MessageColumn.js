import React from 'react';
import MessageCard from './MessageCard';

const MessageColumn = (props) => {
    // render array of conversations
    const arrayOfConvos = props.conversations.map((convoPOJO) => {
        return <MessageCard
            conversation={convoPOJO}
            key={convoPOJO.id}
            setAlternateScreen={props.setAlternateScreen}
            updateConvo={props.updateConvo}
            setViewPage={props.setViewPage}
            setFormResponse={props.setFormResponse}
            setFormTime={props.setFormTime}
            viewPage={props.viewPage}
        />
    });

    return (
        <div className="messagecolumn">
            <h1>{props.klass}</h1>
            {arrayOfConvos}
        </div>
    );
};

export default MessageColumn;
