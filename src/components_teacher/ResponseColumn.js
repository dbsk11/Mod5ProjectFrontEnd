import React from 'react';

const ResponseColumn = (props) => {
    console.log(props.conversations)
    let responsesToRender = props.conversations.filter((convoPOJO) => {
        if (convoPOJO.teacher_response === true){
            return convoPOJO
        }
    })

    return (
        <div className="responsecolumn">
            <h1>Responses</h1>
            <div clasName="responses">
                {responsesToRender}
            </div>
        </div>
    );
};

export default ResponseColumn;