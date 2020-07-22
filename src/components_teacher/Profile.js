import React from 'react';

const Profile = (props) => {
    const {display_name, subject, email} = props.teacherUser.teacher

    return (
        <div className="profile">
            <h1>My Profile</h1>
            <h3>Name: </h3>
            <p>{display_name}</p>
            <h4>Subject: </h4>
            <p>{subject}</p>
            <h4>Email: </h4>
            <p>{email}</p>
        </div>
    );
};

export default Profile;