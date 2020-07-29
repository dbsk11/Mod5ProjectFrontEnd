import React from 'react';
import { withRouter } from 'react-router-dom';

const Profile = (props) => {
    const {display_name, subject, email} = props.teacherUser.teacher;

    return (
        <div className="profile">
            <h1>My Profile</h1>
            <div className="infodisplay">
                <h3>Name: </h3>
                <p>{display_name}</p>
            </div>
            <div className="infodisplay">
                <h4>Subject: </h4>
                <p>{subject}</p>
            </div>
            <div className="infodisplay">
                <h4>Email: </h4>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default withRouter(Profile);